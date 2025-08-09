import * as THREE from 'three'
import React, { JSX, useRef, useMemo, useState, useCallback } from 'react'
import { useGLTF, useEnvironment } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { GLTF } from 'three-stdlib'
import './materials/liquidRefractionMaterial'

import lerp from 'lerp'

type GLTFResult = GLTF & {
  nodes: {
    Body: THREE.Mesh
    Label: THREE.Mesh
    Cap: THREE.Mesh
  }
  materials: {
    BodyMaterial: THREE.MeshStandardMaterial
    LabelMaterial: THREE.MeshStandardMaterial
    CapMaterial: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/spicetale2.glb') as unknown as GLTFResult
  const { size } = useThree()
  const containerRef = useRef<THREE.Group>(null)
  const liquidBody = useRef<THREE.Mesh>(null)
  const animated = useRef({ x: 0, y: 0, z: 0 })
  const wobbleAmountToAddX = useRef(0)
  const wobbleAmountToAddZ = useRef(0)
  const lastPos = useRef(new THREE.Vector3())
  const lastRot = useRef(new THREE.Vector3())
  const liquidTilt = useRef({ x: 0, z: 0, vx: 0, vz: 0 })
  const ripple = useRef({ amplitude: 0, phase: 0 })
  const [rippleActive, setRippleActive] = useState(false)
  const rippleTimeout = useRef<NodeJS.Timeout | null>(null)
  const prevShowLiquid = useRef(true)

  // Environment map for realistic reflections
  const envMap = useEnvironment({ preset: 'city' })

  // Material controls for the plastic material
  const materialProps = useControls('Plastic Material', {
    color: { value: '#ffffff' },
    metalness: { value: 0, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    transmission: { value: 1.0, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.4, min: 1, max: 2.33, step: 0.01 },
    reflectivity: { value: 0.1, min: 0, max: 1, step: 0.01 },
    thickness: { value: 0.1, min: 0, max: 5, step: 0.1 },
    envMapIntensity: { value: 0.5, min: 0, max: 3, step: 0.1 },
    clearcoat: { value: 0.5, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    opacity: { value: 1, min: 0, max: 1, step: 0.01, label: 'Body Opacity' },
  })

  // Rotation controls
  const rotationControls = useControls('Rotation', {
    rotationX: { value: 0, min: 0, max: Math.PI * 2, step: 0.1 },
    rotationY: { value: 0, min: 0, max: Math.PI * 2, step: 0.1 },
    rotationZ: { value: 0.2, min: 0, max: Math.PI * 2, step: 0.1 },
    autoRotate: { value: true },
    rotationAxis: { value: 'y', options: ['x', 'y', 'z'] },
    rotationSpeed: { value: 0.02, min: 0, max: 0.1, step: 0.001 }
  })

  // Liquid controls
  const liquidControls = useControls('Liquid', {
    showLiquid: { value: true, label: 'Show Liquid' },
    fillAmount: { value: 0.1, min: -1, max: 1, step: 0.01, label: 'Height' },
    color: { value: '#7A3E11', label: 'Color' },
    opacity: { value: 0.95, min: 0, max: 1, step: 0.01 },
    rippleAmplitude: { value: 0.03, min: 0.01, max: 0.2, step: 0.01, label: 'Ripple Amplitude' }
  })

  // Liquid uniforms
  const uniforms = useMemo(
    () => ({
      resolution: { value: new THREE.Vector2(size.width, size.height) },
      fillAmount: { value: liquidControls.fillAmount },
      wobbleX: { value: 0 },
      wobbleZ: { value: 0 },
      tiltX: { value: 0 },
      tiltZ: { value: 0 },
      rippleAmplitude: { value: 0 },
      ripplePhase: { value: 0 },
      tint: { value: new THREE.Vector4(...new THREE.Color(liquidControls.color).toArray(), liquidControls.opacity) }
    }),
    [size, liquidControls.fillAmount, liquidControls.color, liquidControls.opacity]
  )

  const triggerRipple = useCallback(() => {
    if (rippleActive) return
    setRippleActive(true)
    ripple.current.amplitude = liquidControls.rippleAmplitude
    ripple.current.phase = 0
    if (rippleTimeout.current) clearTimeout(rippleTimeout.current)
    rippleTimeout.current = setTimeout(() => {
      setRippleActive(false)
    }, 700)
  }, [rippleActive, liquidControls.rippleAmplitude])

  // Handle showLiquid toggle
  React.useEffect(() => {
    if (liquidControls.showLiquid !== prevShowLiquid.current) {
      if (liquidControls.showLiquid) {
        triggerRipple()
      } else {
        setRippleActive(false)
        ripple.current.amplitude = 0
      }
      prevShowLiquid.current = liquidControls.showLiquid
    }
  }, [liquidControls.showLiquid, triggerRipple])

  // Body click handler
  const handleBodyClick = () => {
    if (!rippleActive && liquidControls.showLiquid) {
      triggerRipple()
    }
  }

  useFrame(({ clock }) => {
    if (!containerRef.current) return

    if (rotationControls.autoRotate) {
      animated.current[rotationControls.rotationAxis as keyof typeof animated.current] += rotationControls.rotationSpeed
    } else {
      animated.current.x = 0
      animated.current.y = 0
      animated.current.z = 0
    }

    containerRef.current.rotation.x = rotationControls.rotationX + animated.current.x
    containerRef.current.rotation.y = rotationControls.rotationY + animated.current.y
    containerRef.current.rotation.z = rotationControls.rotationZ + animated.current.z

    const time = clock.getElapsedTime()
    const delta = Math.max(clock.getDelta(), 0.01)

    // Spring-damper inertia for liquid tilt
    const targetTiltX = rotationControls.autoRotate ? containerRef.current.rotation.x : 0
    const targetTiltZ = rotationControls.autoRotate ? containerRef.current.rotation.z : 0
    const stiffness = 8
    const damping = 1.5
    liquidTilt.current.vx += (targetTiltX - liquidTilt.current.x) * stiffness * delta
    liquidTilt.current.vx *= Math.exp(-damping * delta)
    liquidTilt.current.vz += (targetTiltZ - liquidTilt.current.z) * stiffness * delta
    liquidTilt.current.vz *= Math.exp(-damping * delta)
    liquidTilt.current.x += liquidTilt.current.vx * delta
    liquidTilt.current.z += liquidTilt.current.vz * delta

    // Ripples
    const velocity = lastPos.current.clone()
    velocity.sub(containerRef.current.position).divideScalar(delta)
    const rotationChange = new THREE.Vector3(
      containerRef.current.rotation.x - lastRot.current.x,
      containerRef.current.rotation.y - lastRot.current.y,
      containerRef.current.rotation.z - lastRot.current.z
    )
    const movement = velocity.length() + rotationChange.length()
    if (movement > 0.05) {
      ripple.current.amplitude = Math.min(ripple.current.amplitude + movement * 0.1, 0.2)
    }
    ripple.current.phase += delta * 6.0
    // Only allow ripple if active
    if (!rippleActive) {
      ripple.current.amplitude = lerp(ripple.current.amplitude, 0, Math.max(clock.getDelta(), 0.01) * 2.5)
    }

    // Wobble
    const recovery = 4
    const wobbleSpeed = 1
    wobbleAmountToAddX.current = lerp(wobbleAmountToAddX.current, 0, delta * recovery)
    wobbleAmountToAddZ.current = lerp(wobbleAmountToAddZ.current, 0, delta * recovery)
    const pulse = 2 * Math.PI * wobbleSpeed
    const wobbleAmountX = wobbleAmountToAddX.current * Math.sin(pulse * time)
    const wobbleAmountZ = wobbleAmountToAddZ.current * Math.cos(pulse * time)

    if (liquidControls.showLiquid && liquidBody.current) {
      const material = liquidBody.current.material as THREE.ShaderMaterial
      material.uniforms.wobbleX.value = wobbleAmountX
      material.uniforms.wobbleZ.value = wobbleAmountZ
      material.uniforms.fillAmount.value = liquidControls.fillAmount
      material.uniforms.tiltX.value = liquidTilt.current.x
      material.uniforms.tiltZ.value = liquidTilt.current.z
      material.uniforms.rippleAmplitude.value = ripple.current.amplitude
      material.uniforms.ripplePhase.value = ripple.current.phase
      const color = new THREE.Color(liquidControls.color)
      material.uniforms.tint.value = new THREE.Vector4(color.r, color.g, color.b, liquidControls.opacity)
    }

    lastPos.current = containerRef.current.position.clone()
    lastRot.current = new THREE.Vector3(
      containerRef.current.rotation.x,
      containerRef.current.rotation.y,
      containerRef.current.rotation.z
    )
  })

  return (
    <group {...props} dispose={null}>
      <group name="Scene" ref={containerRef}>
        <group name="reference" rotation={[Math.PI / 2, 0, Math.PI]} scale={0.07} />
        <mesh
          name="Body"
          castShadow
          receiveShadow
          geometry={nodes.Body.geometry}
          onClick={handleBodyClick}
          renderOrder={0}
        >
          <meshPhysicalMaterial
            color={materialProps.color}
            metalness={materialProps.metalness}
            roughness={materialProps.roughness}
            transmission={materialProps.transmission}
            ior={materialProps.ior}
            reflectivity={materialProps.reflectivity}
            thickness={materialProps.thickness}
            envMap={envMap}
            envMapIntensity={materialProps.envMapIntensity}
            clearcoat={materialProps.clearcoat}
            clearcoatRoughness={materialProps.clearcoatRoughness}
            transparent={true}
            opacity={materialProps.opacity}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
        {liquidControls.showLiquid && (
          <mesh
            ref={liquidBody}
            name="Liquid"
            geometry={nodes.Body.geometry}
            scale={[0.95, 0.95, 0.95]}
            renderOrder={2}
            frustumCulled={false}
          >
            {/* @ts-expect-error Custom material component */}
            <liquidRefractionMaterial {...uniforms} />
          </mesh>
        )}
        <mesh
          name="Label"
          castShadow
          receiveShadow
          geometry={nodes.Label.geometry}
          material={materials.LabelMaterial}
          position={[0.005, -0.014, 0]}
          scale={[0.043, 0.04, 0.043]}
        />
        <mesh
          name="Cap"
          castShadow
          receiveShadow
          geometry={nodes.Cap.geometry}
          material={materials.CapMaterial}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/spicetale2.glb')
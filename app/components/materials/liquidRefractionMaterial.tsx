import * as THREE from 'three'
import { extend } from '@react-three/fiber'

export class LiquidRefractionMaterial extends THREE.ShaderMaterial {
    constructor() {
        super({
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vPosition;
                varying vec3 vNormal;
                varying vec3 vWorldPosition;
                
                void main() {
                    vUv = uv;
                    vPosition = position;
                    vNormal = normal;
                    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec2 resolution;
                uniform float fillAmount;
                uniform float wobbleX;
                uniform float wobbleZ;
                uniform float tiltX;
                uniform float tiltZ;
                uniform float rippleAmplitude;
                uniform float ripplePhase;
                uniform vec4 tint;
                uniform float fizzIntensity;
                uniform float bubbleSize;
                uniform float bubbleDensity;
                uniform float bubbleSpeed;
                uniform float foamIntensity;
                
                varying vec2 vUv;
                varying vec3 vPosition;
                varying vec3 vNormal;
                varying vec3 vWorldPosition;
                
                // Hash helpers for procedural fizz/foam
                float hash12(vec2 p) {
                    p = fract(p * vec2(123.34, 345.45));
                    p += dot(p, p + 34.345);
                    return fract(p.x * p.y);
                }
                
                // Simple pseudo noise from position
                float noise(vec2 p) {
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    float a = hash12(i);
                    float b = hash12(i + vec2(1.0, 0.0));
                    float c = hash12(i + vec2(0.0, 1.0));
                    float d = hash12(i + vec2(1.0, 1.0));
                    vec2 u = f * f * (3.0 - 2.0 * f);
                    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
                }
                
                void main() {
                    // Realistic liquid surface: base height + tilt inertia + wobble + ripples
                    float wobbleStrength = 0.02;
                    float tiltStrength   = 0.12;
                    float freq = 8.0;

                    float ripple = rippleAmplitude * (sin(freq * vPosition.x + ripplePhase) *
                                                     cos(freq * vPosition.z + ripplePhase));

                    float offset = tiltStrength * (tiltX * vPosition.x + tiltZ * vPosition.z)
                                 + wobbleStrength * (wobbleX * vPosition.x + wobbleZ * vPosition.z)
                                 + ripple;
                    offset = clamp(offset, -0.035, 0.035);
                    float surface = fillAmount + offset;

                    // Soft surface mask (no hard discard) for stable transparency
                    float edge = 0.004;
                    float depthBelow = max(0.0, surface - vPosition.y);
                    float mask = smoothstep(0.0, edge, depthBelow);

                    // Fizz/Bubbles: spawn small spheres that rise over time using ripplePhase as time
                    float t = ripplePhase;
                    float bub = 0.0;
                    // Three layers with increasing density and speed
                    for (int i = 0; i < 3; i++) {
                        float layer = float(i) + 1.0;
                        float dens = bubbleDensity * layer;
                        vec2 uv = vPosition.xz * dens;
                        vec2 cell = floor(uv);
                        // Random offset per cell
                        vec2 rnd = vec2(hash12(cell + layer * 17.1), hash12(cell + layer * 91.7));
                        vec2 centerXZ = (cell + rnd) / dens;
                        float seed = hash12(cell + layer * 53.7);
                        // Bubble Y rises from bottom up to surface
                        float y = (surface) * fract(seed + t * bubbleSpeed * (0.6 + 0.8 * hash12(cell + 13.3)));
                        vec3 c = vec3(centerXZ.x, y, centerXZ.y);
                        float r = bubbleSize * (0.65 + 0.7 * hash12(cell + 7.7)) / layer;
                        float d = length(vPosition - c);
                        bub += smoothstep(r, r - 0.01, r - d);
                    }
                    bub = clamp(bub, 0.0, 1.0) * fizzIntensity * mask;

                    // Reconstructed surface normal from height field derivatives for better specular
                    float dSurf_dx = tiltStrength * tiltX + wobbleStrength * wobbleX
                                   + rippleAmplitude * freq * cos(freq * vPosition.x + ripplePhase) * cos(freq * vPosition.z + ripplePhase);
                    float dSurf_dz = tiltStrength * tiltZ + wobbleStrength * wobbleZ
                                   - rippleAmplitude * freq * sin(freq * vPosition.x + ripplePhase) * sin(freq * vPosition.z + ripplePhase);
                    vec3 surfNormal = normalize(vec3(-dSurf_dx, 1.0, -dSurf_dz));

                    // Lighting
                    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.35));
                    vec3 viewDir  = normalize(-vWorldPosition);
                    float diff = max(dot(surfNormal, lightDir), 0.0);
                    vec3 reflectDir = reflect(-lightDir, surfNormal);
                    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
                    float fres = pow(1.0 - max(dot(surfNormal, viewDir), 0.0), 3.0);

                    // Depth-based attenuation (darker deeper)
                    float atten = exp(-depthBelow * 8.0);
                    vec3 baseCol = tint.rgb * (0.35 + 0.65 * diff);
                    vec3 deepCol = baseCol * 0.6;
                    vec3 color = mix(deepCol, baseCol, atten) + spec * 0.25 * (1.0 + fres);

                    // Foam near the surface, modulated by noise
                    float foamBand = smoothstep(0.0, 0.006, depthBelow) * (1.0 - smoothstep(0.014, 0.028, depthBelow));
                    float foamNoise = noise(vPosition.xz * 80.0 + t * 0.6);
                    float foam = foamBand * foamNoise * foamIntensity * mask;
                    color += foam * vec3(1.0);

                    // Meniscus/foam hint near the surface
                    float ring = smoothstep(0.0, 0.003, depthBelow) * (1.0 - smoothstep(0.006, 0.012, depthBelow));
                    color += ring * vec3(0.12);
                    // Sparkle from bubbles
                    color += bub * 0.15;

                    // Alpha: base opacity scaled by mask, slightly boosted at the ring
                    float alpha = tint.a * (mask * (1.0 + ring * 0.25)) + bub * 0.15;
                    alpha = clamp(alpha, 0.0, 1.0);
                    gl_FragColor = vec4(color, alpha);
                }
            `,
            uniforms: {
                resolution: { value: new THREE.Vector2() },
                fillAmount: { value: 0 },
                wobbleX: { value: 0 },
                wobbleZ: { value: 0 },
                tiltX: { value: 0 },
                tiltZ: { value: 0 },
                rippleAmplitude: { value: 0 },
                ripplePhase: { value: 0 },
                tint: { value: new THREE.Vector4(1, 0.8, 0.5, 0.85) },
                fizzIntensity: { value: 0.6 },
                bubbleSize: { value: 0.02 },
                bubbleDensity: { value: 8.0 },
                bubbleSpeed: { value: 0.6 },
                foamIntensity: { value: 0.35 }
            },
            transparent: true,
            side: THREE.FrontSide,
            depthWrite: false,
            depthTest: true
        })
    }
}

extend({ LiquidRefractionMaterial })

// TypeScript declaration for the custom material
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            liquidRefractionMaterial: {
                [key: string]: unknown
            }
        }
    }
}

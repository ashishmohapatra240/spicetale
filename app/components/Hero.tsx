'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Model } from './Model'
import Image from 'next/image'
import { Leva } from 'leva'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[var(--background)] flex items-center">
            <div className="relative mx-auto w-full max-w-7xl h-screen px-4 md:px-6 lg:px-8">
                {/* Container for the main content */}
                <div className="relative flex flex-col items-center justify-center -top-10">
                    {/* Big heading in background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-[clamp(60px,12vw,200px)] font-display leading-[1.1] tracking-tight uppercase select-none text-[color:var(--brand-brown)] text-center whitespace-nowrap">
                            JEERA<br />
                            MASALA
                        </h1>
                    </div>

                    {/* Bottle overlay centered */}
                    <div className="pointer-events-none relative z-10 flex justify-center items-center">
                        <div className="w-[clamp(280px,35vw,420px)] aspect-[2/3] transform transition-transform duration-700 ease-out">
                            <Canvas className="w-full h-full block" camera={{ position: [0.18, 0.18, 1.5], fov: 50 }}>
                                <ambientLight intensity={0.7} />
                                <directionalLight position={[2, 3, 5]} intensity={0.8} />
                                <Model scale={3.5} />
                                <Environment preset="sunset" />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
                            </Canvas>
                        </div>
                    </div>

                    {/* Bottom texts */}
                    <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 mt-20">
                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
                            <div className="max-w-[280px] md:max-w-sm">
                                <p className="font-display text-[clamp(20px,4.5vw,32px)] font-extrabold leading-[1.1] uppercase text-[color:var(--brand-brown)]">
                                    Refreshing the world<br />
                                    and making a difference
                                </p>
                            </div>

                            <div className="max-w-[320px] md:max-w-md lg:max-w-lg">
                                <p className="font-sans text-[clamp(12px,2.5vw,14px)] leading-[1.4] text-[color:var(--brand-brown)] tracking-tight">
                                    Founded in 2024, SpiceTale has been at the forefront of sustainable beverages. We believe in creating
                                    timeless drinks that not only look good but also feel good for the planet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating ingredients */}
            <FloatingAssets />
            {/* Hide Leva UI (controls are code-driven only) */}
            <Leva hidden />
        </section>
    )
}

function FloatingAssets() {
    const items = [
        { src: '/images/chilli1.png', cls: 'top-[10%] md:top-[12%] left-[4%] md:left-[6%] lg:left-[8%] float-med', size: 'w-[clamp(50px,8vw,80px)]' },
        { src: '/images/chilli2.png', cls: 'top-[65%] md:top-[68%] right-[4%] md:right-[6%] lg:right-[8%] float-fast', size: 'w-[clamp(45px,7vw,75px)]' },
        { src: '/images/clove1.png', cls: 'top-[40%] md:top-[42%] left-[6%] md:left-[8%] lg:left-[10%] float-slow', size: 'w-[clamp(40px,6vw,70px)]' },
        { src: '/images/clove2.png', cls: 'top-[22%] md:top-[26%] right-[10%] md:right-[12%] lg:right-[14%] float-med', size: 'w-[clamp(45px,7vw,75px)]' },
        { src: '/images/garlic1.png', cls: 'top-[14%] md:top-[16%] right-[6%] md:right-[8%] lg:right-[10%] float-slow', size: 'w-[clamp(50px,8vw,80px)]' },
        { src: '/images/garlic2.png', cls: 'top-[72%] md:top-[76%] left-[8%] md:left-[10%] lg:left-[12%] float-med', size: 'w-[clamp(45px,7vw,75px)]' },
    ]

    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
            {items.map((it, i) => (
                <div
                    key={i}
                    className={`absolute origin-center ${it.cls} ${it.size} aspect-square`}
                >
                    <Image
                        src={it.src}
                        alt="ingredient"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 50px, (max-width: 1024px) 70px, 80px"
                    />
                </div>
            ))}
        </div>
    )
}



'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Model } from './Model'
import Image from 'next/image'
import { Leva } from 'leva'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#FEF5E4] min-h-[100dvh]">
            <div className="relative mx-auto w-full max-w-7xl min-h-[100dvh] px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 -top-40">
                    <h1 className="text-[100px] md:text-[140px] lg:text-[240px] leading-[1] tracking-tight uppercase select-none text-center whitespace-nowrap font-display bg-gradient-to-b from-[#3D1706] to-[#A33D11] bg-clip-text text-transparent">
                        JEERA<br />
                        MASALA
                    </h1>
                </div>
                {/* Container for the main content */}
                <div className="relative z-10 flex flex-col items-center">

                    {/* Bottle overlay centered */}
                    <div className="pointer-events-none relative z-10 flex justify-center items-center">
                        <div className="w-[340px] md:w-[45vw] lg:w-[560px] aspect-[2/3] max-h-[80dvh] transform transition-transform duration-700 ease-out">
                            <Canvas className="w-full h-full block" camera={{ position: [0.18, 0.18, 1.9], fov: 50 }}>
                                <ambientLight intensity={0.7} />
                                <directionalLight position={[2, 3, 5]} intensity={0.8} />
                                <Model scale={4.3} position={[0, -0.1, 0]} />
                                <Environment preset="city" />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                            </Canvas>
                        </div>
                    </div>


                </div>
                {/* Bottom texts (in centered flow) */}
                <div className="w-full mb-20">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
                        <div className="max-w-[280px] md:max-w-sm">
                            <p className="text-[20px] md:text-[4.5vw] lg:text-[32px] leading-[1.1] uppercase text-[#3D1706] font-bold font-display">
                                Refreshing the world<br />
                                and making a difference
                            </p>
                        </div>

                        <div className="max-w-[320px] md:max-w-md">
                            <p className="text-[12px] md:text-[2.5vw] lg:text-[14px] leading-[1.4] text-[#3D1706] tracking-tight">
                                Founded in 2024, SpiceTale has been at the forefront of sustainable beverages. We believe in creating
                                timeless drinks that not only look good but also feel good for the planet.
                            </p>
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
        { src: '/images/chilli1.png', cls: 'top-[10%] md:top-[12%] left-[4%] md:left-[6%] lg:left-[30%] animate-[floaty_5.2s_ease-in-out_infinite]', size: 'w-[50px] md:w-[8vw] lg:w-[80px]' },
        { src: '/images/chilli2.png', cls: 'top-[65%] md:top-[54%] right-[4%] md:right-[6%] lg:right-[20%] animate-[floaty_4.2s_ease-in-out_infinite]', size: 'w-[45px] md:w-[7vw] lg:w-[75px]' },
        { src: '/images/clove1.png', cls: 'top-[40%] md:top-[42%] left-[6%] md:left-[8%] lg:left-[20%] animate-[floaty_6s_ease-in-out_infinite]', size: 'w-[40px] md:w-[6vw] lg:w-[70px]' },
        { src: '/images/clove2.png', cls: 'top-[22%] md:top-[26%] right-[10%] md:right-[12%] lg:right-[16%] animate-[floaty_5.2s_ease-in-out_infinite]', size: 'w-[45px] md:w-[7vw] lg:w-[75px]' },
        { src: '/images/garlic1.png', cls: 'top-[14%] md:top-[16%] right-[6%] md:right-[8%] lg:right-[30%] animate-[floaty_6s_ease-in-out_infinite]', size: 'w-[50px] md:w-[8vw] lg:w-[80px]' },
        { src: '/images/garlic2.png', cls: 'top-[72%] md:top-[76%] left-[8%] md:left-[10%] lg:left-[40%] animate-[floaty_5.2s_ease-in-out_infinite]', size: 'w-[45px] md:w-[7vw] lg:w-[75px]' },
    ]

    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
            {items.map((it, i) => (
                <div
                    key={i}
                    className={`absolute origin-center ${it.cls} ${it.size} aspect-square [will-change:transform]`}
                    style={{ animationDelay: `${i * 180}ms` }}
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

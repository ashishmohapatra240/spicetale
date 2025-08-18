'use client'

import Image from 'next/image'
import { Leva } from 'leva'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero3D() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const heroImages = [
        '/images/hero/hero-1.png',
        '/images/hero/hero-2.png',
        '/images/hero/hero-3.png'
    ]

    const colorSchemes = [
        'from-[#3D1706] to-[#853B1B]', // Original brown
        'from-[#E65100] to-[#FF9800]',   // Orange for hero-2
        'from-[#1B5E20] to-[#4CAF50]' // Green for hero-3
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
        }, 3000) // Change image every 3 seconds

        return () => clearInterval(interval)
    }, [heroImages.length])

    return (
        <section className="relative overflow-hidden bg-white min-h-[100dvh]">
            <div className="relative mx-auto w-full max-w-7xl min-h-[100dvh] px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 -top-40">
                    <div className="flex flex-col items-center">
                        <motion.h1
                            className={`text-[100px] md:text-[140px] lg:text-[240px] leading-[1] tracking-tight uppercase select-none text-center whitespace-nowrap font-display bg-gradient-to-b ${colorSchemes[currentImageIndex]} bg-clip-text text-transparent`}
                            key={currentImageIndex}
                            initial={{ opacity: 0.7 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            SPICETALE
                        </motion.h1>
                        <div className="relative w-full flex justify-between">
                            <h3 className="text-[20px] md:text-[4.5vw] lg:text-[32px] leading-[1.1] uppercase text-[#3D1706] font-bold font-display text-left">
                                Authentic Indian
                            </h3>
                            <h3 className="text-[20px] md:text-[4.5vw] lg:text-[32px] leading-[1.1] uppercase text-[#3D1706] font-bold font-display text-right">
                                Masala Fizz
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-screen h-auto overflow-hidden flex justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ x: "100vw", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100vw", opacity: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smooth animation
                                }}
                                className="w-[400px] md:w-[600px] flex-shrink-0"
                            >
                                <Image
                                    src={heroImages[currentImageIndex]}
                                    alt={`Spicetale Hero ${currentImageIndex + 1}`}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-auto"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                {/* Bottom texts (in centered flow) */}
                <div className="w-full mb-20">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
                        <div className="max-w-[280px] md:max-w-sm">
                            <p className="text-[20px] md:text-[4.5vw] lg:text-[32px] leading-[1.1] uppercase text-[#3D1706] font-bold font-display">
                                Fizz, Spice, and<br /> Everything Nice
                            </p>
                        </div>

                        <div className="max-w-[320px] md:max-w-md">
                            <p className="text-[12px] md:text-[2.5vw] lg:text-[14px] leading-[1.4] text-[#3D1706] tracking-tight">
                                From our family kitchen to your table — authentic Indian masala soda, brewed with
                                tradition, bottled with care, and bursting with crisp carbonation for a refreshing sparkle in every sip.
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

'use client'

import Image from 'next/image'

export default function StorySection() {
    return (
        <section id="about" className="bg-[#FEF5E4] font-sans tracking-tight">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 py-14 md:py-20">
                {/* Top: Grandma illustration and copy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="relative w-full aspect-[4/3] md:aspect-[5/4]">
                        <Image
                            src="/images/grandma.png"
                            alt="grandma preparing spices"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    <div className="text-[#3D1706] max-w-xl md:ml-auto">
                        <p className="text-base md:text-lg leading-relaxed">
                            At SpiceTale, every sip carries a memory. Our recipes are treasures passed
                            down from our grandparents — drinks they crafted with love, care, and a
                            pinch of magic. We’ve bottled that same tradition, so you can share not just
                            a refreshing beverage, but moments of laughter, stories, and togetherness
                            with your friends.
                        </p>
                    </div>
                </div>

                {/* Bottom: Left and right images with center copy */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-10">
                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src="/images/kirana.png"
                            alt="friends at kirana"
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-[#3D1706] text-sm md:text-base">A Feel Good Drink</p>
                        <h3 className="font-display text-[#3D1706] leading-none mt-2 text-[72px] md:text-[10vw] lg:text-[140px]">
                            BURP
                        </h3>
                        <p className="text-[#3D1706] text-sm md:text-base mt-1">in every Sip</p>
                    </div>

                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src="/images/home.png"
                            alt="family at home"
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}



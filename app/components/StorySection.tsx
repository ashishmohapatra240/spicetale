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
                        <h2 className="text-[32px] md:text-[6vw] lg:text-[64px] leading-[1.05] uppercase text-[#3D1706] tracking-tight font-display mb-4">
                            Sip. Smile. Burp.<br />
                            Bottles to Burp.
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            At Spicetale, every sip is alive with crisp carbonation and the warmth of traditional Indian spices.
                            Inspired by our grandmother’s spice blends — perfected over decades — our drinks are a tribute to
                            the authentic Indian masala drink culture. From bustling spice bazaars to your table, every bottle
                            carries nostalgia, authenticity, and joy.
                        </p>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src="/images/kirana.png"
                            alt="friends at kirana"
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src="/images/home.png"
                            alt="family at home"
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}



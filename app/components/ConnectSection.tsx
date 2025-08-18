'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ConnectSection() {
    const [role, setRole] = useState<'admirer' | 'distributer'>('admirer')

    return (
        <section id="enquire" className="relative overflow-hidden -top-6 font-sans tracking-tight min-h-[30dvh]">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/connect-bg.png"
                    alt="connect background"
                    fill
                    className="object-fit"
                    priority
                />
                <div className="absolute inset-0" aria-hidden />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
                    {/* Left copy */}
                    <div className="text-white">
                        <h2 className="font-display uppercase leading-[1.1] text-[28px] md:text-[48px] tracking-tight">
                        Have an idea, feedback,<br/> or partnership proposal?
                        </h2>
                        <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed">
                        We’d love to hear from you! Drop us a message — let’s make something refreshingly unforgettable
                        together.
                        </p>
                    </div>

                    {/* Right form */}
                    <div className="w-full">
                        <div className="inline-flex rounded-full bg-white/20 p-1 backdrop-blur supports-[backdrop-filter]:bg-white/15 w-full">
                            {([
                                { key: 'admirer', label: 'Just a admirer' },
                                { key: 'distributer', label: 'Distributer' },
                            ] as const).map((opt) => (
                                <button
                                    key={opt.key}
                                    onClick={() => setRole(opt.key)}
                                    className={`px-5 md:px-6 py-2 rounded-full text-sm md:text-base transition-colors w-full ${role === opt.key
                                        ? 'bg-[#D4E638] text-[#1A1F0A] font-bold'
                                        : 'text-white/90 hover:text-white'
                                        }`}
                                    type="button"
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>

                        <p className="text-white/80 text-sm md:text-lg mt-3">Need a pack of spicetale? </p>
                        <button className="mt-2 w-full rounded-full bg-[#D4E638] text-[#1A1F0A] font-semibold py-3 md:py-3.5 hover:opacity-95 transition-opacity">
                            Let’s Connect
                        </button>

                        {/* <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <Input placeholder="Full Name" />
                            <Input placeholder="Address" />
                            <Input placeholder="Phone Number" type="tel" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Input placeholder="City" />
                                <Input placeholder="Pincode" />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 w-full rounded-full bg-[#D4E638] text-[#1A1F0A] font-semibold py-3 md:py-3.5 hover:opacity-95 transition-opacity"
                            >
                                Let’s Connect
                            </button>
                        </form> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

// function Input({ placeholder, type = 'text' }: { placeholder: string; type?: string }) {
//     return (
//         <input
//             type={type}
//             placeholder={placeholder}
//             className="w-full rounded-md bg-white text-neutral-900 placeholder-neutral-500 px-4 py-3 md:py-3.5 outline-none focus:ring-2 focus:ring-[#D4E638]"
//         />
//     )
// }



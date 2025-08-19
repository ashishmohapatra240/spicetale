'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Facebook, Mail, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="font-sans">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div>
                        <div className="mb-8">
                            <Image src="/images/logo.png" alt="SpiceTale" width={64} height={64} priority />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold">Office Address</h4>
                                <p className="mt-2 max-w-md">
                                    Bombay Market Apts,G-16,Next to A/c Market, Tardeo,Mumbai - 400034
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold">Contact :</h4>
                                <p>
                                    <Link href="tel:+919975056579" className="">+91 99750 56579</Link>
                                </p>

                                <p className="text-sm mt-4">© spicetalebeverages 2025, India. All rights reserved.</p>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold">Factory Address</h4>
                                <p className="mt-2 max-w-md">
                                    E-80, MIDC, Additional Patal Ganga,Raigad, Maharashtra - 410220
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold">Email :</h4>
                                <Link href="mailto:admin@spicetalebeverages.com" className="mt-2">admin@spicetalebeverages.com</Link>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center justify-between gap-6">

                            <div className="flex items-center gap-4">
                                <SocialIcon href="https://www.facebook.com/Spicetalebeverage" label="Facebook" svg={(cls) => <Facebook className={cls} />} />
                                <SocialIcon href="mailto:admin@spicetalebeverages.com" label="Email" svg={(cls) => <Mail className={cls} />} />
                                <SocialIcon href="https://www.instagram.com/spicetalebeverage" label="Instagram" svg={(cls) => <Instagram className={cls} />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

type IconRenderer = (cls: string) => ReactNode

function SocialIcon({ href, label, svg }: { href: string; label: string; svg: IconRenderer }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors"
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            {svg('h-6 w-6')}
        </Link>
    )
}



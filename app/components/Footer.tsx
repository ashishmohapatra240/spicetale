'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Twitter, Mail, Instagram } from 'lucide-react'

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
                                <h4 className="text-lg font-semibold">Corporate Address</h4>
                                <p className="mt-2 max-w-md">
                                    2nd Floor, Harmony Building / Behind RBL lane, Opp Mauli Petrol Pump,
                                    Baner Road, Pune-411045
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold">Contact :</h4>
                                <p className="mt-2">
                                    <Link href="tel:+919975056579" className="">+91 99750 56579</Link>
                                </p>
                                <p className="mt-2">
                                    <Link href="mailto:letstalk@mixtalebeverages.com" className="hover:text-white">letstalk@mixtalebeverages.com</Link>
                                </p>

                                <p className="text-sm">© mixtalebeverages 2025, India. All rights reserved.</p>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold">Manufacturing Unit</h4>
                                <p className="mt-2 max-w-md">
                                    2nd Floor, Harmony Building / Behind RBL lane, Opp Mauli Petrol Pump,
                                    Baner Road, Pune-411045
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold">Email :</h4>
                                <p className="mt-2">letstalk@mixtalebeverages.com</p>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center justify-between gap-6">

                            <div className="flex items-center gap-4">
                                <SocialIcon href="https://twitter.com/" label="Twitter" svg={(cls) => <Twitter className={cls} />} />
                                <SocialIcon href="mailto:letstalk@mixtalebeverages.com" label="Email" svg={(cls) => <Mail className={cls} />} />
                                <SocialIcon href="https://instagram.com/" label="Instagram" svg={(cls) => <Instagram className={cls} />} />
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



'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-[#FEF5E4]">
      <div className="container flex items-center justify-between py-4 px-4 max-w-7xl mx-auto">
        <Link href="/" className="shrink-0 inline-flex items-center gap-2">
          <Image src="/images/logo.png" alt="SpiceTale" width={56} height={56} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-neutral-800 font-sans tracking-tight">
          <a href="#products" className="hover:opacity-80">Products</a>
          <a href="#about" className="hover:opacity-80">About us</a>
          <a href="#location" className="hover:opacity-80">Location</a>
        </nav>

        <div className="hidden md:flex font-sans">
          <a
            href="#enquire"
            className="rounded-full bg-[#3D1706] text-white px-6 py-2 text-sm font-semibold shadow-sm hover:opacity-95"
          >
            Enquire
          </a>
        </div>

        <button aria-label="Menu" className="md:hidden rounded-full p-2">
          <span className="block h-1 w-6 bg-neutral-900 mb-1"></span>
          <span className="block h-1 w-6 bg-neutral-900"></span>
        </button>
      </div>
    </header>
  )
}



'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isProductsPage = pathname?.startsWith('/products')
  const isAboutPage = pathname?.startsWith('/about-us')
  const isLocationPage = pathname?.startsWith('/location')
  return (
    <header className={`w-full sticky top-0 z-50 border-b border-neutral-200 bg-white`}>
      <div className="container flex items-center justify-between py-4 px-4 max-w-7xl mx-auto">
        <Link href="/" className="shrink-0 inline-flex items-center gap-2">
          <Image src="/images/logo.png" alt="SpiceTale" width={56} height={56} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[16px] font-sans tracking-tight">
          <Link
            href="/products"
            aria-current={isProductsPage ? 'page' : undefined}
            className={`transition-colors hover:opacity-80 ${isProductsPage ? 'font-semibold text-neutral-900' : 'font-medium text-neutral-800'}`}
          >
            Products
          </Link>
          <Link
            href="/about-us"
            aria-current={isAboutPage ? 'page' : undefined}
            className={`transition-colors hover:opacity-80 ${isAboutPage ? 'font-semibold text-neutral-900' : 'font-medium text-neutral-800'}`}
          >
            About us
          </Link>
          <Link
            href="/"
            aria-current={isLocationPage ? 'page' : undefined}
            className={`transition-colors hover:opacity-80 ${isLocationPage ? 'font-semibold text-neutral-900' : 'font-medium text-neutral-800'}`}
          >
            Location
          </Link>
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



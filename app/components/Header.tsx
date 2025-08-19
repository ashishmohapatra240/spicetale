'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const isProductsPage = pathname?.startsWith('/products')
  const isAboutPage = pathname?.startsWith('/about-us')
  const isHomePage = pathname === '/'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`w-full sticky top-0 z-50 border-b border-neutral-200 bg-white`}>
      <div className="container flex items-center justify-between py-4 px-4 max-w-7xl mx-auto">
        <Link href="/" className="shrink-0 inline-flex items-center gap-2">
          <Image src="/images/logo.png" alt="SpiceTale" width={56} height={56} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[16px] font-sans tracking-tight">
          <Link
            href="/"
            aria-current={isHomePage ? 'page' : undefined}
            className={`transition-colors hover:opacity-80 ${isHomePage ? 'font-semibold text-neutral-900' : 'font-medium text-neutral-800'}`}
          >
            Home
          </Link>
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
        </nav>

        <div className="hidden md:flex font-sans">
          <a
            href="mailto:letstalk@mixtalebeverages.com"
            className="rounded-full bg-[#3D1706] text-white px-6 py-2 text-sm font-semibold shadow-sm hover:opacity-95"
          >
            Enquire
          </a>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden rounded-full p-2 transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block h-0.5 w-6 bg-neutral-900 mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-neutral-900 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="container max-w-7xl mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 text-lg font-sans tracking-tight transition-colors hover:opacity-80 ${isHomePage ? 'font-semibold text-neutral-900' : 'font-medium text-neutral-800'}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 text-lg font-sans tracking-tight transition-colors hover:opacity-80 ${isProductsPage ? 'font-semibold text-neutral-900' : 'font-medium text-neutral-800'}`}
            >
              Products
            </Link>
            <hr className='border-neutral-200' />
            <Link
              href="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 text-lg font-sans tracking-tight transition-colors hover:opacity-80 ${isAboutPage ? 'font-semibold text-neutral-900' : 'font-medium text-neutral-800'}`}
            >
              About us
            </Link>
            <hr className='border-neutral-200' />

            <div>
              <Link
                href="mailto:letstalk@mixtalebeverages.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block rounded-full bg-[#3D1706] text-white px-6 py-3 text-base font-semibold shadow-sm hover:opacity-95 transition-opacity w-full font-sans text-center"
              >
                Enquire
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}



'use client'

import Image from 'next/image'
import { products } from '../data/products'

export default function PunchSection() {
  return (
    <section id="products" className="relative font-sans tracking-tight">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="relative grid grid-cols-1 md:grid-cols-5 items-end gap-8 md:gap-12">
          <div className="md:col-span-3 max-w-2xl">
            <h2 className="text-[32px] md:text-[6vw] lg:text-[64px] leading-[1.05] uppercase text-[#3D1706] tracking-tight font-display">
              Refreshing India,<br /> One Sip at a Time
              {/* <span className="relative inline-block align-baseline">
                Punch
                <Image
                  src="/images/splash.png"
                  alt="splash highlight"
                  width={800}
                  height={300}
                  className="absolute -z-10 left-1/2 -translate-x-1/2 top-[58%] -translate-y-1/2 select-none pointer-events-none"
                />
              </span> */}
            </h2>
            <p className="mt-4 max-w-xl text-md text-[#3D1706]">
              A line up of spices and recipes to quench your thirst.
            </p>
          </div>

          <div className="md:col-span-2 relative h-[220px] md:h-[260px] lg:h-[300px]">
            <Image
              src="/images/glass.png"
              alt="glass splash"
              fill
              className="object-contain object-right-bottom"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Products grid */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p) => (
            <article key={p.id} className="flex flex-col w-full">
              {/* Visual card area */}
              <div className="h-96 relative rounded-2xl overflow-hidden">
                {/* Background image */}
                <Image
                  src={p.backgroundImageSrc}
                  alt="background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
                />
                {/* Foreground bottle overlay */}
                <div
                  className="absolute inset-0 pointer-events-none select-none flex items-center justify-center"
                  aria-hidden
                >
                  <div className="w-36 md:w-28 h-96 relative">
                    <Image
                      src="/images/products/masala-jeera.png"
                      alt="Masala Jeera"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 self-stretch flex flex-col justify-start items-center gap-3.5">
                <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                  <div className="flex-1 inline-flex flex-col justify-center items-start">
                    <div className="text-zinc-900 text-2xl leading-10 font-normal font-display">{p.name}</div>
                    <div className="text-zinc-900 text-base leading-normal">{p.subtitle}</div>
                  </div>
                  <div
                    className="w-20 px-4 rounded-[120px] flex justify-center items-center gap-0.5"
                    style={{ backgroundColor: p.backgroundColor }}
                  >
                    <div className="text-white text-2xl leading-9">₹</div>
                    <div className="text-white text-2xl leading-9">{p.priceInr}</div>
                  </div>
                </div>

                {/* Size selector */}
                {p.sizesMl?.length > 0 && (
                  <div className="self-stretch p-1 bg-white rounded-[48px] border border-zinc-900 inline-flex justify-center items-center gap-2">
                    {p.sizesMl.map((ml, idx) => (
                      <div
                        key={ml}
                        className={`flex-1 px-4 py-0.5 rounded-[48px] flex justify-center items-center ${idx === 0 ? 'bg-zinc-900 text-white' : 'text-zinc-900'
                          }`}
                      >
                        <div className="text-base leading-normal">{ml} ml</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

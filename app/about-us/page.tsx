'use client'

import React from 'react'
import Image from 'next/image'
import ConnectSection from '../components/ConnectSection'

export default function AboutUs() {
  return (
    <div className="bg-[#FEF5E4] ">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 min-h-[100dvh] flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/about-us/image 10.png"
              alt="SpiceTale"
              width={469}
              height={469}
              priority
              className="w-56 md:w-[560px] h-auto"
            />
          </div>

          {/* Right Text */}
          <div className="w-full max-w-xl text-left">
            <h1 className="font-display font-normal text-5xl md:text-6xl leading-[1] uppercase text-[#3D1706] mb-4 tracking-tight">
              A journey that began 4 years ago...
            </h1>
            <p className="font-sans font-normal text-lg leading-relaxed text-[#16181A] tracking-tight">
              We started with a simple belief — that drinks should taste like home.
              For 4 years, we’ve perfected our recipes, preserving the soul of Indian masala sodas while making
              them hygienic, consistent, and ready for today’s fast-paced world. Every bottle delivers traditional
              spices with crisp carbonation for a modern, refreshing twist.
            </p>
          </div>

        </div>
      </div>
      <div className="flex items-center justify-center py-20 bg-white px-4">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="flex-1 space-y-4">
            {/* <h1 className="font-display font-normal text-5xl md:text-8xl leading-[1] uppercase text-[#3D1706] mb-4 tracking-tight">
              Where family drinks together
            </h1> */}
            <p className="font-sans font-normal text-lg leading-relaxed text-[#16181A] tracking-tight">
              Some memories are bottled at the kirana store — laughter, friendship, and the taste of our favorite masala soda.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/about-us/image 11.png"
              alt="Childhood memories illustration showing three friends at a local store"
              width={582}
              height={388}
              className="w-full md:w-[560px] h-auto"
              priority
            />
          </div>
        </div>
      </div>

      <div className='bg-white px-4'>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8'>

          <Image
            src="/about-us/image 12.png"
            alt="SpiceTale"
            width={582}
            height={388}
            className="w-full md:w-[560px] h-auto"
          />

          <div className='flex flex-col md:max-w-2xl md:pl-10'>
            {/* <h1 className="font-display font-normal text-5xl md:text-8xl leading-[1] uppercase text-[#3D1706] mb-4 tracking-tight">
              A Feel Good Drink create memories
            </h1> */}
            <p className='font-sans font-normal text-lg leading-relaxed text-[#16181A] tracking-tight'>Whether it’s family time or a quiet evening at home, every sip brings comfort and joy</p>
          </div>
        </div>
      </div>

      {/* BURP SECTION
      <div className="relative flex flex-col items-center justify-center bg-cover py-16">
        <Image
          src="/about-us/burp.png"
          alt="BURP Background"
          fill
          priority
          sizes="w-full h-[50dvh]"
          className="absolute inset-0 -z-0 object-cover"
        />
        <h3 className="font-sans font-medium text-sm sm:text-base md:text-xl text-slate-900 z-10 tracking-tight">A Feel Good Drink</h3>

        <h1 className="font-display font-normal text-5xl md:text-8xl leading-[1] uppercase z-10 text-sky-200 tracking-tight">
          BURP
        </h1>

        <p className="font-sans font-medium text-sm sm:text-base md:text-xl text-slate-900 z-10 tracking-tight">in every Sip</p>

      </div> */}
      <div className='bg-white pt-20'>
        <ConnectSection />
      </div>
    </div>

  )
}
'use client'

import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import ChildhoodMemoriesCard from '../components/ChildhoodMemoriesCard'

function Page() {
  return (
    <div className='bg-[#FEF5E4]'>
      <Header />
      <div className="w-full h-screen max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-col md:flex-row  md:items-center justify-between gap-8">

          {/* Left Image */}
          <div className="w-40% flex justify-center md:justify-start">
            <Image
              src="/about-us/image 10.png"
              alt="SpiceTale"
              width={469}
              height={469}
              priority
              className=""
            />
          </div>

          {/* Right Text */}
          <div className="w-full max-w-[534px] text-center md:text-left">
            <h1 className="font-display font-normal text-3xl sm:text-4xl lg:text-[64px] leading-tight md:leading-[110%] uppercase text-[#3D1706] mb-4">
              A story of spices started 8 years back
            </h1>
            <p className="font-sans font-normal text-base sm:text-lg md:text-[24px] leading-relaxed md:leading-[150%] text-[#3F2424]">
              At SpiceTale, every sip carries a memory. Our recipes are treasures passed down from our grandparents — drinks they crafted with love, care, and a pinch of magic. We’ve bottled that same tradition, so you can share not just a refreshing beverage, but moments of laughter, stories, and togetherness with your friends.
            </p>
          </div>

        </div>
      </div>
      <ChildhoodMemoriesCard />
      <div className='bg-white'>
        <div className='w-full max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-8'>
          <div><Image src="/about-us/image 12.png" alt="SpiceTale" width={582} height={388} /></div>
          <div>
            <p className='font-sans font-[400] text-base sm:text-lg md:text-[24px] leading-relaxed md:leading-[150%] text-[#3F2424] mt-4'>May it be your home, or outside, Every Sip, just feels good. </p>
          </div>
        </div>
      </div>

      {/* BURP SECTION */}
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        >
          <Image
            src="/about-us/burp.png"
            alt="BURP Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        {/* <!-- Small top text --> */}
        <h3 className="font-sans font-[500] text-xl  text-[#16181A] z-10">A Feel Good Drink</h3>

        {/* <!-- Main big text --> */}
        <h1 className="z-10 font-display text-[288px] font-[400] text-[#B7DEEF] leading-[90%]">
          BURP
        </h1>

        {/* <!-- Small bottom text --> */}
        <p className="font-sans font-[500] text-xl  text-[#16181A] z-10">in every Sip</p>

      </div>
    </div>

  )
}

export default Page

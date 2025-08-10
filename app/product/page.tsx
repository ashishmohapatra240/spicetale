import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <Header />
            <div className='container flex items-center justify-between py-4 px-4 max-w-7xl mx-auto'>
                <div className='relative bg-[#A3655F] h-[554px] w-[444px] rounded-2xl '>
                    <Image src="/images/products/masala-jeera.png" alt="Childhood memories illustration showing three friends at a local store" width={190} height={394} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-xl object-cover" priority />

                    <p className='absolute font-sans text-white text-[20px] rounded-2xl bg-black px-16 bottom-10 left-1/2 -translate-x-1/2 text-2xl '>Order</p>
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <p className='font-display font-[400] text-[26px] '>Masala Jeera</p>
                            <p className='font-sans font-[400] text-[16px]'>Punch of Jeera</p>
                        </div>
                        <div className='bg-[#FF621A] rounded-2xl text-white px-4'>
                            $ 20
                        </div>
                    </div>
                    {/* <div className='flex justify-between gap-4 border border-[#16181A] rounded-2xl px-4 py-2 mb-4'>
                <p className='bg-[#16181A] rounded-2xl text-white px-4'>500 ml</p>
                <p>300 ml</p>
            </div> */}
                    <div className="relative flex items-center border border-[#16181A] rounded-2xl px-1  mb-4  overflow-hidden">
                        {/* Highlighted segment */}
                        <div className="absolute left-0 top-0 h-full w-1/2 bg-[#16181A] rounded-2xl z-0 transition-all"></div>
                        <div className="relative flex w-full z-10">
                            <p className="w-1/2 text-center text-white font-sans font-[500] text-base py-2">500 ml</p>
                            <p className="w-1/2 text-center text-[#16181A] font-sans font-[500] text-base py-2">300 ml</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-sans font-[400] text-[24px] '>At SpiceTale, every sip carries a memory. Our recipes are treasures passed down from our grandparents — drinks they crafted with love, care, and a pinch of magic.</p>
                    </div>
                </div>
            </div>


            <div className='container flex items-center justify-between py-4 px-4 max-w-7xl mx-auto'>
                <div className='relative bg-[#A3655F] h-[554px] w-[444px] rounded-2xl '>
                    <Image src="/images/products/masala-jeera.png" alt="Childhood memories illustration showing three friends at a local store" width={190} height={394} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-xl object-cover" priority />

                    <p className='absolute font-sans text-white text-[20px] rounded-2xl bg-black px-16 bottom-10 left-1/2 -translate-x-1/2 text-2xl '>Order</p>
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <p className='font-display font-[400] text-[26px] '>Masala Jeera</p>
                            <p className='font-sans font-[400] text-[16px]'>Punch of Jeera</p>
                        </div>
                        <div className='bg-[#FF621A] rounded-2xl text-white px-4'>
                            $ 20
                        </div>
                    </div>
                    {/* <div className='flex justify-between gap-4 border border-[#16181A] rounded-2xl px-4 py-2 mb-4'>
                <p className='bg-[#16181A] rounded-2xl text-white px-4'>500 ml</p>
                <p>300 ml</p>
            </div> */}
                    <div className="relative flex items-center border border-[#16181A] rounded-2xl px-1  mb-4  overflow-hidden">
                        {/* Highlighted segment */}
                        <div className="absolute left-0 top-0 h-full w-1/2 bg-[#16181A] rounded-2xl z-0 transition-all"></div>
                        <div className="relative flex w-full z-10">
                            <p className="w-1/2 text-center text-white font-sans font-[500] text-base py-2">500 ml</p>
                            <p className="w-1/2 text-center text-[#16181A] font-sans font-[500] text-base py-2">300 ml</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-sans font-[400] text-[24px] '>At SpiceTale, every sip carries a memory. Our recipes are treasures passed down from our grandparents — drinks they crafted with love, care, and a pinch of magic.</p>
                    </div>
                </div>
            </div>

            <div className='container flex items-center justify-between py-4 px-4 max-w-7xl mx-auto'>
                <div className='relative bg-[#A3655F] h-[554px] w-[444px] rounded-2xl '>
                    <Image src="/images/products/masala-jeera.png" alt="Childhood memories illustration showing three friends at a local store" width={190} height={394} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-xl object-cover" priority />

                    <p className='absolute font-sans text-white text-[20px] rounded-2xl bg-black px-16 bottom-10 left-1/2 -translate-x-1/2 text-2xl '>Order</p>
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <p className='font-display font-[400] text-[26px] '>Masala Jeera</p>
                            <p className='font-sans font-[400] text-[16px]'>Punch of Jeera</p>
                        </div>
                        <div className='bg-[#FF621A] rounded-2xl text-white px-4'>
                            $ 20
                        </div>
                    </div>
                    {/* <div className='flex justify-between gap-4 border border-[#16181A] rounded-2xl px-4 py-2 mb-4'>
                <p className='bg-[#16181A] rounded-2xl text-white px-4'>500 ml</p>
                <p>300 ml</p>
            </div> */}
                    <div className="relative flex items-center border border-[#16181A] rounded-2xl px-1  mb-4  overflow-hidden">
                        {/* Highlighted segment */}
                        <div className="absolute left-0 top-0 h-full w-1/2 bg-[#16181A] rounded-2xl z-0 transition-all"></div>
                        <div className="relative flex w-full z-10">
                            <p className="w-1/2 text-center text-white font-sans font-[500] text-base py-2">500 ml</p>
                            <p className="w-1/2 text-center text-[#16181A] font-sans font-[500] text-base py-2">300 ml</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-sans font-[400] text-[24px] '>At SpiceTale, every sip carries a memory. Our recipes are treasures passed down from our grandparents — drinks they crafted with love, care, and a pinch of magic.</p>
                    </div>
                </div>
            </div>

            <div className='container flex items-center justify-between py-4 px-4 max-w-7xl mx-auto'>
                <div className='relative bg-[#A3655F] h-[554px] w-[444px] rounded-2xl '>
                    <Image src="/images/products/masala-jeera.png" alt="Childhood memories illustration showing three friends at a local store" width={190} height={394} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-xl object-cover" priority />

                    <p className='absolute font-sans text-white text-[20px] rounded-2xl bg-black px-16 bottom-10 left-1/2 -translate-x-1/2 text-2xl '>Order</p>
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <p className='font-display font-[400] text-[26px] '>Masala Jeera</p>
                            <p className='font-sans font-[400] text-[16px]'>Punch of Jeera</p>
                        </div>
                        <div className='bg-[#FF621A] rounded-2xl text-white px-4'>
                            $ 20
                        </div>
                    </div>
                    {/* <div className='flex justify-between gap-4 border border-[#16181A] rounded-2xl px-4 py-2 mb-4'>
                <p className='bg-[#16181A] rounded-2xl text-white px-4'>500 ml</p>
                <p>300 ml</p>
            </div> */}
                    <div className="relative flex items-center border border-[#16181A] rounded-2xl px-1  mb-4  overflow-hidden">
                        {/* Highlighted segment */}
                        <div className="absolute left-0 top-0 h-full w-1/2 bg-[#16181A] rounded-2xl z-0 transition-all"></div>
                        <div className="relative flex w-full z-10">
                            <p className="w-1/2 text-center text-white font-sans font-[500] text-base py-2">500 ml</p>
                            <p className="w-1/2 text-center text-[#16181A] font-sans font-[500] text-base py-2">300 ml</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-sans font-[400] text-[24px] '>At SpiceTale, every sip carries a memory. Our recipes are treasures passed down from our grandparents — drinks they crafted with love, care, and a pinch of magic.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

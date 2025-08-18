import Image from 'next/image'
import React from 'react'

const GreenDivider = ({ className }: { className: string }) => {
    return (
        <div className={`relative ${className}`}>
            <Image src="/images/green-divider.png" alt="green-divider" width={1000} height={1000} className='w-full h-36' />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <h2 className='text-black text-5xl font-bold font-display'>
                    A journey that began 4 years ago...
                </h2>
            </div>
        </div>
    )
}

export default GreenDivider
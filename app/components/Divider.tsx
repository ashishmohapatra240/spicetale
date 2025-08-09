import React from 'react'
import Image from 'next/image'

const Divider = ({ className }: { className: string }) => {
    return (
        <Image src="/images/divider.png" alt="divider" width={1000} height={1000} className={`w-full h-auto ${className}`} />
    )
}

export default Divider
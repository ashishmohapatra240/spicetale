
import Image from 'next/image'
import { products } from '../data/products'
import ConnectSection from '../components/ConnectSection'


export default function Products() {
    return (
        <div>
            {products.map((product) => (
                <div
                    key={product.id}
                    className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-6 sm:gap-8 lg:gap-12 py-6 sm:py-10 lg:py-12 px-4 max-w-7xl mx-auto"
                >
                    <div className="relative w-full max-w-md h-80 sm:h-96 rounded-2xl overflow-hidden">
                        <Image
                            src={product.backgroundImageSrc}
                            alt={product.name}
                            fill
                            priority
                            className="object-fit"
                        />
                        <div className={`absolute inset-0 rounded-2xl`}></div>
                        <Image
                            src={product.imgSrc}
                            alt={product.name}
                            width={192}
                            height={384}
                            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-xl object-contain w-auto h-[300px]"
                            priority
                        />
                        {/* <p className="absolute font-sans text-white text-sm sm:text-base lg:text-lg rounded-2xl bg-black px-8 sm:px-12 lg:px-16 py-1 bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2">
                            Order
                        </p> */}
                    </div>
                    <div className="w-full lg:w-auto">
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex items-start w-full">
                                <div className="flex-1">
                                    <h3 className="font-display font-normal text-3xl md:text-5xl leading-[1] uppercase text-[#16181A] mb-2 tracking-tight">
                                        {product.name}
                                    </h3>
                                    <p className="font-sans font-normal text-[16px] leading-relaxed text-[#16181A] tracking-tight">{product.subtitle}</p>
                                </div>

                            </div>
                            <div className='flex items-center gap-2'>
                                <div className="inline-flex items-center rounded-full border border-[#16181A] p-1 w-fit">
                                    <div className="px-4 py-1 rounded-full bg-[#16181A] text-white font-sans text-[16px] font-medium">
                                        {product.sizesMl[0]} ml
                                    </div>
                                    <div className="px-4 py-1 text-[#16181A] font-sans text-[16px] font-medium">
                                        {product.sizesMl[1]} ml
                                    </div>

                                </div>
                                <div
                                    className="inline-flex items-center gap-1 h-9 sm:h-10 px-3 sm:px-4 rounded-full text-white font-sans text-xl sm:text-2xl font-medium shrink-0"
                                    style={{ backgroundColor: product.backgroundColor }}
                                >
                                    <span>₹</span>
                                    <span>{product.priceInr}</span>
                                </div>
                            </div>
                            <p className="font-sans font-normal text-[16px] leading-relaxed text-[#16181A] tracking-tight">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <div className='bg-white pt-20'>
                <ConnectSection />
            </div>
        </div>
    )
}
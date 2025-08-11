export type Product = {
    id: string
    name: string
    subtitle: string
    priceInr: number
    sizesMl: number[]
    backgroundColor: string
    imgSrc: string
    backgroundImageSrc: string
}

export const products: Product[] = [
    {
        id: 'masala-jeera',
        name: 'Masala Jeera',
        subtitle: 'Punch of Jeera',
        priceInr: 20,
        sizesMl: [500, 300],
        backgroundColor: '#BD8E86',
        imgSrc: '/images/products/masala-jeera.png',
        backgroundImageSrc: '/images/products/bown.png',
    },
    {
        id: 'nimbu-masala',
        name: 'Nimbu Masala',
        subtitle: 'Punch of Jeera',
        priceInr: 20,
        sizesMl: [500, 300],
        backgroundColor: '#E4D827',
        imgSrc: '/images/products/nimbu-masala.png',
        backgroundImageSrc: '/images/products/lemon.png',
    },
    {
        id: 'orange',
        name: 'Orange',
        subtitle: 'Punch of Jeera',
        priceInr: 20,
        sizesMl: [500, 300],
        backgroundColor: '#FF7B2E',
        imgSrc: '/images/products/orange-drink.png',
        backgroundImageSrc: '/images/products/orange.png',
    },
    {
        id: 'nimbu-masala-2',
        name: 'Nimbu Masala',
        subtitle: 'Punch of Jeera',
        priceInr: 20,
        sizesMl: [500, 300],
        backgroundColor: '#4D54FF',
        imgSrc: '/images/products/nimbu-masala.png',
        backgroundImageSrc: '/images/products/blue.png',
    },
]



export type Product = {
    id: string
    name: string
    subtitle: string
    pricing: { [key: number]: number } // size in ml -> price in rupees
    sizesMl: number[]
    backgroundColor: string
    imgSrc: string
    backgroundImageSrc: string
    description: string
}

export const products: Product[] = [
    {
        id: 'masala-jeera',
        name: 'Masala Jeera',
        subtitle: 'Bold, earthy cumin meets a sparkling burst of our grandmothers secret spice blend.',
        pricing: { 200: 10, 300: 20 },
        sizesMl: [200, 300],
        backgroundColor: '#BD8E86',
        imgSrc: '/images/products/masala-jeera.png',
        backgroundImageSrc: '/images/products/bown.png',
        description: "Our signature Jeera Masala soda blends earthy roasted cumin, a dash of citrus, and a closely guarded spice blend — lifted by crisp carbonation. It's the taste of spice markets, family kitchens, and comfort, reimagined with fizz.",
    },
    {
        id: 'nimbu-masala',
        name: 'Masala Shikanji Soda',
        subtitle: 'Tangy, spiced lemonade meets sparkling refreshment in every sip',
        pricing: { 200: 10, 300: 20 },
        sizesMl: [200, 300],
        backgroundColor: '#E4D827',
        imgSrc: '/images/products/nimbu-masala.png',
        backgroundImageSrc: '/images/products/lemon.png',
        description: "Fresh lemon zest, over five aromatic spices, and crisp carbonation create an irresistibly tangy, spicy, and refreshing Indian summer drink.",
    },
    {
        id: 'orange',
        name: 'Tangy Orange Masala Soda',
        subtitle: 'Juicy orange with a fizzy masala kick youll never forget.',
        pricing: { 200: 10 },
        sizesMl: [200],
        backgroundColor: '#FF7B2E',
        imgSrc: '/images/products/orange-drink.png',
        backgroundImageSrc: '/images/products/orange.png',
        description: "Sweet, sun-kissed orange meets our secret spice blend and sparkling fizz. Nostalgic yet exciting — the Indian summer drink you'll crave.",
    },
    {
        id: 'nimbu-masala-2',
        name: 'Masala Shikanji Soda',
        subtitle: 'Tangy, spiced lemonade meets sparkling refreshment in every sip',
        pricing: { 200: 10, 300: 20 },
        sizesMl: [200, 300],
        backgroundColor: '#4D54FF',
        imgSrc: '/images/products/nimbu-masala.png',
        backgroundImageSrc: '/images/products/blue.png',
        description: "Fresh lemon zest, over five aromatic spices, and crisp carbonation create an irresistibly tangy, spicy, and refreshing Indian summer drink.",
    },
]



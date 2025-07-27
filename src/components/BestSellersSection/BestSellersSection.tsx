import React from "react";
import {Card, CardContent} from "../ui/card";

// Product data for mapping
const bestSellerProducts = [
    {
        id: 1,
        name: "LUX HIGH CHAIR",
        price: "$2668.15",
        image: "/img-3.svg",
        rating: 5
    },
    {
        id: 2,
        name: "URBAN LUX HIGH CHAIR",
        price: "$2668.15",
        image: "/img-6.svg",
        rating: 5
    }, {
        id: 3,
        name: "MORDERN BLACK HANGING LIGHT",
        price: "$1595.6",
        image: "/img-4.svg",
        rating: 5
    },
    // {   id: 2,   name: "MORDERN BOARD",   price: "$1355.6",   image:
    // "/img-5.svg",   rating: 5, }, {   id: 3,   name: "METRO FUSION TABLE",
    // price: "$2238.30",   image: "/img-5.svg",   rating: 5, },
];

export const BestSellersSection = () : JSX.Element => {
    return (
        <section className="flex flex-col items-center gap-[72px] py-8 lg:px-24">
            <header className="flex flex-col items-center gap-9 w-full">
                <h2
                    className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] text-center tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                    BEST COMBINED WITH:
                </h2>

                <p
                    className="font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-black-3 text-[length:var(--h3-16-bold-font-size)] text-center leading-[var(--h3-16-bold-line-height)] tracking-[var(--h3-16-bold-letter-spacing)] [font-style:var(--h3-16-bold-font-style)]">
                    THESE COMBINATION WILL MAKE YOUR HOME TONE - SUR - TONE
                </p>
            </header>

            <div className="w-full">
                <div className="flex flex-col block md:hidden">
                    {bestSellerProducts.map((product, index) => index === 0 && (<img
                        className="max-h-[300px] w-full object-cover px-4 mb-8"
                        alt={product.name}
                        src={product.image}/>))}
                </div>

                {/* Mode Dekstop */}
                <div
                    className="hidden md:grid md:grid-cols-3 px-24 lg:grid lg:grid-cols-3 lg:px-0 gap-8">
                   {bestSellerProducts.map((product) => (
                        <Card
                            key={product.id}
                            className="border-none shadow-none cursor-pointer group transition-all duration-300 ease-in-out hover:scale-105">
                            <CardContent className="flex flex-col items-center gap-8 p-0">
                                <img
                                    className="h-full w-full object-contain "
                                    alt={product.name}
                                    src={product.image}/>

                                <div className="flex flex-col items-center gap-3 w-full">
                                    <h3
                                        className="w-full font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-1 text-[length:var(--h3-16-medium-font-size)] text-center tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center justify-center gap-1 w-full">
                                        {[...Array(product.rating)].map((_, index) => (<img key={index} className="w-4 h-4" alt="Star" src="/star.svg"/>))}
                                    </div>

                                    <p
                                        className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] text-center leading-[var(--h2-20-extra-bold-line-height)] tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]">
                                        {product.price}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Mode handphone */}
                <div
                    className="flex flex-rows gap-9 px-4 lg:px-0 lg:max-w-[1392px] lg:mx-auto flex items-center justify-center block md:hidden lg:hidden">
                   {bestSellerProducts.slice(1, 3).map((product) => (
                        <Card
                            key={product.id}
                            className="border-none shadow-none cursor-pointer group transition-all duration-300 ease-in-out hover:scale-105 ">
                            <CardContent className="flex flex-col items-center gap-8 p-0">
                                <img
                                    className="max-h-full max-w-full object-contain"
                                    alt={product.name}
                                    src={product.image}/>

                                <div className="flex flex-col items-center gap-3 w-full">
                                    <h3
                                        className="w-full font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-1 text-[length:var(--h3-16-medium-font-size)] text-center tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center justify-center gap-1 w-full">
                                        {[...Array(product.rating)].map((_, index) => (<img key={index} className="w-4 h-4" alt="Star" src="/star.svg"/>))}
                                    </div>

                                    <p
                                        className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] text-center leading-[var(--h2-20-extra-bold-line-height)] tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]">
                                        {product.price}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

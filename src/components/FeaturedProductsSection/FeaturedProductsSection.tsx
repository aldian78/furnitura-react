import {StarIcon} from "lucide-react";
import React from "react";
import {Card, CardContent} from "../ui/card";
import {Tabs, TabsList, TabsTrigger} from "../ui/tabs";
import {ChevronRightIcon} from "lucide-react";

// Product data for mapping
const products = [
    {
        id: 1,
        name: "URBAN LUX HIGH CHAIR",
        price: "$2668.15",
        image: "/img-13.svg",
        rating: 5
    }, {
        id: 2,
        name: "MORDERN BLACK HANGING LIGHT",
        price: "$1595.6",
        image: "/img-12.svg",
        rating: 5
    }, {
        id: 3,
        name: "METRO FUSION TABLE",
        price: "$2238.30",
        image: "/img-9.svg",
        rating: 5
    }, {
        id: 4,
        name: "LUMIN DESK LAMP",
        price: "$1477.80",
        image: "/img-10.svg",
        rating: 5
    }, {
        id: 5,
        name: "TIMELESS EDGE HANGING CLOCK",
        price: "$1071.6",
        image: "/img-8.svg",
        rating: 5
    }, {
        id: 6,
        name: "ZENITH PENDANT LIGHT",
        price: "$2069.59",
        image: "/img-11.svg",
        rating: 5
    }, {
        id: 7,
        name: "SIDE CHAIR",
        price: "$2069.59",
        image: "/img-9.svg",
        rating: 4
    }, {
        id: 8,
        name: "PILLOW CHAIR",
        price: "$2069.59",
        image: "/img-12.svg",
        rating: 5
    }
];

// Filter categories
const categories = [
    {
        id: "all",
        name: "ALL"
    }, {
        id: "on-sale",
        name: "ON SALE"
    }, {
        id: "sofa",
        name: "SOFA"
    }, {
        id: "hanging-light",
        name: "HANGING LIGHT"
    }, {
        id: "hot",
        name: "HOT"
    }, {
        id: "bestSeller",
        name: "BEST SELLER"
    },
    {
        id: "low",
        name: "LOW"
    }, {
        id: "high",
        name: "HIGH"
    }
];

export const FeaturedProductsSection = () : JSX.Element => {
    return (
        <section className="flex flex-col items-center gap-[72px] py-[12px]">
            <div className="flex flex-col items-center gap-9 w-full">
                <h2
                    className="font-h1-32-extra-bold font-[800] text-black-1 text-[32px] tracking-[0px] leading-[40px] whitespace-nowrap">
                    FEATURED PRODUCTS
                </h2>

                {/* <Tabs defaultValue="all" className="w-full">
                    <TabsList
                        className="flex w-full max-w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 px-4">
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="snap-start shrink-0 px-4 py-2 text-sm font-semibold text-black whitespace-nowrap">
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs> */}

                <Tabs defaultValue="all" className="w-full">
                    <TabsList
                        className="bg-transparent h-auto px-4 gap-12 flex w-full max-w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="snap-start shrink-0 font-h3-16-bold font-[700] text-black-1 text-[16px] leading-[20px] tracking-[0px] pb-2 px-0 rounded-none data-[state=active]:border-b-[1.7px] data-[state=active]:border-[#2f302c] data-[state=active]:shadow-none">
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>

            <div
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 md:gap-12 md:px-8 lg:px-24">
                {products
                    .slice(0, 8)
                    .map((product) => (<ProductCard key={product.id} product={product}/>))}
            </div>
            <div
                className="flex items-center mt-[-20px] transition-all duration-200 ease-in-out group-hover:translate-x-1 group-focus-within:translate-x-1">
                <span
                    className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] transition-all duration-200 ease-in-out group-hover:text-black-1 group-hover:font-semibold group-focus-within:text-black-1 group-focus-within:font-semibold">
                    <a href="#">View more</a>
                </span>
            </div>
        </section>
    );
};

interface ProductProps {
    product : {
        id: number;
        name: string;
        price: string;
        image: string;
        rating: number;
    };
}

const ProductCard = ({product} : ProductProps) => {
    return (
        <Card
            className="mb-8 border-none shadow-none bg-transparent cursor-pointer group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <CardContent className="flex flex-col items-center gap-8 p-0">
                <div className="w-full h-[230px] md:h-[300px] lg:h-[400px] overflow-hidden">
                    <img
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-102 h-[300px]"
                        alt={product.name}
                        src={product.image}/>
                </div>

                <div className="flex flex-col items-center gap-3 w-full">
                    <h3
                        className="font-h3-16-medium font-[400] text-black-1 text-[16px] text-center tracking-[0px] leading-[20px] w-full bot">
                        {product.name}
                    </h3>

                    <div className="flex items-center justify-center gap-1 w-full">
                        {Array
                            .from({length: product.rating})
                            .map((_, i) => (<StarIcon key={i} className="w-4 h-4 fill-current text-yellow-500"/>))}
                    </div>

                    <span
                        className="font-h2-20-extra-bold font-[800] text-black-1 text-[20px] text-right leading-[28px] tracking-[0px]">
                        {product.price}
                    </span>
                </div>
            </CardContent>
        </Card>
    );
};
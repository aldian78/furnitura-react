import { StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

// Product data for mapping
const products = [
  {
    id: 1,
    name: "URBAN LUX HIGH CHAIR",
    price: "$2668.15",
    image: "/img-13.svg",
    rating: 5,
  },
  {
    id: 2,
    name: "MORDERN BLACK HANGING LIGHT",
    price: "$1595.6",
    image: "/img-12.svg",
    rating: 5,
  },
  {
    id: 3,
    name: "METRO FUSION TABLE",
    price: "$2238.30",
    image: "/img-9.svg",
    rating: 5,
  },
  {
    id: 4,
    name: "LUMIN DESK LAMP",
    price: "$1477.80",
    image: "/img-10.svg",
    rating: 5,
  },
  {
    id: 5,
    name: "TIMELESS EDGE HANGING CLOCK",
    price: "$1071.6",
    image: "/img-8.svg",
    rating: 5,
  },
  {
    id: 6,
    name: "ZENITH PENDANT LIGHT",
    price: "$2069.59",
    image: "/img-11.svg",
    rating: 5,
  },
];

// Filter categories
const categories = [
  { id: "all", name: "ALL" },
  { id: "on-sale", name: "ON SALE" },
  { id: "sofa", name: "SOFA" },
  { id: "hanging-light", name: "HANGING LIGHT" },
];

export const FeaturedProductsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[72px] py-[82px]">
      <div className="flex flex-col items-center gap-9 w-full">
        <h2 className="font-h1-32-extra-bold font-[800] text-black-1 text-[32px] tracking-[0px] leading-[40px] whitespace-nowrap">
          FEATURED PRODUCTS
        </h2>

        <Tabs defaultValue="all" className="w-auto">
          <TabsList className="bg-transparent h-auto p-0 gap-12">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={`font-h3-16-bold font-[700] text-black-1 text-[16px] leading-[20px] tracking-[0px] pb-2 px-0 rounded-none data-[state=active]:border-b-[1.7px] data-[state=active]:border-[#2f302c] data-[state=active]:shadow-none focus:ring-0 focus-visible:ring-0`}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-3 gap-9 w-full px-[264px]">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-9 w-full px-[264px]">
        {products.slice(3, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    rating: number;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Card className="border-none shadow-none bg-transparent cursor-pointer group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <CardContent className="flex flex-col items-center gap-8 p-0">
        <div className="w-full h-[450px] overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-102 h-[300px]"
            alt={product.name}
            src={product.image}
          />
        </div>

        <div className="flex flex-col items-center gap-3 w-full">
          <h3 className="font-h3-16-medium font-[400] text-black-1 text-[16px] text-center tracking-[0px] leading-[20px] w-full bot">
            {product.name}
          </h3>

          <div className="flex items-center justify-center gap-1 w-full">
            {Array.from({ length: product.rating }).map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 fill-current text-yellow-500" />
            ))}
          </div>

          <span className="font-h2-20-extra-bold font-[800] text-black-1 text-[20px] text-right leading-[28px] tracking-[0px]">
            {product.price}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
import { StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

// Product data for mapping
const featuredProducts = [
  {
    id: 1,
    image: "/img-6.svg",
    title: "MODERN BLACK HANGING LIGHT",
    price: "$2352.41",
    rating: 5,
  },
  {
    id: 2,
    image: "/img-9.svg",
    title: "MODERN BLACK HANGING LIGHT",
    price: "$2352.41",
    rating: 5,
  },
  {
    id: 3,
    image: "/img-3.svg",
    title: "MODERN BLACK HANGING LIGHT",
    price: "$2352.41",
    rating: 5,
  },
];

export const ProductSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-wrap gap-9">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="flex-1 min-w-[300px] border-none my-6">
          <CardContent className="flex flex-col items-center gap-8 p-0">
            <img
              className="w-full h-[462px] object-cover"
              alt={product.title}
              src={product.image}
            />

            <div className="flex flex-col items-center gap-3 w-full">
              <h3 className="w-full mt-[-1.00px] font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-1 text-[length:var(--h3-16-medium-font-size)] text-center tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                {product.title}
              </h3>

              <div className="flex items-center justify-center gap-1 w-full">
                {[...Array(product.rating)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className="w-4 h-4 fill-current text-yellow-500"
                    size={16}
                  />
                ))}
              </div>

              <p className="font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] text-right leading-[var(--h2-20-extra-bold-line-height)] whitespace-nowrap font-h2-20-extra-bold tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]">
                {product.price}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
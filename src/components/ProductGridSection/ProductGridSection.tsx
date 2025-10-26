import {StarIcon} from "lucide-react";
import {Card, CardContent} from "../ui/card";
import { formatRupiah } from "../../utils/formatCurrency";

interface Product {
  id: string;
  name: string;
  price: string;
  image_url: string;
  description: string;
  title: string;
}
interface Props {
  products: Product[];
}

export const ProductGridSection = ({ products }: Props) : JSX.Element => {
    return (
        // <section className="w-full grid grid-flow-col grid-rows-3 gap-6">
        <section className="w-full grid grid-cols-2 gap-6 lg:grid-cols-3">
            {products.map((product) => (
                <Card key={product.id} className="relative flex-1 border-none mt-8 shadow-none bg-transparent cursor-pointer group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
                        SALE
                    </span>
                    <CardContent className="flex flex-col items-center gap-4 p-0">
                        <img
                            className="w-full h-[180px] lg:h-[330px] md:h-[330px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-102"
                            alt={product.name}
                            src={product.image_url?.[0]}/>

                        <div className="flex flex-col items-center gap-3 w-full">
                            <h3
                                className="self-stretch mt-[-1.00px] font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-1 text-[length:var(--h3-16-medium-font-size)] text-center tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                <a href={"product-detail"} className="font-h3-16-bold text-black-1">
                                    {product.name}
                                </a>
                            </h3>

                            <div className="flex items-center justify-center gap-1 w-full">
                                {[...Array(5)].map((_, index) => (<StarIcon
                                    key={index}
                                    className="w-4 h-4 fill-current text-yellow-500"
                                    size={16}/>))}
                            </div>

                            <p
                                className="font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] text-right leading-[var(--h2-20-extra-bold-line-height)] whitespace-nowrap font-h2-20-extra-bold tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]">
                                {product.price ? (
                                <div className="flex flex-col items-center">
                                    {/* Harga coret warna merah */}
                                    <p className="text-red-600 line-through text-sm">
                                        Rp. {formatRupiah(parseInt(product.price, 10), false)}
                                    </p>
                                    {/* Harga asli (setelah diskon) dengan style kamu */}
                                    <p
                                        className="font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] text-right leading-[var(--h2-20-extra-bold-line-height)] whitespace-nowrap font-h2-20-extra-bold tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]"
                                    >
                                        Rp. {formatRupiah(parseInt(product.price, 10), false)}
                                    </p>
                                </div>
                                ) : (
                                    <p
                                        className="font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] text-right leading-[var(--h2-20-extra-bold-line-height)] whitespace-nowrap font-h2-20-extra-bold tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]"
                                    >
                                        Rp. {formatRupiah(parseInt(product.price, 10), false)}
                                    </p>
                                )}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </section>
    );
};
import {useEffect, useState} from "react";
import {Card, CardContent} from "../ui/card";
import {Tabs, TabsList, TabsTrigger} from "../ui/tabs";
import product from "../../api/products";
import {toast} from "react-toastify";

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
    }, {
        id: "low",
        name: "LOW"
    }, {
        id: "high",
        name: "HIGH"
    }
];

interface Products {
    id : number;
    name : string;
    price : string;
    image_url : string;
    description : string;
    // rating: number;
}

export const FeaturedProductsSection = () : JSX.Element => {
    const [products,
        setProducts] = useState < Products[] > ([]);
    const [pagination, setPagination] = useState<{ currentPage: number; totalPageCount: number } | null>(null);
    const [canViewMore, setCanViewMore] = useState(true);
    
    useEffect(() => {
        // load page pertama saat mount
        fetchProducts(1);
    }, []);

    const fetchProducts = async (page: number, materials?: string) => {
        try {
            const res = await product.ProductList({
            pagination: {
                currentPage: page.toString(),
                itemPerPage: "8",
            },
            materials: materials || "",
            });

            if (res.data?.[0]) {
                const items = res.data[0].data || [];
                const pageInfo = res.data[0].pagination;

                // tambah produk baru ke list
                setProducts((prev) => {
                    const merged = [...prev, ...items];
                    return Array.from(new Map(merged.map((p) => [p.id, p])).values());
                });

                setPagination({
                    currentPage: pageInfo.current_page,
                    totalPageCount: pageInfo.total_page_count
                });

                // update kondisi tombol di sini
                setCanViewMore(pageInfo.current_page < pageInfo.total_page_count);
            }
        } catch (err) {
            toast.error("Gagal ambil produk. Silahkan Coba beberapa saat lagi!", {toastId: "get-product"});
        }
    };

    // saat klik View More
    const handleViewMore = () => {
        if (pagination && canViewMore) {
            fetchProducts(pagination.currentPage + 1);
        }
    };



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
                        className="bg-transparent px-4 pr-4 gap-6 flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
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
                {products.map((p) => (
                    <ProductCard key={p.id} product={p}/>
                ))}
            </div>
            <div
                className="flex items-center mt-[-20px] transition-all duration-200 ease-in-out group-hover:translate-x-1 group-focus-within:translate-x-1">
                <span
                    className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] transition-all duration-200 ease-in-out group-hover:text-black-1 group-hover:font-semibold group-focus-within:text-black-1 group-focus-within:font-semibold">
                    {pagination && pagination.currentPage < pagination.totalPageCount && (
                        <button onClick={handleViewMore}
                        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50">
                            View More
                        </button>
                    )}
                </span>
            </div>
        </section>
    );
};

const ProductCard = ({ product }: { product: Products }) => {
    return (
        <Card
            className="mb-8 border-none shadow-none bg-transparent cursor-pointer group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <CardContent className="flex flex-col items-center gap-8 p-0">
                    <div className="w-full h-[230px] md:h-[300px] lg:h-[400px] overflow-hidden">
                        <img
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-102 h-[300px]"
                            alt={product.name}
                            src={product.image_url[0]}/>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-full">
                        <h3
                            className="font-h3-16-medium font-[400] text-black-1 text-[16px] text-center tracking-[0px] leading-[20px] w-full bot">
                            {product.name}
                        </h3>

                    <div className="flex items-center justify-center gap-1 w-full">
                        {/* {Array
                            .from({length: product.rating})
                            .map((_, i) => (<StarIcon key={i} className="w-4 h-4 fill-current text-yellow-500"/>))} */}
                        {product.description}
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
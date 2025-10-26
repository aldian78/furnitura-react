import {ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, LayoutGridIcon, MenuIcon} from "lucide-react";
import {useEffect, useState} from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "../../components/ui/accordion";
import {Badge} from "../../components/ui/badge";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "../../components/ui/breadcrumb";
import {Button} from "../../components/ui/button";
import {Pagination, PaginationContent, PaginationItem, PaginationLink} from "../../components/ui/pagination";
import {AdjustmentsVerticalIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {Separator} from "../../components/ui/separator";
import {Slider} from "../../components/ui/slider";
import {Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import {CallToActionSection} from "../../components/CallToActionSection";
import {FooterSection} from "../../components/FooterSection/FooterSection";
import {HeroSection} from "../../components/HeroSection";
import {NavigationSection} from "../../components/NavigationSection";
import {ProductGridSection} from "../../components/ProductGridSection";
import { formatRupiah } from "../../utils/formatCurrency";
import product from "../../api/products";
import category from "../../api/category";
import {toast} from "react-toastify";

type Product = {
    id: string;
    name: string;
    price: string;
    image_url: string;
    description: string;
    title: string;
};

type PaginationInfo = {
    currentPage: number;
    totalPageCount: number;
    itemPerPage: number;
    totalData: number;
};

export const ProductSection = () : JSX.Element => {
    const [products,
        setProducts] = useState < Product[] > ([]);
    const [currentPage,
        setCurrentPage] = useState < number > (1); // halaman aktif
    const [pagination,
        setPagination] = useState < PaginationInfo > ({currentPage: 1, totalPageCount: 1, itemPerPage: 6, totalData: 0});
    const [loading,
        setLoading] = useState < boolean > (false);

    // fetchProducts menerima page, tapi dipanggil dari useEffect saat currentPage
    // berubah
    const fetchProducts = async(page : number, categoryId?: string | null, materials?: string | null, minPrice?: number,
        maxPrice?: number) => {
        try { 
            setLoading(true);

            const payload : any = {
                pagination: {
                    currentPage: page.toString(),
                    itemPerPage: pagination.itemPerPage
                        ?.toString() || "6"
                },
                ...(categoryId ? { categoryId: categoryId } : {}),
                ...(materials ? { materials: materials } : {}),
                ...(minPrice ? { minPrice } : {}),
                ...(maxPrice ? { maxPrice } : {}),
            };

            const res = await product.ProductList(payload);
 
            if (res.data
                ?.[0]) {
                const items : Product[] = res.data[0].data || [];
                const pInfo = res.data[0].pagination;

                // replace data (karena ini pagination biasa, bukan infinite scroll)
                setProducts(items);

                setPagination({
                    currentPage: pInfo.current_page, 
                    totalPageCount: pInfo.total_page_count, 
                    itemPerPage: pInfo.item_per_page, 
                    // totalData: Number.isFinite(pInfo.total_item_count)
                    //     ? pInfo.total_item_count
                    // : 0,
                    totalData: pInfo.total_item_count
                });
            } else {
                // kosongkan jika tidak ada
                setProducts([]);
            }
        } catch (err) {
            toast.error("Gagal ambil produk. Silahkan coba lagi!", {toastId: "get-product"});
        } finally {
            setLoading(false);
        }
    };

    // useEffect pemanggil: setiap kali currentPage berubah, fetch page itu
    useEffect(() => {
        fetchProducts(currentPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const handleCategoryClick = (categoryId: string | null) => {
    const newCategory = activeCategory === categoryId ? null : categoryId;
        setActiveCategory(newCategory);
        fetchProducts(1, newCategory, activeMaterial); // tetap kirim material kalau ada
    };


    const [activeMaterial, setActiveMaterial] = useState<string | null>(null);
    const handleMaterialClick = (material: string | null) => {
        const newMaterial = activeMaterial === material ? null : material;
        setActiveMaterial(material);
        fetchProducts(1, activeCategory, newMaterial);
    };

    const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000]);
    const handlePriceChange = (value: number[]) => {
        setPriceRange(value as [number, number]);
    };

    const handleApply = () => {
    const [minPrice, maxPrice] = priceRange;
        fetchProducts(1, activeCategory, activeMaterial, minPrice, maxPrice);
    };
    
    const handleReset = () => {
        setPriceRange([0, 50000000]);
        fetchProducts(1, null, null, 0, 0);
    };

    const handlePageChange = (page : number) => {
        if (page < 1 || page > pagination.totalPageCount) 
            return;
        setCurrentPage(page); // ini memicu useEffect -> fetchProducts(page)
    };

    // helper: buat daftar page (dengan ellipsis jika banyak)
    const getPaginationItems = () => {
        const total = pagination.totalPageCount;
        const current = pagination.currentPage;
        const maxVisible = 10;
        const pages : {
            page : number;
            active : boolean
        }[] = [];

        let start = 1;
        let end = total;

        if (total > maxVisible) {
            if (current <= 6) {
                start = 1;
                end = maxVisible;
            } else if (current >= total - 4) {
                start = total - 9;
                end = total;
            } else {
                start = current - 4;
                end = current + 5;
            }
        }

        for (let i = start; i <= end; i++) {
            pages.push({
                page: i,
                active: i === current
            });
        }

        return pages;
    };

    const paginationItems = getPaginationItems();

    const startItem = (pagination.currentPage - 1) * pagination.itemPerPage + 1;
    const endItem = Math.min(pagination.currentPage * pagination.itemPerPage, pagination.totalData);

    type Category = {
        id: string;
        name: string;
    };

    const [categories,
        setCategories] = useState < Category[] > ([]);

    const fetchCategory = async(page : number) => {
        try {
            setLoading(true);
            const res = await category.CategoryList({
                pagination: {
                    currentPage: page.toString(),
                    itemPerPage: pagination
                        .itemPerPage
                        .toString() || "6"
                }
            });

            if (res.data
                ?.[0]) {
                const items : Category[] = res.data[0].data || [];
                const pInfo = res.data[0].pagination;

                // replace data (pagination biasa)
                setCategories(items);

                setPagination({currentPage: pInfo.current_page, totalPageCount: pInfo.total_page_count, itemPerPage: pInfo.item_per_page, totalData: pInfo.total_item_count});
            } else {
                // kosongkan jika tidak ada
                setCategories([]);
            }
        } catch (err) {
            toast.error("Gagal ambil kategori. Silakan coba lagi!", {toastId: "get-category"});
        } finally {
            setLoading(false);
        }
    };

    // ambil data kategori saat pertama mount
    useEffect(() => {
        fetchCategory(1);
    }, []);

    type Material = {
        materials: string;
        total: number;
    };

    const [materials,
        setMaterials] = useState < Material[] > ([]);

    const fetchMaterials = async() => {
        try {
            setLoading(true);
            const res = await product.MaterialsList();

            if (res && Array.isArray(res.data)) {
                const list = Array.isArray(res.data[0])
                    ? res.data[0]
                    : res.data;
                setMaterials(list);
            } else {
                setMaterials([]);
                toast.warning("Tidak ada data material ditemukan.", {toastId: "no-materials"});
            }
        } catch (err) {
            toast.error("Gagal ambil materials. Silakan coba lagi!", {toastId: "get-materials"});
        } finally {
            setLoading(false);
        }
    };

    // ambil data kategori saat pertama mount
    useEffect(() => {
        fetchMaterials();
    }, []);

    const [open,
        setOpen] = useState(false);

    return (
        <div className="bg-white flex flex-row justify-center  overflow-x-hidden">
            <div className="bg-bg-1 w-full relative">
                <NavigationSection/>

                <div className="container mx-auto px-4">
                    <Breadcrumb className="mt-8 mb-4">
                        <BreadcrumbItem>
                            <BreadcrumbLink className="font-medium text-black-3 leading-5">
                                Home/
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                className="font-h3-16-bold text-black-1 leading-[var(--h3-16-bold-line-height)]">
                                Funiture
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>

                {/* Hero section - full width */}
                <HeroSection/> {/* Filter dialog modals - mode mobile */}
                <div className="container mx-auto px-4 md:px-8 lg:px-4">
                    <div className="flex flex-row gap-16 mt-16">
                        <Dialog open={open} onClose={setOpen} className="relative z-10">
                            <DialogBackdrop
                                transition
                                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"/>

                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div
                                    className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                                    <DialogPanel
                                        transition
                                        className="relative w-full top-[100px] transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all
                                        data-closed:translate-y-4 data-closed:opacity-0
                                        data-enter:duration-300 data-enter:ease-out
                                        data-leave:duration-200 data-leave:ease-in
                                        sm:my-8
                                        max-w-full sm:max-w-lg md:max-w-3xl lg:max-w-2xl xl:max-w-3xl">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            {/* Category section */}
                                            <div className="flex flex-col items-start gap-10">
                                                <div className="flex flex-rows items-start gap-3 w-full">
                                                    <div className="flex-1">
                                                        <h2
                                                            className="font-bold text-black-1 text-xl tracking-[var(--h2-32-extra-bold-letter-spacing)] leading-[var(--h2-32-extra-bold-line-height)]">
                                                            CATEGORY
                                                        </h2>
                                                        <Separator className="w-[52px] mt-4 h-1.5 bg-black-1"/>
                                                    </div>
                                                    <div className="flex-2 p-1">
                                                        <button
                                                            type="button"
                                                            onClick={() => setOpen(false)}
                                                            className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                                                            <span className="absolute -inset-0.5"/>
                                                            <span className="sr-only">Close menu</span>
                                                            <XMarkIcon aria-hidden="true" className="size-6"/>
                                                        </button>
                                                    </div>
                                                </div>

                                                <Accordion
                                                    type="single"
                                                    collapsible
                                                    defaultValue="furniture"
                                                    className="w-full">
                                                    <AccordionItem value="furniture">
                                                        <AccordionTrigger
                                                            className="font-bold text-black-1 text-base py-3 border-b border-neutral-300 mb-4">
                                                            FUNITURE
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col gap-4">
                                                                {categories.map((item) => (
                                                                    <div
                                                                        key={item.id}
                                                                        onClick={() => handleCategoryClick(item.id)}
                                                                        className={`text-sm cursor-pointer transition-all duration-150 ${
                                                                            activeCategory === item.id ? "font-semibold text-black-1 text-sm"  // aktif
                                                                            : "font-medium text-black-3 hover:text-black-1" // non-aktif
                                                                        }`}>   
                                                                        {item.name}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>

                                                {/* Shop by section */}
                                                <div className="flex flex-col items-start gap-10 w-full">
                                                    <div className="flex flex-col items-start gap-3 w-full">
                                                        <h2
                                                            className="font-bold text-black-1 text-xl tracking-[var(--h2-24-extra-bold-letter-spacing)] leading-[var(--h2-24-extra-bold-line-height)]">
                                                            SHOP BY
                                                        </h2>
                                                        <Separator className="w-[52px] h-1.5 bg-black-1"/>
                                                    </div>

                                                    <Accordion
                                                        type="single"
                                                        collapsible
                                                        defaultValue="materials"
                                                        className="w-full">
                                                        <AccordionItem value="materials">
                                                            <AccordionTrigger
                                                                className="font-bold text-black-1 text-base py-3 border-b border-neutral-300 mb-4">
                                                                MATERIALS
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="flex flex-col gap-4">
                                                                    {materials.map((m, index) => (
                                                                        <div key={index} className="flex items-start justify-between w-full">
                                                                            <span
                                                                                onClick={() => fetchProducts(1, m.materials)}
                                                                                className={`text-sm cursor-pointer transition-all duration-150 ${
                                                                                    activeMaterial === m.materials
                                                                                    ? "font-semibold text-black-1 text-sm"  // aktif
                                                                                    : "font-medium text-black-3 hover:text-black-1" // non-aktif
                                                                                }`}>
                                                                            </span>
                                                                            <span
                                                                                className={`text-sm ${
                                                                                    activeMaterial === m.materials ? "font-semibold text-blue-600" : "text-black-3"
                                                                                }`}>
                                                                                ({Number(m.total || 0)
                                                                                    .toString()
                                                                                    .padStart(2, "0")})
                                                                            </span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>

                                                    <Accordion type="single" collapsible defaultValue="price" className="w-full">
                                                        <AccordionItem value="price">
                                                            <AccordionTrigger
                                                                className="font-bold text-black-1 text-base py-3 border-b border-neutral-300">
                                                                PRICE
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="w-full h-[108px] relative">
                                                                    <div className="w-full mt-6">
                                                                        <Slider
                                                                            value={priceRange}
                                                                            onValueChange={(newRange) => setPriceRange(newRange as[number,
                                                                            3000])}
                                                                            min={50}
                                                                            max={3000}
                                                                            step={50}
                                                                            className="w-full"/>
                                                                    </div>
                                                                    <div className="flex gap-4 mt-6">
                                                                        <Button
                                                                            variant="outline"
                                                                            className="h-10 bg-black-7 text-black-1 font-h3-16-medium">
                                                                            ${priceRange[0]}
                                                                            - ${priceRange[1]}
                                                                        </Button>
                                                                        <Button className="h-10 bg-black-1 text-bg-1 font-h3-16-medium">
                                                                            Apply
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </div>
                            </div>
                        </Dialog>

                        {/* Left sidebar - mode website */}
                        <div className="lg:block hidden w-[254px] flex-shrink-0">
                            {/* Category section */}
                            <div className="flex flex-col items-start gap-10">
                                <div className="flex flex-col items-start gap-3 w-full">
                                    <h2
                                        className="font-bold text-black-1 text-xl tracking-[var(--h2-32-extra-bold-letter-spacing)] leading-[var(--h2-32-extra-bold-line-height)]">
                                        CATEGORY
                                    </h2>
                                    <Separator className="w-[52px] h-1.5 bg-black-1"/>
                                </div>

                                <Accordion
                                    type="single"
                                    collapsible
                                    defaultValue="furniture"
                                    className="w-full">
                                    <AccordionItem value="furniture">
                                        <AccordionTrigger
                                            className="font-bold text-black-1 text-base py-3 border-b border-neutral-300 mb-4">
                                            FUNITURE
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col gap-4">
                                                {categories.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        onClick={() => handleCategoryClick(item.id)}
                                                        className={`text-sm cursor-pointer transition-all duration-150 ${
                                                                    activeCategory === item.id
                                                                    ? "font-semibold text-black-1 text-sm"  // aktif
                                                                    : "font-medium text-black-3 hover:text-black-1" // non-aktif
                                                                }`}>   
                                                        {item.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    {/* <AccordionItem value="shipping" className="border-b border-neutral-300">
                                        <AccordionTrigger className="font-h2-20-extra-bold text-black-1 py-3">
                                            SHIPPING
                                        </AccordionTrigger>
                                        <AccordionContent>
                                        </AccordionContent>
                                    </AccordionItem> */}

                                    {/* <AccordionItem value="all-product" className="border-b border-neutral-300">
                                        <AccordionTrigger className="font-h2-20-extra-bold text-black-1 py-3">
                                            ALL PRODUCT
                                        </AccordionTrigger>
                                        <AccordionContent>
                                        </AccordionContent>
                                    </AccordionItem> */}
                                </Accordion>

                                {/* Shop by section */}
                                <div className="flex flex-col items-start gap-10 w-full">
                                    <div className="flex flex-col items-start gap-3 w-full">
                                        <h2
                                            className="font-bold text-black-1 text-xl tracking-[var(--h2-24-extra-bold-letter-spacing)] leading-[var(--h2-24-extra-bold-line-height)]">
                                            SHOP BY
                                        </h2>
                                        <Separator className="w-[52px] h-1.5 bg-black-1"/>
                                    </div>

                                    <Accordion
                                        type="single"
                                        collapsible
                                        defaultValue="materials"
                                        className="w-full">
                                        <AccordionItem value="materials">
                                            <AccordionTrigger
                                                className="font-bold text-black-1 text-base py-3 border-b border-neutral-300 mb-4">
                                                MATERIALS
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="flex flex-col gap-4">
                                                    {materials.map((m, index) => (
                                                        <div key={index} className="flex items-start justify-between w-full">
                                                            <span
                                                                onClick={() => handleMaterialClick(m.materials)}
                                                                className={`text-sm cursor-pointer transition-all duration-150 ${
                                                                    activeMaterial === m.materials
                                                                    ? "font-semibold text-black-1 text-sm"  // aktif
                                                                    : "font-medium text-black-3 hover:text-black-1" // non-aktif
                                                                }`}>
                                                                {m.materials}
                                                            </span>
                                                            <span
                                                                className={`text-sm ${
                                                                    activeMaterial === m.materials ? "font-semibold text-black-1 text-sm" : "font-h3-16-medium text-black-3 text-sm"
                                                                }`}>
                                                                ({Number(m.total || 0)
                                                                    .toString()
                                                                    .padStart(2, "0")})
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>

                                        {/* <AccordionItem value="size" className="border-b border-neutral-300">
                                            <AccordionTrigger className="font-h2-20-extra-bold text-black-1 py-3">
                                                SIZE
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="flex flex-col gap-4">
                                                    {sizeItems.map((item, index) => (
                                                        <div key={index} className="flex items-start justify-between w-full">
                                                            <span
                                                                className={`${item.selected
                                                                ? "font-h3-16-bold text-black-1"
                                                                : "font-h3-16-medium text-black-3"}`}>
                                                                {item.name}
                                                            </span>
                                                            <span
                                                                className={`${item.selected
                                                                ? "font-h3-16-bold text-black-1"
                                                                : "font-h3-16-medium text-black-3"}`}>
                                                                ({item
                                                                    .count
                                                                    .toString()
                                                                    .padStart(2, "0")})
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem> */}

                                        {/* <AccordionItem value="compare" className="border-b border-neutral-300">
                                            <AccordionTrigger className="font-h2-20-extra-bold text-black-1 py-3">
                                                COMPARE
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <p className="font-h3-16-medium text-black-3">
                                                    Lorem ipsum dolor sit amet consectetur. Bibendum iaculis velit dolor id.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem> */}
                                    </Accordion>
                                    <Accordion type="single" collapsible defaultValue="price" className="w-full">
                                        <AccordionItem value="price">
                                            <AccordionTrigger
                                                className="font-bold text-black-1 text-base py-3 border-b border-neutral-300">
                                                PRICE
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="w-full h-[115px] relative">
                                                    <div className="w-full mt-6">
                                                        <Slider
                                                            value={priceRange}
                                                            onValueChange={(newRange) => setPriceRange(newRange as[number, 3000])}
                                                            min={0} max={50000000} step={50} className="w-full"/>
                                                    </div>
                                                    <div className="flex gap-4 mt-6">
                                                        <Button
                                                            variant="outline"
                                                            className="h-10 bg-black-7 text-black-1 font-h3-16-medium">
                                                            Rp. {formatRupiah(priceRange[0], false)} - Rp. {formatRupiah(priceRange[1], false)}
                                                        </Button>
                                                    </div>
                                                    <div className="flex mt-5 gap-3 w-full">
                                                        <Button className="flex-1 h-10 bg-black-1 text-bg-1 font-h3-16-medium hover:bg-black-2 transition-colors"
                                                        onClick={() => {
                                                        const [minPrice, maxPrice] = priceRange;
                                                            fetchProducts(1, activeCategory, activeMaterial, minPrice, maxPrice);
                                                        }}>
                                                            Apply
                                                        </Button>
                                                        <Button variant="outline" className="flex-1 h-10 bg-white text-black-1 border border-neutral-300 font-h3-16-medium hover:bg-neutral-100 transition-colors"
                                                        onClick={() => {
                                                            setPriceRange([0, 50000000]);
                                                            setActiveCategory(null);
                                                            setActiveMaterial(null); 
                                                            fetchProducts(1, null, null, 0, 0);
                                                        }}>
                                                            Reset
                                                        </Button>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>

                        {/* Main content area */}
                        <div className="flex-1 w-full">
                            {/* Header aligned with categories */}
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex flex-col gap-3">
                                    <h2
                                        className="font-bold text-black-1 text-xl tracking-[var(--h2-24-extra-bold-letter-spacing)] leading-[var(--h2-24-extra-bold-line-height)]">
                                        RESULT FOR " FURNITURE "
                                    </h2>
                                    <Separator className="w-[52px] h-1.5 bg-black-1"/>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8 lg:mb-2">
                                <div className="flex items-center gap-4">
                                    <Badge
                                        className="bg-[#ce0000] text-bg-1 font-h3-16-bold h-10 px-5 rounded-none">
                                        ON SALE
                                    </Badge>

                                    <Button
                                        variant="outline"
                                        className="bg-black-7 text-black-1 h-10 flex items-center gap-2 rounded-none">
                                        <span className="font-medium text-black-3">Short by:</span>
                                        <span className="font-h3-16-bold text-black-1">
                                            Default
                                        </span>
                                        <ChevronDownIcon className="h-5 w-5"/>
                                    </Button>
                                </div>

                                <div className="lg:hidden block flex items-center">
                                    <div className="flex items-center">
                                        {/* <Button variant="outline" className="bg-black-7 h-10 w-10 p-2.5 rounded-none">
                                            <MenuIcon className="h-5 w-5"/>
                                        </Button> */}
                                        <Button
                                            onClick={() => setOpen(true)}
                                            className="bg-black-1 h-10 w-10 p-2.5 rounded-none">
                                            <AdjustmentsVerticalIcon className="h-5 w-5"/>
                                        </Button>
                                    </div>
                                </div>
                                <span
                                    className="lg:block hidden font-h3-16-medium text-black-1 text-center whitespace-nowrap">
                                    SHOWING {pagination.totalData === 0 ? 0 : startItem}
                                    - {pagination.totalData === 0 ? 0 : endItem} {" "}
                                    OF {pagination.totalData} PRODUCTS
                                </span>
                            </div>
                            <span
                                className="lg:hidden block font-h3-16-medium text-black-1 text-left whitespace-nowrap">
                                  SHOWING {pagination.totalData === 0 ? 0 : startItem}
                                  - {pagination.totalData === 0 ? 0 : endItem} {" "}
                                  OF {pagination.totalData} PRODUCTS
                            </span>

                            {/* Product sections with improved spacing */}
                           
                            <div className="space-y-12">
                                {/* <FeaturedProductsSection /> */}
                                <ProductGridSection products={products}/>
                            </div>

                            {/* Call to action section - constrained to content width */}
                            <div className="mt-8 -mx-4">
                                <CallToActionSection/>
                            </div>

                            {/* Improved pagination layout */}
                            <div className="flex justify-self-end items-center pt-4 px-4">
                                <Pagination>
                                    <PaginationContent className="flex items-center gap-4">
                                        <PaginationItem>
                                            <PaginationLink
                                                onClick={() => handlePageChange(pagination.currentPage - 1)}
                                                className={`w-10 h-10 flex items-center justify-center bg-black-7 text-black-1 rounded-none border-0 ${pagination.currentPage === 1
                                                ? "bg-black-1 text-black-8 cursor-not-allowed"
                                                : "bg-black text-white hover:bg-gray-800"}`}>
                                                <ChevronLeftIcon className="h-5 w-5"/>
                                            </PaginationLink>
                                        </PaginationItem>

                                        {paginationItems.map((item, index) => (
                                            <PaginationItem key={index}>
                                                <PaginationLink
                                                    onClick={() => handlePageChange(item.page)}
                                                    className={`w-10 h-10 flex items-center justify-center rounded-none border-0 font-h3-16-medium ${item.active
                                                    ? "bg-black-1 text-black-8"
                                                    : "bg-black-7 text-black-1 hover:bg-black-5"}`}>
                                                    {item.page}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ))}

                                        <PaginationItem>
                                            <PaginationLink
                                                onClick={() => handlePageChange(pagination.currentPage + 1)}
                                                className={`w-10 h-10 flex items-center justify-center bg-black-7 text-black-1 rounded-none border-0 ${pagination.currentPage === pagination.totalPageCount
                                                ? "bg-black-1 text-black-8 cursor-not-allowed"
                                                : "bg-black text-white hover:bg-gray-800"}`}>
                                                <ChevronRightIcon className="h-5 w-5"/>
                                            </PaginationLink>
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>

                                {/* <span className="font-h3-16-medium text-black-1 text-center whitespace-nowrap">
                                    SHOWING 1 - 9 OF 30 PRODUCTS
                                </span> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 -mx-4">
                    <FooterSection/>
                </div>
            </div>
        </div>
    );
};
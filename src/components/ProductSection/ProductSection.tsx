import {ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, LayoutGridIcon, MenuIcon} from "lucide-react";
import {useState} from 'react'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "../../components/ui/accordion";
import {Badge} from "../../components/ui/badge";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "../../components/ui/breadcrumb";
import {Button} from "../../components/ui/button";
import {Pagination, PaginationContent, PaginationItem, PaginationLink} from "../../components/ui/pagination";
import {AdjustmentsVerticalIcon, ExclamationTriangleIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {Separator} from "../../components/ui/separator";
import {Slider} from "../../components/ui/slider";
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import {CallToActionSection} from "../../components/CallToActionSection";
import {FooterSection} from "../../components/FooterSection/FooterSection";
import {HeroSection} from "../../components/HeroSection";
import {NavigationSection} from "../../components/NavigationSection";
import {ProductGridSection} from "../../components/ProductGridSection";

export const ProductSection = () : JSX.Element => {
    // Category data
    const categoryItems = [
        {
            name: "Chair",
            selected: true
        }, {
            name: "Sofa",
            selected: false
        }, {
            name: "Couch",
            selected: false
        }, {
            name: "Desk",
            selected: false
        }, {
            name: "Lamp",
            selected: false
        }
    ];

    // Materials data
    const materialsItems = [
        {
            name: "Bronze",
            count: 8,
            selected: true
        }, {
            name: "Oak wood",
            count: 12,
            selected: false
        }, {
            name: "Stainless metal",
            count: 36,
            selected: false
        }, {
            name: "Titanium",
            count: 4,
            selected: false
        }, {
            name: "Alloy",
            count: 8,
            selected: false
        }, {
            name: "Ceramic",
            count: 17,
            selected: false
        }
    ];

    // Pagination data
    const paginationItems = [
        {
            page: "01",
            active: true
        }, {
            page: "02",
            active: false
        }, {
            page: "03",
            active: false
        }
    ];
    const [open,
        setOpen] = useState(false);
    const [priceRange,
        setPriceRange] = useState < [number, number] > ([0, 5000]);

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
                                                                {categoryItems.map((item, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className={`${item.selected
                                                                        ? "font-semibold text-black-1 text-sm"
                                                                        : "font-h3-16-medium text-black-3 text-sm"}`}>
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
                                                                    {materialsItems.map((item, index) => (
                                                                        <div key={index} className="flex items-start justify-between w-full">
                                                                            <span
                                                                                className={`${item.selected
                                                                                ? "font-semibold text-black-1 text-sm"
                                                                                : "font-h3-16-medium text-black-3"}`}>
                                                                                {item.name}
                                                                            </span>
                                                                            <span
                                                                                className={`${item.selected
                                                                                ? "font-semibold text-black-1 text-sm"
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
                                                                            min={0}
                                                                            max={3000}
                                                                            step={50}
                                                                            className="w-full"/>
                                                                    </div>
                                                                    <div className="flex gap-4 mt-6">
                                                                        <Button
                                                                            variant="outline"
                                                                            className="h-10 bg-black-7 text-black-1 font-h3-16-medium">
                                                                            ${priceRange[0]} - ${priceRange[1]}
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
                                                {categoryItems.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className={`${item.selected
                                                        ? "font-semibold text-black-1 text-sm"
                                                        : "font-h3-16-medium text-black-3 text-sm"}`}>
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
                                                    {materialsItems.map((item, index) => (
                                                        <div key={index} className="flex items-start justify-between w-full">
                                                            <span
                                                                className={`${item.selected
                                                                ? "font-semibold text-black-1 text-sm"
                                                                : "font-h3-16-medium text-black-3"}`}>
                                                                {item.name}
                                                            </span>
                                                            <span
                                                                className={`${item.selected
                                                                ? "font-semibold text-black-1 text-sm"
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
                                                <div className="w-full h-[108px] relative">
                                                    <div className="w-full mt-6">
                                                        <Slider defaultValue={[36]} max={100} step={1} className="w-full"/>
                                                    </div>
                                                    <div className="flex gap-4 mt-6">
                                                        <Button
                                                            variant="outline"
                                                            className="h-10 bg-black-7 text-black-1 font-h3-16-medium">
                                                            $0 - $2000
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
                                <span className="lg:block hidden font-h3-16-medium text-black-1 text-center whitespace-nowrap">
                                    SHOWING 1 - 9 OF 30 PRODUCTS
                                </span>
                            </div>
                            <span className="lg:hidden block font-h3-16-medium text-black-1 text-left whitespace-nowrap">
                                SHOWING 1 - 9 OF 30 PRODUCTS
                            </span>

                            {/* Product sections with improved spacing */}
                            <div className="space-y-12">
                                {/* <FeaturedProductsSection /> */}
                                <ProductGridSection/>
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
                                                className="w-10 h-10 flex items-center justify-center bg-black-7 text-black-1 rounded-none border-0">
                                                <ChevronLeftIcon className="h-5 w-5"/>
                                            </PaginationLink>
                                        </PaginationItem>
                                        {paginationItems.map((item, index) => (
                                            <PaginationItem key={index}>
                                                <PaginationLink
                                                    className={`w-10 h-10 flex items-center justify-center rounded-none border-0 font-h3-16-medium ${item.active
                                                    ? "bg-black-1 text-black-8"
                                                    : "bg-black-7 text-black-1 hover:bg-black-5"}`}>
                                                    {item.page}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ))}
                                        <PaginationItem>
                                            <PaginationLink
                                                className="w-10 h-10 flex items-center justify-center bg-black-1 text-black-8 rounded-none border-0">
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
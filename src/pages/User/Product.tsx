import {ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, LayoutGridIcon, MenuIcon} from "lucide-react";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "../../components/ui/accordion";
import {Badge} from "../../components/ui/badge";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "../../components/ui/breadcrumb";
import {Button} from "../../components/ui/button";
import {Pagination, PaginationContent, PaginationItem, PaginationLink} from "../../components/ui/pagination";
import {Separator} from "../../components/ui/separator";
import {Slider} from "../../components/ui/slider";

import {CallToActionSection} from "../../components/CallToActionSection";
import {FooterSection} from "../../components/FooterSection/FooterSection";
import {HeroSection} from "../../components/HeroSection";
import {NavigationSection} from "../../components/NavigationSection";
import {ProductGridSection} from "../../components/ProductGridSection";

const Product = () => {
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

    // Size data
    const sizeItems = [
        {
            name: "S",
            count: 8,
            selected: true
        }, {
            name: "M",
            count: 12,
            selected: false
        }, {
            name: "L",
            count: 36,
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

    return (
        <div className="bg-white flex flex-row justify-center w-full">
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
                <HeroSection/>

                <div className="container mx-auto px-4">
                    <div className="flex flex-row gap-16 mt-16">
                        {/* Left sidebar */}
                        <div className="w-[254px] flex-shrink-0">
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
                                        <AccordionTrigger className="font-bold text-black-1 text-base py-3 border-b border-neutral-300 mb-4">
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
                        <div className="flex-1">
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

                            <div className="flex justify-between items-center mb-8">
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

                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <Button variant="outline" className="bg-black-7 h-10 w-10 p-2.5 rounded-none">
                                            <MenuIcon className="h-5 w-5"/>
                                        </Button>
                                        <Button className="bg-black-1 h-10 w-10 p-2.5 rounded-none">
                                            <LayoutGridIcon className="h-5 w-5"/>
                                        </Button>
                                    </div>
                                    <span
                                        className="ml-8 font-h3-16-medium text-black-1 text-center whitespace-nowrap">
                                        SHOWING 1 - 9 OF 30 PRODUCTS
                                    </span>
                                </div>
                            </div>

                            {/* Product sections with improved spacing */}
                            <div className="space-y-12">
                                {/* <FeaturedProductsSection /> */}
                                <ProductGridSection/>
                            </div>

                            {/* Call to action section - constrained to content width */}
                            <div className="mt-16">
                                <CallToActionSection/>
                            </div>

                            {/* Improved pagination layout */}
                            <div className="flex justify-between items-center mt-16 pt-8">
                                <Pagination>
                                    <PaginationContent className="flex items-center gap-2">
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

                                <span className="font-h3-16-medium text-black-1 text-center whitespace-nowrap">
                                    SHOWING 1 - 9 OF 30 PRODUCTS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterSection/>
            </div>
        </div>
    );
};

export default Product;

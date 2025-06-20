import React from "react";
import {Button} from "../ui/button";
import {Card, CardContent} from "../ui/card";
import {Separator} from "../ui/separator";

// Shipping timeline data
const shippingSteps = [
    {
        title: "Order confirmed by Seller & Furnitur system",
        date: "16 Jul 2020 - 08:00 PM",
        active: false
    }, {
        title: "Package received on DHL New York city",
        date: "16 Jul 2020 - 08:00 PM",
        active: false
    }, {
        title: "Package send from DHL New York city",
        date: "16 Jul 2020 - 08:00 PM",
        active: false
    }, {
        title: "Package arrive on DHL Washington DC",
        date: "16 Jul 2020 - 08:00 PM",
        active: false
    }, {
        title: "Package will send to your home by our courier (James)",
        date: "16 Jul 2020 - 08:00 PM",
        active: true
    }
];

// Order items data
const orderItems = [
    {
        image: "/img.svg",
        title: "MORDERN BLACK STANDING METAL LIGHT",
        quantity: "1 item",
        price: "$235.41"
    }, {
        image: "/img-2.svg",
        title: "MORDERN BLACK STANDING METAL LIGHT",
        quantity: "3 items",
        price: "$35.73"
    }, {
        image: "/img-1.svg",
        title: "MORDERN BLACK STANDING METAL LIGHT",
        quantity: "1 item",
        price: "$352.41"
    }
];

// Order summary data
const orderSummary = [
    {
        label: "Subtotal",
        value: "$1,725.00",
        highlight: false
    }, {
        label: "Shipping",
        value: "-",
        highlight: false
    }, {
        label: "Price",
        value: "$1,725.00",
        highlight: false
    }, {
        label: "Discount 10%",
        value: "-$125.00",
        highlight: false
    }, {
        label: "Total Price",
        value: "$1,600.00",
        highlight: true
    }
];

export const TrackingOrderSection = () : JSX.Element => {
    return (
        <section className="flex flex-wrap gap-20 py-20 px-6 md:px-12 lg:px-[264px]">
            {/* Left Column - Shipping Information */}
            <div className="flex flex-col gap-[72px] flex-1 min-w-[300px]">
                {/* Shipping Header */}
                <div className="flex flex-col gap-9">
                    <h1
                        className="font-h1-32-extra-bold text-black-1 text-[32px] leading-[40px] font-extrabold">
                        SHIPPING IN
                    </h1>
                    <p className="font-h3-16-medium text-black-3 text-[16px] leading-[20px]">
                        Will sent to 2972 Westheimer Rd. Santa Ana, Illinois 85486.
                    </p>
                </div>

                {/* Shipping Timeline */}
                <Card className="bg-white border-none shadow-none">
                    <CardContent className="p-0 relative">
                        {/* Timeline line */}
                        <div className="absolute w-0.5 h-[425px] top-3 left-[7px] bg-black-5"/> {/* Timeline steps */}
                        {shippingSteps.map((step, index) => (
                            <div key={index} className="relative mb-12 last:mb-0">
                                <div className="flex items-start">
                                    {/* Timeline dot */}
                                    <div
                                        className={`w-4 h-4 mt-1.5 rounded-lg ${step.active
                                        ? "bg-black-1"
                                        : "bg-black-5"}`}/> {/* Step content */}
                                    <div className="ml-12 flex flex-col gap-3">
                                        <h3
                                            className="font-h2-20-extra-bold text-black-1 text-[20px] leading-[28px] font-extrabold">
                                            {step.title}
                                        </h3>
                                        <p className="font-h4-14-medium text-black-3 text-[14px] leading-[20px]">
                                            {step.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Separator className="w-full"/> {/* Support Section */}
                <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-3">
                        <h2
                            className="font-h2-20-bold text-black-1 text-[20px] leading-[28px] font-bold">
                            Have been trouble on your package?
                        </h2>
                        <p className="font-h4-14-medium text-black-3 text-[14px] leading-[20px]">
                            You can call us. We can help solve your problem
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="w-fit border border-black-1 rounded-none px-3 py-3 h-auto">
                        <span className="font-h3-16-medium text-black-1">Support me</span>
                    </Button>
                </div>
            </div>

            {/* Vertical Separator */}
            <Separator orientation="vertical" className="h-auto hidden md:block"/> {/* Right Column - Order Information */}
            <div className="flex flex-col gap-[72px] w-full md:w-[424px]">
                {/* Order Header */}
                <div className="flex flex-col gap-9">
                    <h1
                        className="font-h1-32-extra-bold text-black-1 text-[32px] leading-[40px] font-extrabold">
                        YOUR ORDER
                    </h1>
                    <p className="font-h3-16-medium text-black-3 text-[16px] leading-[20px]">
                        Review all the products you want to buy
                    </p>
                </div>

                {/* Order Items */}
                <div className="flex flex-col gap-6">
                    {orderItems.map((product) => (
                        <div className="flex w-full max-w-[368px] items-center py-3">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
                                <img
                                    className="w-[104px] h-[135px] object-cover"
                                    alt={product.image}
                                    src={product.image}/>
                                <div className="items-center w-full grid grid-flow-col grid-rows-3">
                                    <p
                                        className="font-h3-16-semibold font-[number:var(--h3-16-semibold-font-weight)] text-black-1 text-[length:var(--h3-16-semibold-font-size)] tracking-[var(--h3-16-semibold-letter-spacing)] leading-[var(--h3-16-semibold-line-height)] [font-style:var(--h3-16-semibold-font-style)]">
                                        {product.title}
                                    </p>
                                    <span
                                        className="gap-y-8 font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                        {product.quantity}
                                    </span>
                                    <span
                                        className="font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-black-1 text-[length:var(--h3-16-bold-font-size)] tracking-[var(--h3-16-bold-letter-spacing)] leading-[var(--h3-16-bold-line-height)] [font-style:var(--h3-16-bold-font-style)]">
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Separator className="w-full"/> {/* Order Summary */}
                <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-6">
                        {orderSummary.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <span className="font-h3-16-medium text-black-3">
                                    {item.label}
                                </span>
                                <span
                                    className={`font-h2-20-extra-bold text-right whitespace-nowrap ${item.highlight
                                    ? "text-[#ce0000]"
                                    : "text-black-1"}`}>
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
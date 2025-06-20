import {PencilIcon} from "lucide-react";
import React from "react";
import {Button} from "../ui/button";
import {CardReviews, CardContent} from "../ui/card";
import {Separator} from "../ui/separator";
import { Navigate, useNavigate } from "react-router-dom";

// Data for order items
const orderItems = [
    {
        id: 1,
        name: "MORDERN BLACK STANDING METAL LIGHT",
        quantity: 1,
        price: "$235.41",
        image: "/img-1.svg"
    }, {
        id: 2,
        name: "MORDERN BLACK STANDING METAL LIGHT",
        quantity: 3,
        price: "$35.73",
        image: "/img.svg"
    }, {
        id: 3,
        name: "MORDERN BLACK STANDING METAL LIGHT",
        quantity: 1,
        price: "$352.41",
        image: "/img-2.svg"
    }
];

// Data for order summary
const orderSummary = [
    {
        label: "Subtotal",
        value: "$1,725.00"
    }, {
        label: "Shipping",
        value: "-"
    }, {
        label: "Price",
        value: "$1,725.00"
    }, {
        label: "Discount 10%",
        value: "-$125.00"
    }, {
        label: "Total Price",
        value: "$1,600.00",
        highlight: true
    }
];

export const CartReviewSection = () : JSX.Element => {
    const navigate =  useNavigate();

    const handleClick = () => {
      navigate("/tracking-orders");
    }

    return (
        <section className="flex items-start gap-20 px-6 py-20 md:px-16 lg:px-[264px]">
            {/* Left column - Shipping and Payment */}
            <div className="flex flex-col items-start gap-[72px] flex-1">
                {/* Shipping Information */}
                <div className="flex flex-col items-start gap-9 w-full">
                    <h2
                        className="w-full font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                        SHIPPING INFORMATION
                    </h2>
                    <p
                        className="w-full font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                        Please check berofe you finalize your order
                    </p>
                </div>

                {/* Shipping Details Card */}
                <CardReviews className="w-full bg-black-1 text-black-8">
                    <CardContent className="flex flex-col items-start justify-center gap-5 p-5">
                        {/* Customer Information */}
                        <div className="flex flex-col items-start gap-3 w-full relative">
                            <h3
                                className="w-full font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-8 text-[length:var(--h2-20-extra-bold-font-size)] tracking-[var(--h2-20-extra-bold-letter-spacing)] leading-[var(--h2-20-extra-bold-line-height)] [font-style:var(--h2-20-extra-bold-font-style)]">
                                Jane Cooper
                            </h3>
                            <p
                                className="w-full font-h4-14-medium font-[number:var(--h4-14-medium-font-weight)] text-black-7 text-[length:var(--h4-14-medium-font-size)] tracking-[var(--h4-14-medium-letter-spacing)] leading-[var(--h4-14-medium-line-height)] [font-style:var(--h4-14-medium-font-style)]">
                                (480) 555-0103
                            </p>
                            <p
                                className="w-full font-h4-14-medium font-[number:var(--h4-14-medium-font-weight)] text-black-7 text-[length:var(--h4-14-medium-font-size)] tracking-[var(--h4-14-medium-letter-spacing)] leading-[var(--h4-14-medium-line-height)] [font-style:var(--h4-14-medium-font-style)]">
                                2972 Westheimer Rd. Santa Ana, Illinois 85486
                            </p>
                            <Button variant="ghost" size="icon" className="absolute top-0 right-0">
                                <PencilIcon className="h-6 w-6"/>
                            </Button>
                        </div>

                        <Separator className="w-full"/> {/* Shipping Method */}
                        <div className="flex flex-col w-full items-start gap-3 relative">
                            <h3
                                className="w-full font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-8 text-[length:var(--h2-20-extra-bold-font-size)] tracking-[var(--h2-20-extra-bold-letter-spacing)] leading-[var(--h2-20-extra-bold-line-height)] [font-style:var(--h2-20-extra-bold-font-style)]">
                                FedEx
                            </h3>
                            <p
                                className="w-full font-h4-14-medium font-[number:var(--h4-14-medium-font-weight)] text-black-7 text-[length:var(--h4-14-medium-font-size)] tracking-[var(--h4-14-medium-letter-spacing)] leading-[var(--h4-14-medium-line-height)] [font-style:var(--h4-14-medium-font-style)]">
                                Estimated delivery time: Jul 20 - Aug 03
                            </p>
                            <div
                                className="absolute right-0 bottom-0 font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-black-8 text-[length:var(--h3-16-bold-font-size)] leading-[var(--h3-16-bold-line-height)] whitespace-nowrap tracking-[var(--h3-16-bold-letter-spacing)] [font-style:var(--h3-16-bold-font-style)]">
                                Free shipping
                            </div>
                        </div>
                    </CardContent>
                </CardReviews>

                <Separator className="w-full"/> {/* Payment Method */}
                <div className="flex flex-col items-start gap-9 w-full">
                    <h2
                        className="w-full font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                        PAYMENT METHOD
                    </h2>
                    <p
                        className="w-full font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                        Please check berofe you finalize your order
                    </p>
                </div>

                {/* Payment Card */}
                <CardReviews className="w-full max-w-[808px] bg-black-7">
                    <CardContent className="flex items-center p-5 relative">
                        <div className="relative w-[132px] h-[60px]">
                            <img
                                className="absolute w-[63px] h-[39px] top-2.5 left-[35px]"
                                alt="Mastercard"
                                src="/mastercard.png"/>
                        </div>
                        <div className="flex flex-col items-start gap-3 flex-1">
                            <h3
                                className="w-full font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] leading-[var(--h2-20-extra-bold-line-height)] tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]">
                                Credit Card
                            </h3>
                            <p
                                className="w-full font-h4-14-medium font-[number:var(--h4-14-medium-font-weight)] text-black-3 text-[length:var(--h4-14-medium-font-size)] tracking-[var(--h4-14-medium-letter-spacing)] leading-[var(--h4-14-medium-line-height)] [font-style:var(--h4-14-medium-font-style)]">
                                {" "}
                                **** 7282 - Expired 8/2022
                            </p>
                        </div>
                        <Button variant="ghost" size="icon" className="absolute top-5 right-5">
                            <PencilIcon className="h-6 w-6"/>
                        </Button>
                    </CardContent>
                </CardReviews>
            </div>

            <Separator orientation="vertical" className="h-auto"/> {/* Right column - Order Summary */}
            <div className="flex flex-col gap-[72px] w-full md:w-[424px]">
                {/* Order Header */}
                <div className="flex flex-col items-start gap-9 w-full">
                    <h2
                        className="w-full font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                        YOUR ORDER
                    </h2>
                    <p
                        className="w-full font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
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
                                        {product.name}
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

                {/* Confirm Order Button */}
                <Button onClick={handleClick}
                    className="w-full bg-black-1 text-bg-1 font-h3-16-medium rounded-none py-3">
                    CONFIRM MY ORDER
                </Button>
            </div>
        </section>
    );
};

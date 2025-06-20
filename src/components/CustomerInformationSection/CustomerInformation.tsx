import {useNavigate} from "react-router-dom";
import React from "react";
import {Button} from "../ui/button";
import {Input} from "../ui/input";
import {Separator} from "../ui/separator";
import {Textarea} from "../ui/textarea";

export const CustomerInformationSection = () : JSX.Element => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/shipping-payment"); // ← arahkan ke halaman /product };
        // ← arahkan ke halaman /product
    };

    const products = [
        {
            id: 1,
            image: "/img-8.svg",
            title: "MORDERN BLACK HANGING LIGHT",
            items: "1 Items",
            price: "$2352.41"
        }, {
            id: 2,
            image: "/img-5.svg",
            title: "MORDERN BLACK HANGING LIGHT",
            items: "2 Items",
            price: "$2352.41"
        }, {
            id: 3,
            image: "/img-7.svg",
            title: "MORDERN BLACK HANGING LIGHT",
            items: "3 Items",
            price: "$2352.41"
        }
    ];

    // Order summary data
    const orderSummary = {
        price: "$1,725.00",
        discount: "-$125.00",
        totalPrice: "$1,600.00"
    };

    return (
        <section className="flex flex-wrap gap-20 py-20 md:px-12 lg:px-24 w-full">
            {/* Customer Information */}
            <div className="flex flex-col items-start gap-9 flex-1">
                <div className="flex flex-col items-start gap-9 w-full">
                    <h1
                        className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                        YOUR INFORMATION
                    </h1>
                    <p
                        className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                        Add your name, phone number and address.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div
                        className="flex items-center gap-3 px-0 py-3 border-b border-neutral-300 w-full">
                        <Input
                            className="border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 mt-[70px]"
                            placeholder="Your Name"/>
                    </div>
                    <div
                        className="flex items-center gap-3 px-0 py-3 border-b border-neutral-300 w-full">
                        <Input
                            className="border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 mt-[70px]"
                            placeholder="Your Last Name"/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div
                        className="flex items-center gap-3 px-0 py-3 border-b border-neutral-300 w-full">
                        <Input
                            className="border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 mt-[70px]"
                            placeholder="Your Email"/>
                    </div>
                    <div
                        className="flex items-center gap-3 px-0 py-3 border-b border-neutral-300 w-full">
                        <Input
                            className="border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 mt-[70px]"
                            placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div
                        className="flex items-center gap-3 px-0 py-3 border-b border-neutral-300 w-full">
                        <Input
                            className="border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 mt-[70px]"
                            placeholder="Country"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div
                            className="flex items-center gap-3 px-0 py-3 border-b border-neutral-300 w-full">
                            <Input
                                className="border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 mt-[70px]"
                                placeholder="City"/>
                        </div>
                        <div className="flex items-center gap-3 px-0 py-3 border-b border-neutral-300">
                            <Input
                                className="border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 mt-[70px]"
                                placeholder="ZIP Code"/>
                        </div>
                    </div>
                </div>
                <div className="items-center gap-4 w-full">
                    <div
                        className="flex items-center gap-3 px-0 py-3 border-b border-neutral-300 w-full">
                        <Input
                            className="border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 mt-[70px]"
                            placeholder="Address Details"/>
                    </div>
                </div>
            </div>

            <Separator orientation="vertical" className="h-auto"/> {/* Order Summary */}
            <div className="flex flex-col items-start gap-[72px]">
                <div className="flex flex-col items-start gap-9 w-full">
                    <h1
                        className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                        YOUR ORDER
                    </h1>
                    <p
                        className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                        Review all the products you want to buy
                    </p>
                </div>

                <div className="flex flex-col items-start gap-9 w-full">
                    {products.map((product, _) => (
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
                                        {product.items}
                                    </span>
                                    <span
                                        className="font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-black-1 text-[length:var(--h3-16-bold-font-size)] tracking-[var(--h3-16-bold-letter-spacing)] leading-[var(--h3-16-bold-line-height)] [font-style:var(--h3-16-bold-font-style)]">
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Separator className="w-full"/>

                    <div className="flex flex-col items-start gap-6 w-full">
                        <div className="flex items-center justify-between w-full">
                            <span
                                className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                Price
                            </span>
                            <span
                                className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] text-right leading-[var(--h2-20-extra-bold-line-height)] tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]">
                                {orderSummary.price}
                            </span>
                        </div>

                        <div className="flex items-center justify-between w-full">
                            <span
                                className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                Discount 10%
                            </span>
                            <span
                                className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] text-right leading-[var(--h2-20-extra-bold-line-height)] tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]">
                                {orderSummary.discount}
                            </span>
                        </div>

                        <div className="flex items-center justify-between w-full">
                            <span
                                className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                Total Price
                            </span>
                            <span
                                className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-[#ce0000] text-[length:var(--h2-20-extra-bold-font-size)] text-right leading-[var(--h2-20-extra-bold-line-height)] tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]">
                                {orderSummary.totalPrice}
                            </span>
                        </div>
                    </div>

                    <div
                        className="flex w-full max-w-[368px] items-center pt-3 pb-20 border-b border-neutral-300">
                        <Textarea
                            className="border-none resize-none px-0 font-h3-16-medium text-black-3"
                            placeholder="Write your notes here..."/>
                    </div>
                </div>
                <Button
                    onClick={handleClick}
                    className="w-full bg-black-1 text-bg-1 rounded-none hover:bg-black-1/90">
                    <span
                        className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-bg-1 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                        PROCEED TO CHECKOUT
                    </span>
                </Button>
            </div>
        </section>
    );
};

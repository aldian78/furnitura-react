import React from "react";
import {Button} from "../../components/ui/button";
import {CardPayment, CardContentPayment} from "../../components/ui/card";
import {Input} from "../../components/ui/input";
import {RadioGroup, RadioGroupItem} from "../../components/ui/radio-group";
import {Separator} from "../../components/ui/separator";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";


export const ShippingPaymentSection = () : JSX.Element => {
    const navigate = useNavigate();
      
        const handleClick = () => {
          navigate("/review"); // ← arahkan ke halaman /product
        };

    // Shipping options data
    const [selectedOptionId,
        setSelectedOptionId] = useState("dhl");
    const shippingOptions = [
        {
            id: "dhl",
            name: "DHL Express",
            estimatedDelivery: "Jul 20 - Aug 03",
            price: "Free shipping",
            selected: true
        }, {
            id: "fedex",
            name: "FedEx",
            estimatedDelivery: "Jul 20 - Aug 03",
            price: "$25.00",
            selected: false
        }, {
            id: "express-expedition",
            name: "Express Expedition",
            estimatedDelivery: "Jul 20 - Aug 03",
            price: "$35.00",
            selected: false
        }, {
            id: "jne",
            name: "JNE Express",
            estimatedDelivery: "Jul 20 - Aug 03",
            price: "$35.00",
            selected: false
        }, {
            id: "pos",
            name: "POS Indonesia",
            estimatedDelivery: "Jul 20 - Aug 03",
            price: "$35.00",
            selected: false
        }
    ];

    // Payment methods data
    const paymentMethods = [
        {
            id: "credit-card",
            name: "Credit Card",
            description: "You can use all credit card service. We can accept Visa and Master Card.",
            selected: true,
            icons: [
                {
                    src: "/mastercard.png",
                    alt: "Mastercard",
                    className: "w-[21px] h-[13px]"
                }, {
                    component: (
                        <div
                            className="relative w-[33px] h-[11px] bg-[url(/shape-1.svg)] bg-[100%_100%]">
                            <img className="absolute w-1.5 h-1.5 top-0 left-0" alt="Path" src="/path.svg"/>
                        </div>
                    )
                }
            ]
        }, {
            id: "paypal",
            name: "Paypal",
            description: "Insert your account email of paypal. We will process your payment.",
            selected: false,
            icons: [
                {
                    src: "/paypal-icon.png",
                    alt: "Paypal icon",
                    className: "w-[11px] h-[13px]"
                }
            ]
        }
    ];

    // Order items data
    const orderItems = [
        {
            id: 1,
            name: "MORDERN BLACK STANDING METAL LIGHT",
            quantity: "1 item",
            price: "$235.41",
            image: "/img-1.svg"
        }, {
            id: 2,
            name: "MORDERN BLACK STANDING METAL LIGHT",
            quantity: "3 items",
            price: "$35.73",
            image: "/img-2.svg"
        }, {
            id: 3,
            name: "MORDERN BLACK STANDING METAL LIGHT",
            quantity: "1 item",
            price: "$352.41",
            image: "/img-3.svg"
        }
    ];

    // Order summary data
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


    return (
        <section
            className="flex flex-col md:flex-row gap-10 lg:gap-20 px-4 md:px-8 lg:px-16 xl:px-[264px] py-10 lg:py-[82px]">
            {/* Left Column - Shipping & Payment */}
            <div className="flex flex-col gap-[72px] flex-1">
                {/* Shipping Service Section */}
                <div className="flex flex-col gap-9">
                    <h1
                        className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                        SHIPPING SERVICE
                    </h1>
                    <p
                        className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                        oose one best shipping service across your needs.
                    </p>
                </div>

                {/* Shipping Options */}
                <RadioGroup
                    defaultValue="dhl"
                    onValueChange={setSelectedOptionId}
                    className="flex flex-col gap-5">
                    {shippingOptions.map((option) => {
                        const isSelected = selectedOptionId === option.id;
                        return (
                            <div
                                key={option.id}
                                className={`flex items-center gap-9 p-5 rounded-sm transition-all ${isSelected
                                ? "bg-black-1"
                                : ""}`}>
                                <RadioGroupItem
                                    value={option.id}
                                    id={option.id}
                                    className={`w-5 h-5 rounded-full border-2 transition-colors ${isSelected
                                    ? "border-white"
                                    : "border-[#2f302c]"}`}/>
                                <div className="flex flex-col gap-3 flex-1">
                                    <h3
                                        className={`font-h2-20-extra-bold transition-colors ${isSelected
                                        ? "text-black-8"
                                        : "text-black-1"}`}>
                                        {option.name}
                                    </h3>
                                    <p
                                        className={`font-h4-14-medium transition-colors ${isSelected
                                        ? "text-black-7"
                                        : "text-black-3"}`}>
                                        Estimated delivery time: {option.estimatedDelivery}
                                    </p>
                                </div>
                                <span
                                    className={`font-h3-16-bold whitespace-nowrap transition-colors ${isSelected
                                    ? "text-black-8"
                                    : "text-black-1"}`}>
                                    {option.price}
                                </span>
                            </div>
                        );
                    })}
                </RadioGroup>

                <Separator className="w-full"/> {/* Payment Method Section */}
                <div className="flex flex-col gap-9">
                    <h2 className="font-h1-32-extra-bold text-black-1">PAYMENT METHOD</h2>
                    <p className="font-h3-16-medium text-black-3">
                        Choose what service you want for your transaction
                    </p>
                </div>

                {/* Payment Options */}
                <RadioGroup
                    defaultValue="credit-card"
                    className="flex flex-col md:flex-row gap-9">
                    {paymentMethods.map((method) => (
                        <CardPayment
                            key={method.id}
                            className={`flex-1 border-none ${method.selected
                            ? "bg-black-1"
                            : ""}`}>
                            <CardContentPayment className="flex items-center gap-9 p-5">
                                <RadioGroupItem
                                    value={method.id}
                                    id={method.id}
                                    className={`w-5 h-5 ${method.selected
                                    ? "border-white"
                                    : "border-[#bg-white]"}`}/>
                                <div className="flex flex-col gap-3 flex-1">
                                    <h3
                                        className={`font-h2-20-extra-bold ${method.selected
                                        ? "text-black-8"
                                        : "text-black-1"}`}>
                                        {method.name}
                                    </h3>
                                    <p
                                        className={`font-h4-14-medium ${method.selected
                                        ? "text-black-7"
                                        : "text-black-3"}`}>
                                        {method.description}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    {method
                                        .icons
                                        .map((icon, index) => icon.src
                                            ? (<img key={index} src={icon.src} alt={icon.alt} className={icon.className}/>)
                                            : (
                                                <React.Fragment key={index}>
                                                    {icon.component}
                                                </React.Fragment>
                                            ),)}
                                </div>
                            </CardContentPayment>
                        </CardPayment>
                    ))}
                </RadioGroup>

                {/* Payment Information */}
                <div className="flex flex-col gap-9">
                    <h3 className="font-h2-20-bold text-black-1">
                        Provide your information
                    </h3>

                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex-1 border-b border-[#2f302c] py-3">
                            <Input
                                className="border-none px-0 font-h3-16-medium text-black-1"
                                defaultValue="Jennie"
                                placeholder="Name"/>
                        </div>
                        <div className="flex-1 border-b border-neutral-300 py-3">
                            <Input
                                className="border-none px-0 font-h3-16-medium text-black-3"
                                placeholder="Card number"/>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex-1 border-b border-neutral-300 py-3">
                            <Input
                                className="border-none px-0 font-h3-16-medium text-black-3"
                                placeholder="Month"/>
                        </div>
                        <div className="flex-1 border-b border-neutral-300 py-3">
                            <Input
                                className="border-none px-0 font-h3-16-medium text-black-3"
                                placeholder="Year"/>
                        </div>
                        <div className="flex-1 border-b border-neutral-300 py-3">
                            <Input
                                className="border-none px-0 font-h3-16-medium text-black-3"
                                placeholder="CVV"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vertical Separator */}
            <Separator orientation="vertical" className="hidden md:block h-auto"/> {/* Right Column - Order Summary */}
            <div className="flex flex-col gap-[72px] w-full md:w-[424px]">
                {/* Order Header */}
                <div className="flex flex-col gap-9">
                    <h1
                        className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                        YOUR ORDER
                    </h1>
                    <p
                        className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
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

                {/* Review Order Button */}
                <Button onClick={handleClick}
                    className="w-full bg-black-1 text-bg-1 font-h3-16-medium rounded-none py-3">
                    REVIEW YOUR ORDER
                </Button>
            </div>
        </section>
    );
};

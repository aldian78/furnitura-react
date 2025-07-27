import {MinusIcon, PlusIcon, StarIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";
import React from "react";
import {Button} from "../ui/button";
import {Card, CardContent} from "../ui/card";
import {Input} from "../ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/select";
import {Separator} from "../ui/separator";
import {Textarea} from "../ui/textarea";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";

export const ShoppingCartSection = () : JSX.Element => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/customer-information"); // ← arahkan ke halaman /product
    };

    // Cart items data
    const cartItems = [
        {
            id: 1,
            image: "/img-4.svg",
            name: "MORDERN BLACK STANDING METAL LIGHT",
            type: "Long",
            quantity: 1,
            price: "$235.41",
            colors: [
                {
                    color: "#7bb5ea",
                    selected: false
                }, {
                    color: "#3b5d5c",
                    selected: true
                }, {
                    color: "#8b8b8b",
                    selected: false
                }, {
                    color: "#5d3b53",
                    selected: false
                }, {
                    color: "#f5f518ff",
                    selected: false
                },
                {
                    color: "#f518e3ff",
                    selected: false
                },{
                    color: "#18e6f5ff",
                    selected: false
                },{
                    color: "#f51835ff",
                    selected: false
                },{
                    color: "#f59518ff",
                    selected: false
                },{
                    color: "#db18f5ff",
                    selected: false
                }
            ]
        }, {
            id: 2,
            image: "/img-1.svg",
            name: "MORDERN BLACK HANGING LIGHT",
            type: "Long",
            quantity: 3,
            price: "$35.73",
            colors: [
                {
                    color: "#acacac",
                    selected: false
                }, {
                    color: "#e0e0e0",
                    selected: false
                }, {
                    color: "#252628",
                    selected: true
                }, {
                    color: "white",
                    selected: false,
                    border: true
                }, {
                    color: "#f5f518ff",
                    selected: false
                }
            ]
        }, {
            id: 3,
            image: "/img-3.svg",
            name: "MORDERN BLACK HANGING LIGHT",
            type: "Circle",
            quantity: 1,
            price: "$352.41",
            colors: [
                {
                    color: "#131313",
                    selected: true
                }, {
                    color: "#3b5d5c",
                    selected: false
                }, {
                    color: "white",
                    selected: false,
                    border: true
                }, {
                    color: "#f5f518ff",
                    selected: false
                }, {
                    color: "#18f535ff",
                    selected: false
                }
            ]
        }
    ];

    // Order summary data
    const orderSummary = {
        price: "$1,725.00",
        discount: "-$125.00",
        totalPrice: "$1,600.00"
    };

    return (
        <section className="flex flex-col gap-20 px-4 md:px-12 lg:px-24 w-full lg:flex-row lg:flex-wrap lg:mb-[80px]">
            {/* Cart Items */}
            <div className="flex flex-col items-start gap-9 flex-1">
                {cartItems.map((item) => (
                    <Card key={item.id} className="w-full border-none shadow-none h-[300px] md:my-8">
                        <CardContent className="flex items-end gap-9 p-0">
                            <div className="flex items-start gap-4 md:gap-12 lg:flex-1">
                                <img className="w-[99px] h-[99px] md:w-full md:h-[350px] lg:w-full lg:h-[350px]" alt={item.name} src={item.image}/>

                                <div className="flex flex-col gap-[18px] lg:gap-[33px] flex-1">
                                    <h2
                                        className="font-h2-20-bold font-[number:var(--h2-20-bold-font-weight)] text-black-1 md:text-lg text-[length:var(--h2-20-bold-font-size)] tracking-[var(--h2-20-bold-letter-spacing)] leading-[var(--h2-20-bold-line-height)] [font-style:var(--h2-20-bold-font-style)]">
                                        {item.name}
                                    </h2>

                                    {/* <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                      <StarIcon
                                        key={i}
                                        className="w-4 h-4 fill-current text-black-1"
                                      />
                                    ))}
                                  </div> */}

                                    <div className="flex flex-rows">
                                        <p className="text-base mr-4">Type:</p>
                                        <div className="flex-2 w-[120px]">
                                            <Select defaultValue={item.type} onValueChange={(val) => console.log(val)}>
                                                <SelectTrigger className="mt-[-5px] h-10 bg-black-7 border-none">
                                                    <SelectValue/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem key={item.type} value={item.type}>
                                                        <div className="flex flex-col">
                                                            <span className="font-h3-16-bold text-[#2f302c]">{item.type}</span>
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <Tabs
                                        defaultValue={item.colors[0]
                                        ?.color}
                                        className="w-[220px] md:w-[342px] h-full">
                                        <div className="overflow-x-auto scrollbar-hide">
                                            <TabsList className="flex w-max gap-2 px-2">
                                                {item
                                                    .colors
                                                    .map((colorItem) => (<TabsTrigger
                                                        key={colorItem.color}
                                                        value={colorItem.color}
                                                        className="my-2 shrink-0 w-10 h-10 rounded-full border border-gray-300 data-[state=active]:ring-2 data-[state=active]:ring-black-5"
                                                        style={{
                                                        backgroundColor: colorItem.color
                                                    }}/>))}
                                            </TabsList>
                                        </div>
                                    </Tabs>

                                    <div
                                        className="flex w-[120px] h-10 items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-2.5 bg-black-7 ">
                                        <PlusIcon className="w-5 h-5"/>
                                        <div className="font-normal text-black-1 text-base text-center">
                                            <span className="font-medium text-[#7e7f7c]">Qty:</span>
                                            <span className="font-medium text-[#2f302c]">&nbsp;</span>
                                            <span
                                                className="font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-[#2f302c] leading-[var(--h3-16-bold-line-height)] [font-style:var(--h3-16-bold-font-style)] tracking-[var(--h3-16-bold-letter-spacing)] text-[length:var(--h3-16-bold-font-size)]">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <MinusIcon className="w-5 h-5"/>
                                    </div>

                                    <div
                                        className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] text-left leading-[var(--h2-20-extra-bold-line-height)] whitespace-nowrap tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]">
                                        {item.price}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Order Summary */}
            <Separator orientation="vertical" className="h-auto hidden lg:block"/> 

            <div className="flex flex-col items-start gap-[50px] mt-[-30px] md:mt-[50px] lg:mt-[25px]">
                <div className="flex flex-col items-start gap-9 w-full">
                    <h1
                        className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                        ORDER SUMMARY
                    </h1>
                    <p
                        className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                        Apply your monthly voucher to get more discount!
                    </p>
                </div>

                <div className="flex w-full items-center py-3 border-b border-neutral-300">
                    <Input
                        className="focus-visible:ring-0 focus-visible:ring-transparent ring-0 ring-transparent focus:ring-0 focus:outline-none border-none"
                        placeholder="Your voucher code"/>
                </div>

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

                <div className="flex w-full items-center pt-3 pb-8 border-b border-neutral-300">
                    <Textarea
                        className="focus-visible:ring-0 focus-visible:ring-transparent ring-0 ring-transparent focus:ring-0 focus:outline-none border-none"
                        placeholder="Write your notes here..."/>

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

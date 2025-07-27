import React from "react";
import {Input} from "../ui/input";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "../../components/ui/accordion";
import {Button} from "../ui/button";
import {Separator} from "../ui/separator";
import {StarIcon} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";

export const ProductReviewsSection = () : JSX.Element => {
    const categoryItems = [
        {
            name: "5 Stars",
            selected: true
        }, {
            name: "4 Stars",
            selected: false
        }, {
            name: "3 Stars",
            selected: false
        }, {
            name: "2 Stars",
            selected: false
        }, {
            name: "1 Stars",
            selected: false
        }
    ];

    const reviews = [
        {
            id: 1,
            image: "/img-5.png",
            text: "I was blown away by the quality and style of the mid-century modern armchair! Th" +
                    "e clean lines and sleek design are simply stunning, and the leather upholstery i" +
                    "s incredibly soft and comfortable. The chair is also very versatile, as it can b" +
                    "e easily incorporated into any room in the house.",
            author: "Larry Johnson",
            name: "Val Purvis",
            date: "July, 23 2020",
            reviewProduct: "Great Product",
            descProduct: " I love my new Nova Lounge Sofa! The clean lines and premium upholstery make it " +
                    "asleek addition to my living room, and the adjustable headrests add an extratouc" +
                    "h of comfort. Highly recommend!"
        }, {
            id: 2,
            image: "/img-6.png",
            text: "The sofa is not only incredibly stylish, but also very comfortable to lounge on." +
                    "The clean lines and minimalist design make it a perfect fit for my modern living" +
                    " room, and the neutral color scheme allows me to easily incorporate other accent" +
                    " pieces. The sofa is also very sturdy and well-constructed, so I know it will la" +
                    "st me for years to come.",
            author: "Sarah Mitchell",
            name: "Phoebe Kunis",
            date: "Mei, 15 2020",
            reviewProduct: "Great Product",
            descProduct: "Perfect centerpiece for my home. Its chic design and comfortable cushions make i" +
                    "t ideal for lounging, and the high-quality materials mean it will last for years" +
                    " to come."
        }, {
            id: 3,
            image: "/img-7.png",
            text: "Vintage feel that is sure to impress your dinner guests. The table is also very " +
                    "functional, with ample space for family meals or entertaining. I appreciate the " +
                    "attention to detail and quality materials used in its construction. This is defi" +
                    "nitely a piece that will become a cherished family heirloom.",
            author: "Michael Chen",
            name: "Dianne Russell",
            date: "Jan, 10 2020",
            reviewProduct: "Great Product",
            descProduct: "The Zenith Modern Chair is a game-changer for my workspace. Its minimalist desig" +
                    "n fits perfectly with my aesthetic, and the durable materials make it a worthwhi" +
                    "le investment"
        }
    ];

    return (
        <section className="w-full px-4 md:px-8 mt-10 lg:px-24 lg:mb-20">
            <div className="flex flex-wrap gap-12">
                <div className="w-full md:w-1/2 lg:w-[40%] mt-8 flex flex-col">
                    <h2 className="font-bold text-black-1 w-full">
                        YOUR REVIEW
                    </h2>
                    <p
                        className="font-['Lato',Helvetica] font-medium text-black-3 text-base leading-7">
                        About mordern hanging bronze light
                    </p>
                    <div className="w-full mt-8 border-b border-neutral-300 px-0 py-3">
                        <Input
                            className="w-full border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                            placeholder="Your Name"/>
                    </div>
                    <div className="w-full mt-8 border-b border-neutral-300 px-0 py-3">
                        <Input
                            className="w-full border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                            placeholder="Your Email"/>
                    </div>
                    <Accordion type="single" collapsible className="w-full mt-[30px]">
                        <AccordionItem value="furniture" className="border-b border-neutral-300">
                            <AccordionTrigger className="font-lg font-medium text-black-1 py-3">
                                Stars
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    {categoryItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`${item.selected
                                            ? "font-h3-16-bold text-black-1"
                                            : "font-h3-16-medium text-black-3"}`}>
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div
                        className="flex items-center gap-3 px-0 py-3 border-b border-neutral-300 w-full">
                        <Input
                            className="w-full border-none p-0 h-auto font-lg font-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0 mt-[30px] mb-[50px]"
                            placeholder="This product is ...."/>
                    </div>
                    <Button
                        className="w-full sm:w-full h-auto p-3 bg-black-1 rounded-none hover:bg-black-1/90 mt-[60px]">
                        <span
                            className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-bg-1 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                            REVEWS NOW
                        </span>
                    </Button>
                </div>
                {/* <Separator
                    orientation="vertical"
                    className="h-auto self-stretch hidden md:block mx-8"/> */}
                <div className="flex-[1] flex-col">
                    {reviews.map((review, _) => (
                        <div className="items-center pt-4">
                            <div className="mt-4 flex grid grid-cols-2">
                                <div className="flex grid grid-cols-[0.2fr_0.5fr] gap-4 w-[250px]">
                                    <Avatar
                                        className="w-[48px] h-[48px] border-2 border-solid border-[#2f302c] rounded-full">
                                        <AvatarImage
                                            src={review.image}
                                            alt={`${review.author} profile picture`}
                                            className="object-cover"/>
                                        <AvatarFallback className="text-lg font-bold">
                                            {review
                                                .author
                                                .split(' ')
                                                .map(n => n[0])
                                                .join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex grid grid-cols-1 w-[250px]">
                                        <p className="font-lg font-medium text-black-1">
                                            {review.name}</p>
                                        <p className="text-sm font-medium text-black-3">
                                            {review.date}</p>
                                    </div>
                                </div>
                                <div className="items-center mt-4">
                                    <div className="flex grid grid-cols-5 gap-1 justify-self-end">
                                        {[...Array(5)].map((_, index) => (<StarIcon
                                            key={index}
                                            className="w-4 h-4 fill-current text-black-500"
                                            size={16}/>))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-8">
                                <p className="text-base font-bold text-black-1">
                                    {review.reviewProduct}
                                </p>
                                <p className="mt-3 text-sm font-medium text-black-3">
                                    {review.descProduct}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};
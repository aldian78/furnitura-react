import {StarIcon} from "lucide-react";
import React from "react";
import {Badge} from "../ui/badge";
import {Button} from "../ui/button";
import {Card, CardContent} from "../ui/card";

export const CallToActionSection = () : JSX.Element => {
    // Rating stars data
    const ratingStars = Array(5).fill(null);

    return (
        <section className="w-full py-10 overflow-hidden px-4">
            <Card className="max-w-[1392px] mx-auto relative">
                <CardContent className="p-0">
                    <div
                        className="bg-black-7 relative flex flex-wrap lg:flex-nowrap items-center p-8 lg:p-16 lg:pb-0">
                        {/* Left side - Product info */}
                        <div className="grid grid-cols-1 grid-cols-2 space-y-4 z-10">
                            {/* <div className="flex flex-col space-y-4 z-10 lg:w-1/3 flex-1 md:mt-6 lg:mt-[-50px] sm:w-[10px]"> */}
                            <div className="sm:flex sm:flex-col">
                                <h1
                                    className="font-h3-32-extra-bold text-xl py-4 sm:py-6 d:py-6 sm: sm:text-3xl lg:text-2xl font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                                    MORDERN BRONZE
                                    <br/>
                                    HANGING LIGHT
                                </h1>

                                <div className="flex items-center">
                                    {ratingStars.map((_, index) => (<StarIcon key={index} className="w-4 h-4 fill-current text-yellow-500"/>))}
                                </div>

                                <div className="flex items-center gap-4 mt-4">
                                    <div
                                        className="font-h1-32-extra-bold text-lg sm:text-2xl sm:mb-2 font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                                        $2352.41
                                    </div>
                                    <Badge className="bg-[#ce0000] text-black-8 font-h3-16-bold">
                                        -30%
                                    </Badge>
                                </div>

                                <div
                                    className="font-bold text-black-3 text-base sm:text-lg leading-5 line-through [font-family:'Lato',Helvetica] tracking-[0]">
                                    $3252.41
                                </div>
                            </div>

                            {/* Middle - Product image with glow effect */}
                            
                            <div className="relative flex justify-center flex-2">
                                <div
                                    className="w-[170px] h-[250px] sm:ml-[50px] sm:w-[230px] sm:h-[330px] md:w-[230px] md:h-[330px] top-[-33px] lg:w-[380px] lg:h-[450px] lg:top-[-15px] absolute bottom-0 bg-[#ffd68a4c] rounded-[110.5px/149.5px] blur-[50px]"/>
                                <img
                                    className="relative w-auto h-[250px] sm:h-[330px] sm:ml-[50px] top-[-50px] lg:ml-0 lg:w-[400px] lg:h-[500px] lg:top-[-80px] z-10"
                                    alt="Modern Bronze Hanging Light"
                                    src="/img-4.png"/>
                            </div>
                        </div>

                        {/* Right side - Description and CTA */}
                        <div
                            className="flex flex-col flex-1 items-end space-y-8 mt-12 lg:w-1/3 z-10 md:mt-8 lg:mt-[-50px]">
                            <p
                                className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] text-right tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] max-w-[348px]">
                                Stunning lighting fixture that combines contemporary style with timeless
                                elegance. Featuring a sleek and minimalist design, this hanging light is crafted
                                from high-quality bronze and finished with a smooth and lustrous surface.
                            </p>

                            <Button
                                className="flex-2 w-56 h-auto p-3 bg-black-1 rounded-none hover:bg-black-1/90">
                                <span
                                    className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-bg-1 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                    BUY NOW
                                </span>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

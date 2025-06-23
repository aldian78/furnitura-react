import React from "react";
import {Separator} from "../ui/separator";

export const HeroSection = () : JSX.Element => {
    return (
        <section className="w-full relative">
            <div
                className="relative bg-[url(/rectangle-1.svg)] bg-cover bg-right py-24 lg:bg-center md:py-32 md:bg-right">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row lg:flex-row">
                       <div className="lg:flex-1 lg:max-w-[800px] lg:block md:flex-1 md:hidden">
                        {/* This space is for the furniture image that appears on the left side */}
                      </div>
                        <div className="md:flex-1 lg:flex-2 space-y-6 flex flex-col items-center md:items-center lg:items-start lg:ml-20">
                            <div
                                className="font-['Lato',Helvetica] font-bold text-black-1 text-xl leading-7 lg:text-left xl:text-left">
                                WELCOME TO OUR
                            </div>

                            <h1 className="font-['Montserrat',Helvetica]">
                                <span
                                    className="font-extrabold text-[#2f302c] text-6xl md:text-8xl leading-[1.05]">
                                    FUNITURE
                                    <br/>
                                </span>
                                <span className="font-bold text-[#2f302c] text-6xl md:text-8xl leading-[1.05]">
                                    GALLERY
                                </span>
                            </h1>

                            <Separator className="w-[308px] bg-black-1 my-8"/>

                            <div
                                className="font-['Lato',Helvetica] font-bold text-black-1 text-xl leading-7">
                                BROWSE OUR SELECTIONS
                            </div>

                            <p className="font-h3-16-medium text-black-7 max-w-[374px] text-center lg:text-left">
                                Featuring sleek designs and innovative materials that seamlessly blend form and
                                function.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

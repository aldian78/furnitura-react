import React from "react";
import { Separator } from "../ui/separator";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="relative bg-[url(/rectangle-1.svg)] bg-cover bg-center py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              {/* This space is for the furniture image that appears on the left side */}
            </div>

            <div className="md:w-1/2 space-y-6">
              <div className="font-['Lato',Helvetica] font-bold text-black-1 text-xl leading-7">
                WELCOME TO OUR
              </div>

              <h1 className="font-['Montserrat',Helvetica]">
                <span className="font-extrabold text-[#2f302c] text-6xl md:text-8xl leading-[1.05]">
                  FUNITURE
                  <br />
                </span>
                <span className="font-bold text-[#2f302c] text-6xl md:text-8xl leading-[1.05]">
                  GALLERY
                </span>
              </h1>

              <Separator className="w-[308px] bg-black-1 my-8" />

              <div className="font-['Lato',Helvetica] font-bold text-black-1 text-xl leading-7">
                BROWSE OUR SELECTIONS
              </div>

              <p className="font-h3-16-medium text-black-3 max-w-[374px]">
                Featuring sleek designs and innovative materials that seamlessly
                blend form and function.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

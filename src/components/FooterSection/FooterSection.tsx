import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

// Define footer data structure for better maintainability
const footerData = [
  {
    title: "CUSTOMER SERVICE",
    links: [
      "Help & FAQs",
      "Return & Refund",
      "Shipping Policy",
      "Customs and Taxes",
      "Customers's Reviews",
    ],
  },
  {
    title: "ABOUT COMPANY",
    links: [
      "About Japan with love",
      "Contact Us",
      "Special Deals & Offers",
      "Terms of Service",
      "Privacy Policy",
    ],
  },
  {
    title: "HELP CENTER",
    links: [
      "Order Information",
      "Shipping Options",
      "International Shipping",
      "Payment Options",
    ],
  },
  {
    title: "RETURN & WARRANTLY",
    links: [
      "Returns & Exchange Policy",
      "Returns Center",
      "Warranty Policy",
      "Warranty Registration",
      "Warranty Repair Center",
    ],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center gap-8 pt-16 pl-8 pr-8 pb-8 lg:px-24 md:px-12 bg-bg-1">
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-[80px] lg:gap-[120px] w-full">
        {footerData.map((column, index) => (
          <div key={index} className="flex flex-col items-start gap-7 flex-1">
            <h2 className="self-stretch mt-[-1.00px] font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] leading-[var(--h2-20-extra-bold-line-height)] tracking-[var(--h2-20-extra-bold-letter-spacing)] [font-style:var(--h2-20-extra-bold-font-style)]">
              {column.title}
            </h2>

            {column.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                className="self-stretch font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] hover:text-black-1 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <Separator className="w-full h-px" />

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-[72px] w-full">
        <div className="text-center md:text-left font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
          Furnitur © Copyright 2020, Inc. All rights reserved
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="w-5 h-5 flex items-center justify-center">
            <FacebookIcon className="w-[17px] h-[17px]" />
          </a>
          <a href="#" className="w-5 h-5 flex items-center justify-center">
            <TwitterIcon className="w-[17px] h-[17px]" />
          </a>
          <a href="#" className="w-5 h-5 flex items-center justify-center">
            <InstagramIcon className="w-[17px] h-[17px]" />
          </a>
          <a href="#" className="w-5 h-5 flex items-center justify-center">
            <YoutubeIcon className="w-[17px] h-[17px]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

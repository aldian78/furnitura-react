import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What payment methods do you accept?",
      answer: "Yes, we offer free standard shipping on all orders over a certain amount within the continental United States. For orders below that amount or for expedited shipping options, additional fees may apply.",
      defaultOpen: true,
    },
    {
      question: "Do you offer free shipping?",
      answer:
        "Yes, we offer free standard shipping on all orders over a certain amount within the continental United States. For orders below that amount or for expedited shipping options, additional fees may apply.",
      defaultOpen: false,
    },
    {
      question: "How long does it take for delivery?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "What is your return policy?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Do you offer assembly or installation services?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[73px] px-4 py-10 md:px-12 lg:px-24 lg:mx-auto">
      <div className="flex flex-col items-center gap-9">
        <h2 className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] text-center tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
          FRENQUENT QUESTION ANSWERS
        </h2>

        <p className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
          SOLVE ALL YOUR PROBLEM ABOUT OUR PRODUCTS
        </p>
      </div>

      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="border-t border-b border-neutral-300 py-6 px-0"
            >
              <AccordionTrigger className="flex justify-between items-start hover:no-underline">
                <span className="font-h2-20-bold font-[number:var(--h2-20-bold-font-weight)] text-black-1 text-[length:var(--h2-20-bold-font-size)] tracking-[var(--h2-20-bold-letter-spacing)] leading-[var(--h2-20-bold-line-height)] [font-style:var(--h2-20-bold-font-style)] text-left">
                  {index === 0
                    ? item.question
                    : `${index + 1}. ${item.question}`}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-5">
                {item.answer && (
                  <p className="font-medium text-black-3 text-base leading-7 font-['Lato',Helvetica]">
                    {item.answer}
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

import React from "react";
import { Separator } from "../ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";

export const DeliveryInformationSection = (): JSX.Element => {
  // Data for the product description
  const productDescription = {
    description:
      "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability. Our minimal sofa product is crafted from high-quality materials, making it a long-lasting investment for your home. Versatile and adaptable, it can be customized with pillows and throws to suit your personal style. Upgrade your living space with our minimal sofa product, a timeless and practical piece of furniture that will elevate any room.",
    fitsAndFeatures: [
      "Minimal sofas have sleek designs with sturdy frames and firm cushions.",
      "They feature neutral-colored upholstery made of leather or high-quality fabric.",
      "Some designs may have modular components or hidden storage.",
      "Minimal sofas are practical, versatile, and timeless.",
      "Upgrade your living space with a minimal sofa today.",
    ],
  };

  return (
    <section className="flex flex-wrap gap-20 py-20 md:px-12 lg:px-24 w-full">
      <Tabs defaultValue="product-detail" className="w-full">
        <TabsList className="flex items-center justify-start gap-[60px] w-full h-auto bg-transparent p-0">
          <TabsTrigger
            value="product-detail"
            className="inline-flex items-start pt-0 pb-2 px-0 relative border-b-[1.7px] border-black-1 data-[state=active]:border-b-[1.7px] data-[state=active]:border-black-1 rounded-none h-auto bg-transparent"
          >
            <span className="font-h1-32-extra-bold text-black-1 whitespace-nowrap">
              PRODUCT DETAIL
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="delivery-return"
            className="inline-flex items-start pt-0 pb-2 px-0 relative rounded-none h-auto bg-transparent data-[state=active]:border-b-[1.7px] data-[state=active]:border-black-1"
          >
            <span className="font-h1-32-extra-bold text-black-1 whitespace-nowrap">
              DELIVERY AND RETURN
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="product-detail" className="mt-[72px] w-full">
          <div className="flex flex-col md:flex-row items-start gap-[60px] w-full">
            <div className="flex flex-col items-start gap-[30px] flex-1">
              <h2 className="font-h2-20-extra-bold text-black-1 w-full">
                DESCRIPTION
              </h2>
              <p className="font-['Lato',Helvetica] font-medium text-black-3 text-base leading-7">
                {productDescription.description}
              </p>
            </div>

            <Separator
              orientation="vertical"
              className="h-auto self-stretch hidden md:block"
            />

            <div className="flex flex-col items-start gap-[30px]">
              <h2 className="font-h2-20-extra-bold text-black-1 whitespace-nowrap">
                FITS AND FEATURES
              </h2>
              <div className="max-w-[488px] font-['Lato',Helvetica] font-medium text-black-3 text-base leading-7">
                {productDescription.fitsAndFeatures.map((feature, index) => (
                  <React.Fragment key={index}>
                    {feature}
                    {index < productDescription.fitsAndFeatures.length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="delivery-return" className="mt-[72px]">
          {/* Content for delivery and return tab would go here */}
        </TabsContent>
      </Tabs>
    </section>
  );
};

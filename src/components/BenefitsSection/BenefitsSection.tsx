import React from "react";
import { Card, CardContent, CardBenefit } from "../ui/card";

export const BenefitsSection = (): JSX.Element => {
  // Benefits data for mapping
  const benefitsData = [
    {
      id: 1,
      icon: "/group-1.png", // Using the existing image paths
      title: "GLOBAL DELIVERY",
      description:
        "Experience Hassle-Free Shipping and Seamless Global Connectivity with Our Trustworthy and Efficient Delivery Service, Bringing the World to Your Fingertips!",
    },
    {
      id: 2,
      icon: "/package-box-1.svg",
      title: "FREE SHIPPING",
      description:
        "Shop to Your Heart's Content Without Worrying About Shipping Costs: Our Free Shipping Service Delivers Your Purchases with a Smile, Straight to Your Doorstep!",
    },
    {
      id: 3,
      icon: "/phone-1.svg",
      title: "24/7 SUPPORTING",
      description:
        "Shop with Confidence Anytime, Anywhere: Our Free Shipping Service Comes with 24/7 Support to Ensure Your Packages Arrive Safely and On Time!",
    },
    {
      id: 4,
      icon: "/email-1.svg",
      title: "DAILY EMAIL",
      description:
        "Stay Up-to-Date with Your Deliveries: Enjoy the Convenience of Daily Email Updates with Our Free Shipping Service, Making Your Online Shopping Experience Even More Enjoyable!",
    },
    {
      id: 5,
      icon: "/credit-card-1.svg",
      title: "EASY PAYMENT",
      description:
        "Shop and Pay with Ease: Our Free Shipping Service Not Only Delivers Your Packages for Free, but Also Offers Easy Payment Options, Making Your Shopping Experience a Breeze!",
    },
    {
      id: 6,
      icon: "/group-4.png",
      title: "MONTHLY  VOUCHER",
      description:
        "More Than Just Free Shipping: Our Service Rewards Your Loyalty with Monthly Vouchers, Giving You More Reasons to Shop and Save on Your Favorite Products!",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[72px] py-20 px-6 md:px-12 lg:px-24 w-full">
      <h2 className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] text-center tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
        WHY CHOOSE US?
      </h2>

      <div className="flex flex-col gap-[68px] w-full max-w-[1400px]">
        {/* First row of benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[68px]">
          {benefitsData.slice(0, 3).map((benefit) => (
            <CardBenefit key={benefit.id} className="border-none shadow-none">
              <CardContent className="flex flex-col items-center gap-6 p-0">
                {benefit.id === 1 ? (
                  <div className="relative w-[60px] h-[60px]">
                    <div className="relative w-[52px] h-[52px] top-1 left-1">
                      <div className="absolute w-0.5 h-0.5 top-[47px] left-[37px] bg-[url(/group.png)] bg-[100%_100%]" />
                      <div className="absolute w-[52px] h-[52px] top-0 left-0 bg-[url(/group-1.png)] bg-[100%_100%]" />
                      <div className="absolute w-1.5 h-[11px] top-8 left-9 bg-[url(/group-2.png)] bg-[100%_100%]" />
                      <div className="absolute w-0.5 h-0.5 top-3 left-[26px] bg-[url(/group-3.png)] bg-[100%_100%]" />
                    </div>
                  </div>
                ) : (
                  <img
                    className="w-[60px] h-[60px]"
                    alt={benefit.title}
                    src={benefit.icon}
                  />
                )}

                <h3 className="w-full font-[number:var(--h3-16-bold-font-weight)] text-black-1 text-[length:var(--h3-16-bold-font-size)] text-center leading-[var(--h3-16-bold-line-height)] font-h3-16-bold tracking-[var(--h3-16-bold-letter-spacing)] [font-style:var(--h3-16-bold-font-style)]">
                  {benefit.title}
                </h3>

                <p className="w-full font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] text-center tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                  {benefit.description}
                </p>
              </CardContent>
            </CardBenefit>
          ))}
        </div>

        {/* Second row of benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[68px]">
          {benefitsData.slice(3, 6).map((benefit) => (
            <CardBenefit key={benefit.id} className="border-none shadow-none">
              <CardContent className="flex flex-col items-center gap-6 p-0">
                {benefit.id === 6 ? (
                  <div className="relative w-[60px] h-[60px]">
                    <img
                      className="absolute w-[49px] h-[60px] top-0 left-[5px]"
                      alt="Group"
                      src={benefit.icon}
                    />
                  </div>
                ) : (
                  <img
                    className="w-[60px] h-[60px]"
                    alt={benefit.title}
                    src={benefit.icon}
                  />
                )}

                <h3 className="w-full font-[number:var(--h3-16-bold-font-weight)] text-black-1 text-[length:var(--h3-16-bold-font-size)] text-center leading-[var(--h3-16-bold-line-height)] font-h3-16-bold tracking-[var(--h3-16-bold-letter-spacing)] [font-style:var(--h3-16-bold-font-style)]">
                  {benefit.title}
                </h3>

                <p className="w-full font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] text-center tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                  {benefit.description}
                </p>
              </CardContent>
            </CardBenefit>
          ))}
        </div>
      </div>
    </section>
  );
};

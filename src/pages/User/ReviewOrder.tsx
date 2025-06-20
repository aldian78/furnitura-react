import React from "react";
import { CartSection } from "../../components/CartSection";
import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { CartReviewSection } from "../../components/CartReviewSection";
import { BenefitsSection } from "../../components/BenefitsSection";

export const ReviewYourOrder = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-bg-1">
      <NavigationSection />
      <CartSection />
      <CartReviewSection />
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};
export default ReviewYourOrder;
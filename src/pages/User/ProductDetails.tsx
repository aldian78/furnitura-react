import React from "react";
import { BestSellersSection } from "../../components/BestSellersSection";
import { CallToActionSection } from "../../components/CallToActionSection";
import { ProductReviewsSection } from "../../components/ProductReviews";
import { DeliveryInformationSection } from "../../components/DeliveryInformationSection";
import { FooterSection } from "../../components/FooterSection";
import { FrequentlyAskedQuestionsSection } from "../../components/FrequentlyAskedQuestionsSection";
import { ProductDetailsSection } from "../../components/ProductDetailsSection";
import { BenefitsSection } from "../../components/BenefitsSection";
import { NavigationSection } from "../../components/NavigationSection";

export const ProductDetails = () => {
  return (
    <div className="flex flex-col w-full bg-bg-1">
      <NavigationSection />
      <ProductDetailsSection />
      <DeliveryInformationSection />
      <ProductReviewsSection />
      <CallToActionSection />
      <BenefitsSection />
      <FrequentlyAskedQuestionsSection />
      <BestSellersSection />
      <FooterSection />
    </div>
  );
};

export default ProductDetails;

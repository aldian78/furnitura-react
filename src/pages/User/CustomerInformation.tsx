import React from "react";
import { CartSection } from "../../components/CartSection";
import { FooterSection } from "../../components/FooterSection/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { CustomerInformationSection } from "../../components/CustomerInformationSection";
import { BenefitsSection } from "../../components/BenefitsSection";

export const CustomerInformation = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-bg-1">
      <NavigationSection />
      <CartSection />
      <CustomerInformationSection  />
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};
export default CustomerInformation;

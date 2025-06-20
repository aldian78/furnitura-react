import React from "react";
import { CartSection } from "../../components/CartSection/CartSection";
import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { ShippingPaymentSection } from "../../components/ShippingPaymentSection";
import { BenefitsSection } from "../../components/BenefitsSection";


// Tambahkan props type di sini
type Props = {
  currentStepIsActive: boolean;
};

export const ShippingAndPayment = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-bg-1">
      <NavigationSection />
      <CartSection />
      <ShippingPaymentSection />
      <BenefitsSection />
      <FooterSection />
    </main>
  );
};
export default ShippingAndPayment;
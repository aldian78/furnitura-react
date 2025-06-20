import React from "react";
import { BestSellersSection } from "../../components/BestSellersSection";
import { CartSection } from "../../components/CartSection";
import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { ShoppingCartSection } from "../../components/ShoppingCartSection";
import { BenefitsSection } from "../../components/BenefitsSection";


export const Cart = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-bg-1">
      <NavigationSection />
      <CartSection />
      <ShoppingCartSection />
      <BenefitsSection />
      <BestSellersSection />
      <FooterSection />
    </div>
  );
};
export default Cart;
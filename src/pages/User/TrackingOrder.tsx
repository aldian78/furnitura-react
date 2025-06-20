import React from "react";
import { OrderSummarySection } from "../../components/OrderSummarySection";
import { FooterSection } from "../../components/FooterSection";
import { NavigationSection } from "../../components/NavigationSection";
import { TrackingOrderSection } from "../../components/TrackingOrderSection";

export const TrackingOrders = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-bg-1">
      <NavigationSection />
      <OrderSummarySection />
      <TrackingOrderSection />
      <FooterSection />
    </div>
  );
};
export default TrackingOrders;
import React from "react";
import { BenefitsSection } from "../../components/BenefitsSection";
import { CallToActionSection } from "../../components/CallToActionSection";
import { CategoriesSection } from "../../components/CategoriesSection";
import { CustomerReviewsSection } from "../../components/CustomerReviewsSection";
import { FeaturedProductsSection } from "../../components/FeaturedProductsSection/FeaturedProductsSection";
import { FooterSection } from "../../components/FooterSection/";
import { HeroSection } from "../../components/HeroSection";
import { NavigationSection } from "../../components/NavigationSection";

const Home = () => {
    return (
        <>
                  <NavigationSection />
                  <HeroSection />
                  <CategoriesSection />
                  <FeaturedProductsSection />
                  <BenefitsSection />
                  <CallToActionSection />
                  <CustomerReviewsSection />
                  <FooterSection />
        </>
    );
};

export default Home;

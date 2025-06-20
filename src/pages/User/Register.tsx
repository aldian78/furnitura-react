import React from "react";
import { BenefitsSection } from "../../components/BenefitsSection";
import { AuthenticationCartSection } from "../../components/AuthenticationCartSection";
import { FooterSection } from "../../components/FooterSection";
import { RegistrationTitleSection } from "../../components/RegistrationTitleSection";

export const Register = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-bg-1">
      <RegistrationTitleSection />
      <AuthenticationCartSection />
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};
export default Register;
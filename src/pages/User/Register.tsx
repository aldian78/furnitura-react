import React from "react";
import { BenefitsSection } from "../../components/BenefitsSection";
import { AuthenticationRegisterSection } from "../../components/AuthenticationRegisterSection";
import { FooterSection } from "../../components/FooterSection";
import { RegistrationTitleSection } from "../../components/RegistrationTitleSection";

export const Register = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-bg-1">
      <RegistrationTitleSection />
      <AuthenticationRegisterSection />
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};
export default Register;
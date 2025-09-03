import React from "react";
import { BenefitsSection } from "../../components/BenefitsSection";
import { AuthLoginSection } from "../../components/AuthLoginSection";
import { FooterSection } from "../../components/FooterSection";
import { LoginTitleSection } from "../../components/LoginTitleSection";

export const Login = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-bg-1">
      <LoginTitleSection />
      <AuthLoginSection />
      <BenefitsSection />
      <FooterSection />
    </div>
  );
};
export default Login;
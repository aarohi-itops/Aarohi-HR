import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import TrustedBy from "./components/TrustedBy/TrustedBy";

import OurServices from "./components/OurServices/OurServices";
import IndustriesWeServe from "./components/IndustriesWeServe/IndustriesWeServe";
import HowItWorksSection from "./components/HowItWorks/HowItWorksSection";
import Testomonials from "./components/Testomonials/Testomonials";
import GotQuestion from "./components/GotQuestion/GotQuestion";
import CompaniesAndEmployeeCards from "./components/CompaniesAndEmployee/CompaniesAndEmployeeCards";
import OurNumbersFigure from "./components/OurNumbersFigure/OurNumbersFigure";
import OurOpenings from "@/views/OurServices/components/OurOpenings";
export default function LandingPage() {
  return (
    <div className="flex flex-col  py-16">
      <HeroSection />
      <TrustedBy
        heading={"Trusted by"}
        headerStyle={"text-start"}
        className=""
      />

      <OurOpenings />
      <OurServices />
      <OurNumbersFigure />
      <IndustriesWeServe />
      <HowItWorksSection />
      <Testomonials />
      <GotQuestion />
      <CompaniesAndEmployeeCards />
    </div>
  );
}

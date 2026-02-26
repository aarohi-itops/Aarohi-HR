import Hero from "@/components/atom/Hero";
import React from "react";
import MultipleDataCards from "./components/MultipleDataCards";

import DoubleCircleCard from "./components/DoubleCircleCard";

export default function Licenses() {
  return (
    <>
      <Hero
        smallHeading="Licenses"
        highlightText="Our Legal Commitment"
        subtitle="Ensuring Safe and Transparent Services"
        description="Aarohi HR Solutions is fully licensed and compliant with all relevant laws and regulations abroad, providing businesses and job seekers with trustworthy and legally sound staffing services." beforehighlight={""}      />
      <MultipleDataCards />

      <DoubleCircleCard />
    </>
  );
}

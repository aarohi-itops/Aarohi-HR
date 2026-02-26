"use client";
import React, {useState} from "react";
import TestomonialSlide from "./Components/TestomonialSlide";
import HighlightText from "@/services/HighlightText";
import ToggleButton from "@/components/atom/ToggleButton";

export default function Testomonials() {
  const [isForCompanies, setIsForCompanies] = useState(true);

  // Handle toggle click
  const handleToggle = () => {
    setIsForCompanies((prev) => !prev);
  };
  return (
    <div className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex flex-col items-center py-12 md:py-24 w-full">
      <header className="w-full flex flex-col items-center">
        <h2 className="text-tertiary-green mb-1 font-primary text-center space-x-2 text-base md:text-xl tracking-wider leading-tight font-semibold">
          Testimonials
        </h2>
        <h1 className="text-primary text-center space-x-2 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-tight font-normal">
          <HighlightText
            className="font-semibold px-2 md:px-4 text-start"
            highlightColor="bg-tertiary-green"
            duration={700}
            delayAnimation={700}
          >
            Trusted by Employers
          </HighlightText>
          <br />
          Valued by Workers.
        </h1>
        <p className="text-primary-gray max-w-[874px] mt-4 md:mt-6 text-center font-primary text-base md:text-lg lg:text-xl font-normal leading-normal">
          We&apos;re proud to have helped businesses grow and individuals
          achieve life-changing opportunities. Here&apos;s what they have to say
          about working with Aarohi HR Solutions.
        </p>
      </header>
      <section className="w-full flex flex-col items-center pt-8 md:pt-16">
        <ToggleButton
          isActive={isForCompanies}
          onToggle={handleToggle}
          leftLabel="Companies"
          rightLabel="Employees"
        />

        <div className="w-full mt-6 md:mt-10">
          <TestomonialSlide isForCompanies={isForCompanies} />
        </div>
      </section>
    </div>
  );
}

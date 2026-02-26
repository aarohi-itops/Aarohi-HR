"use client";
import Image from "next/image";
import React, {memo, useEffect, useMemo} from "react";
import tickBadge from "@/assets/LandingPage/CompaniesAndEmployeeCard/tick-badge.svg";
import tickBadgePurple from "@/assets/LandingPage/CompaniesAndEmployeeCard/tick-badge2.svg";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {StaticImageData} from "next/image";

// Define types for our card data
interface CardData {
  type: string;
  title: string;
  titleColor: string;
  heading: string;
  description: string;
  bgColor: string;
  circleColor: string;
  isCompanies: boolean;
  checkIcon: StaticImageData;
  buttonVariant: "withArrow" | "withArrowPurple" | "withoutArrow" | "default";
  linkHref: string;
  benefits: string[];
}

interface CardProps {
  data: CardData;
}

// Quarter-circle group component with isolated animation
const QuarterCircleGroup = memo(({isCompanies}: {isCompanies: boolean}) => {
  return (
    <div className="absolute top-0 right-0 pointer-events-none z-0">
      <div className="absolute top-0 right-0 w-56 h-56">
        <div
          className="quarter-circle-animation"
          style={{transformOrigin: "top right"}}
        >
          {/* Largest quarter-circle */}
          <div
            className={`absolute -top-16 -right-16 w-68 h-68 rounded-bl-full ${
              isCompanies ? "bg-blue-100" : "bg-orange-200"
            }`}
          />
          {/* Middle quarter-circle */}
          <div
            className={`absolute -top-12 -right-12 w-52 h-52 rounded-bl-full ${
              isCompanies ? "bg-blue-200" : "bg-orange-300"
            }`}
          />
          {/* Smallest quarter-circle */}
          <div
            className={`absolute -top-8 -right-8 w-36 h-36 rounded-bl-full ${
              isCompanies ? "bg-blue-300/40" : "bg-orange-400/40"
            }`}
          />
        </div>
      </div>
    </div>
  );
});

QuarterCircleGroup.displayName = "QuarterCircleGroup";

// Benefits list component - extracted for reusability
const BenefitsList = memo(({
  benefits,
  checkIcon,
}: {
  benefits: string[];
  checkIcon: StaticImageData;
}) => (
  <>
    {benefits.map((benefit: string, index: number) => (
      <div key={index} className="flex items-start md:items-center gap-2">
        <Image
          src={checkIcon}
          alt="check"
          width={24}
          height={24}
          className="flex-shrink-0 mt-0.5 md:mt-0"
        />
        <span className="text-sm md:text-base">{benefit}</span>
      </div>
    ))}
  </>
));

BenefitsList.displayName = "BenefitsList";

// Card data for reusability
const cardData: CardData[] = [
  {
    type: "companies",
    title: "For Companies",
    titleColor: "text-secondary-green",
    heading: "Need Reliable Staff for Your Business in Global?",
    description:
      "We make hiring skilled, compliant, and job-ready workers from Asia easy—so you can focus on growing your business.",
    bgColor: "bg-blue-100",
    circleColor: "bg-secondary-green",
    isCompanies: true,
    checkIcon: tickBadge,
    buttonVariant: "withArrow",
    linkHref: "/contactus",
    benefits: [
      "Industry-specific hiring (hospitality, construction, logistics, etc.)",
      "Pre-vetted, experienced workers",
      "Full visa & relocation handled by us",
      "Fast turnaround, zero red tape",
    ],
  },
  {
    type: "employees",
    title: "For Employees",
    titleColor: "text-primary-purple",
    heading: "Looking for Job Opportunities in Global?",
    description:
      "We connect hard-working individuals from Asia with trusted employers in Global. We'll support you through every step of the journey.",
    bgColor: "bg-secondary-purple/70",
    circleColor: "bg-primary-purple",
    isCompanies: false,
    checkIcon: tickBadgePurple,
    buttonVariant: "withArrowPurple",
    linkHref: "/contactus",
    benefits: [
      "Legitimate job offers with valid contracts",
      "Full visa and relocation assistance",
      "Safe travel and reliable employers",
      "No hidden fees or shady agents",
    ],
  },
];

// Reusable card component
const Card = memo(({data}: CardProps) => (
  <div
    className="card-container group w-full md:w-1/2 flex flex-col gap-4 md:gap-6 items-center md:items-start rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm transition-colors duration-300 relative overflow-hidden"
    style={{background: `var(--${data.type}-bg-color)`}}
  >
    {/* Quarter-circle animation elements - isolated from content */}
    <QuarterCircleGroup isCompanies={data.isCompanies} />

    {/* Content container */}
    <div className="flex flex-col gap-2 relative z-10">
      <h2
        className={`text-lg md:text-xl ${data.titleColor} font-primary font-semibold`}
      >
        {data.title}
      </h2>
      <h1 
        className={`card-heading text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-primary font-semibold leading-tight mb-2 transition-colors duration-300 text-primary-black ${
          data.isCompanies 
            ? "group-hover:text-secondary-green" 
            : "group-hover:text-primary-purple"
        }`}
      >
        {data.heading}
      </h1>
      <p className="text-sm md:text-base text-primary-gray font-primary font-normal">
        {data.description}
      </p>
    </div>
    <div className="flex flex-col gap-3 md:gap-4 text-primary-gray w-full relative z-10">
      <BenefitsList benefits={data.benefits} checkIcon={data.checkIcon} />
      <Link href={data.linkHref} className="mt-2 md:mt-4 self-start transform transition-transform duration-300 hover:scale-[1.02] focus:scale-[1.02]">
        <Button
          variant={data.buttonVariant}
          className="h-12 md:h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group hover: cursor-pointer"
          withAnimatedArrow
          arrowSize={24}
          arrowContainerClassName="ml-2 md:ml-3.5 flex p-4 md:p-6 items-center justify-center rounded-[999px] bg-white/25 relative overflow-hidden button-arrow-container"
          StyleBg={data.buttonVariant === "withArrow" ? "#0091e6" : "#f47920"}
        >
          <span>Find your Sector</span>
        </Button>
      </Link>
    </div>
  </div>
));

Card.displayName = "Card";

// Use a single stylesheet injection that doesn't change between renders
const injectGlobalStyles = () => {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    .quarter-circle-animation {
      transition: transform 0.5s ease-in-out;
      transform-box: fill-box;
    }
    
    .card-container:hover .quarter-circle-animation {
      transform: scale(1.2) translateX(-25px);
    }
    
    .card-container {
      position: relative;
    }
    
    /* Define background colors as CSS variables */
    :root {
      --companies-bg-color: var(--quaternary-green-70, rgba(236, 250, 253, 0.7));
      --employees-bg-color: var(--secondary-purple-70, rgba(255, 242, 232, 0.7));
    }
    
   
  `;
  document.head.appendChild(styleElement);
  return styleElement;
};

// Main component with memo for performance optimization
const  CompaniesAndEmployeeCards = memo(function CompaniesAndEmployeeCards() {
  // Add CSS for animation only on the client-side
  useEffect(() => {
    const styleSheet = injectGlobalStyles();
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Memoize the card rendering to prevent unnecessary re-renders
  const cardElements = useMemo(() => 
    cardData.map((data, index) => <Card key={index} data={data} />),
    []
  );

  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 w-full font-primary">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 items-stretch">
          {cardElements}
        </div>
      </div>
    </section>
  );
});

export default CompaniesAndEmployeeCards;

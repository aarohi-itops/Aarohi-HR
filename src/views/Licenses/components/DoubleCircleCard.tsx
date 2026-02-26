"use client";
import React, { memo, useEffect, useMemo } from "react";
import tickBadge from "@/assets/LandingPage/CompaniesAndEmployeeCard/tick-badge.svg";
import tickBadgePurple from "@/assets/LandingPage/CompaniesAndEmployeeCard/tick-badge2.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StaticImageData } from "next/image";

// Define types for our card data
interface CardData {
  type: string;
  titleColor: string;
  heading: string;
  description: string;
  bgColor: string;
  circleColor: string;
  isCompanies: boolean;
  checkIcon: StaticImageData;
  buttonVariant: "withArrow" | "withArrowPurple" | "withoutArrow" | "default";
  linkHref: string;
}

interface CardProps {
  data: CardData;
}

// Quarter-circle group component with isolated animation
const QuarterCircleGroup = memo(({ isCompanies }: { isCompanies: boolean }) => {
  return (
    <div className="absolute top-0 right-0 pointer-events-none z-0">
      <div className="absolute top-0 right-0 w-56 h-56">
        <div
          className="quarter-circle-animation"
          style={{ transformOrigin: "top right" }}
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

// Card data for reusability
const cardData: CardData[] = [
  {
    type: "companies",
    titleColor: "text-secondary-green",
    heading: "Learn More About Us",
    description:
      "Get our brochure for a clear overview of our services and recruitment process.",
    bgColor: "bg-quaternary-green/70",
    circleColor: "bg-secondary-green",
    isCompanies: true,
    checkIcon: tickBadge,
    buttonVariant: "withArrow",
    linkHref: "/aboutus",
  },
  {
    type: "employees",
    titleColor: "text-primary-purple",
    heading: "Quick Look at Our Services",
    description:
      "Download our flyer for a quick snapshot of our services and industries we serve.",
    bgColor: "bg-secondary-purple/70",
    circleColor: "bg-primary-purple",
    isCompanies: false,
    checkIcon: tickBadgePurple,
    buttonVariant: "withArrowPurple",
    linkHref: "/ourservices/employees",
  },
];

// Reusable card component
const Card = memo(({ data }: CardProps) => (
  <div
    className="card-container group w-full md:w-1/2 flex flex-col gap-4 md:gap-6 items-center md:items-start rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm transition-colors duration-300 relative overflow-hidden "
    style={{ background: `var(--${data.type}-bg-color)` }}
  >
    {/* Quarter-circle animation elements - isolated from content */}
    <QuarterCircleGroup isCompanies={data.isCompanies} />

    {/* Content container */}
    <div className="flex flex-col gap-2 relative z-10 w-full">
      <h1 
        className={`card-heading text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-primary font-semibold leading-tight mb-2 transition-colors duration-300 ${
          data.isCompanies ? "group-hover:text-secondary-green" : "group-hover:text-primary-purple"
        } text-primary-black`}
      >
        {data.heading}
      </h1>
      <p className="text-sm md:text-base text-primary-gray font-primary font-normal">
        {data.description}
      </p>
    </div>
    <div className="flex flex-col gap-3 md:gap-4 text-primary-gray w-full relative z-10 mt-auto">
      <Link href={data.linkHref} className="mt-2 md:mt-4 self-start transform transition-transform duration-300 hover:scale-[1.02] focus:scale-[1.02]">
        <Button
          variant={data.buttonVariant}
          className="h-12 md:h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal hover:cursor-pointer"
          withAnimatedArrow
          arrowSize={24}
          arrowContainerClassName="ml-2 md:ml-3.5 flex p-4 md:p-6 items-center justify-center rounded-[999px] bg-white/25 relative overflow-hidden"
          StyleBg={data.buttonVariant === "withArrow" ? "#0091e6" : "#f47920"}
        >
          <span>{data.isCompanies ? "Learn More" : "Our Services"}</span>
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
      --companies-bg-color: var(--quaternary-green-70, rgba(236, 248, 253, 0.7));
      --employees-bg-color: var(--secondary-purple-70, rgba(255, 243, 232, 0.7));
    }
  `;
  document.head.appendChild(styleElement);
  return styleElement;
};

// Main component with memo for performance optimization
const DoubleCircleCard = memo(function DoubleCircleCard() {
  // Add CSS for animation only once on the client-side
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
      <div className="container mx-auto max-w-5xl px-4 md:px-6 w-full font-primary">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {cardElements}
        </div>
      </div>
    </section>
  );
});

export default DoubleCircleCard;

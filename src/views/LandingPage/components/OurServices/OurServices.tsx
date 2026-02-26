"use client";
import {useState} from "react";
import OurServiceCard from "./components/OurServiceCard";

// Import service images
import service1 from "@/assets/LandingPage/OurServices/service1.png";
import service2 from "@/assets/LandingPage/OurServices/service2.png";
import service3 from "@/assets/LandingPage/OurServices/service3.png";
import service4 from "@/assets/LandingPage/OurServices/service4.png";
import service5 from "@/assets/LandingPage/OurServices/service5.webp";
import service6 from "@/assets/LandingPage/OurServices/service6.png";
import ToggleButton from "@/components/atom/ToggleButton";
import HighlightText from "@/services/HighlightText";

export default function OurServices() {
  const [isForWorkers, setIsForWorkers] = useState(true);
  const [currentContent, setCurrentContent] = useState<"workers" | "companies">(
    "workers"
  );

  // Services data for workers
  const workersData = [
    {
      id: 1,
      title: "Skill Assessment & Job finding",
      description:
        "Thorough background checks, trade tests, and interviews to ensure you find the right job.",
      imageUrl: service1.src,
    },
    {
      id: 2,
      title: "International Recruitment",
      description:
        "We find and screen reliable candidates from trusted talent pools across Asia.",
      imageUrl: service2.src,
    },
    {
      id: 3,
      title: "Visa & Work Permit Processing",
      description:
        "We manage the full legal process—Ministry approvals, visas, and documentation.",
      imageUrl: service4.src,
    },
    {
      id: 4,
      title: "Employer Document Preparation",
      description:
        "We prepare all required legal documents—offer letters, contracts, and POAs.",
      imageUrl: service5.src,
    },
    {
      id: 5,
      title: "Relocation & Travel Coordination",
      description:
        "Flight booking, accommodation support, and smooth worker arrival in Global.",
      imageUrl: service6.src,
    },
    {
      id: 6,
      title: "Onboarding & Local Support",
      description:
        "Our team ensures workers settle in and are ready to contribute from day one.",
      imageUrl: service3.src,
    },
  ];

  // Services data for companies
  const companiesData = [
    {
      id: 1,
      title: "Talent Sourcing & Screening",
      description:
        "We source pre-vetted, skilled workers from across Asia to match your exact requirements.",
      imageUrl: service3.src,
    },
    {
      id: 2,
      title: "Legal Compliance Management",
      description:
        "We handle all legal requirements and ensure full compliance with UAE labor regulations.",
      imageUrl: service1.src,
    },
    {
      id: 3,
      title: "Visa & Immigration Services",
      description:
        "Complete management of worker visas, permits, and government approvals.",
      imageUrl: service6.src,
    },
    {
      id: 4,
      title: "Documentation & Contracts",
      description:
        "Preparation and processing of all employment contracts and legal documentation.",
      imageUrl: service2.src,
    },
    {
      id: 5,
      title: "Worker Transportation",
      description:
        "Coordinated transportation from home country to Global with all logistics handled.",
      imageUrl: service5.src,
    },
    {
      id: 6,
      title: "Workforce Integration",
      description:
        "Seamless onboarding and cultural integration to ensure workers are productive from day one.",
      imageUrl: service4.src,
    },
  ];

  // Handle toggle click
  const handleToggle = () => {
    setIsForWorkers(!isForWorkers);
    setCurrentContent(!isForWorkers ? "workers" : "companies");
  };

  // Get current data based on mode
  const currentData =
    currentContent === "workers" ? workersData : companiesData;

  return (
    <div className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex flex-col items-center py-12 md:py-24 w-full">
      <div className="w-full flex flex-col items-start mb-8 md:mb-16">
        <h2 className="text-tertiary-green mb-1 font-primary text-start space-x-2 text-base md:text-xl tracking-wider leading-tight font-semibold">
          Our services
        </h2>
        <div className="text-primary text-start space-x-2 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-tight font-normal">
          <h1 className="relative group flex flex-col w-fit font-semibold overflow-hidden">
            <HighlightText
              className="font-semibold px-2 md:px-4 text-start"
              highlightColor="bg-tertiary-green"
              duration={700}
              delayAnimation={700}
            >
              End-to-End Solutions
            </HighlightText>{" "}
          </h1>{" "}
          {/* Title with crossfade animation */}
          <p className="relative mt-2 md:mt-0 h-8 sm:h-auto">
            {/* Workers text */}
            <span
              className={`absolute top-0 left-0 whitespace-normal sm:whitespace-nowrap  text-2xl md:text-4xl lg:text-5xl transition-opacity duration-500 ease-in-out  ${
                currentContent === "workers" ? "opacity-100" : "opacity-0"
              }`}
            >
              for People searching for Work
            </span>

            {/* Companies text */}
            <span
              className={`absolute top-0 left-0 whitespace-normal sm:whitespace-nowrap text-2xl md:text-4xl lg:text-5xltransition-opacity duration-500 ease-in-out  ${
                currentContent === "companies" ? "opacity-100" : "opacity-0"
              }`}
            >
              for Global Businesses
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-16 md:mt-20 w-full">
          {/* Description with crossfade animation */}
          <div className="relative max-w-full md:max-w-[831px] mb-6 md:mb-0">
            {/* Workers description */}
            <p
              className={`text-primary-gray text-left font-primary text-base md:text-lg lg:text-xl font-normal leading-normal absolute transition-opacity duration-500 ease-in-out ${
                currentContent === "workers" ? "opacity-100" : "opacity-0"
              }`}
            >
              Customized solutions for people looking for work opportunities in
              Global. From Construction to Tourism, from Hospitality to
              Manufacturing, we all all sectors.
            </p>

            {/* Companies description */}
            <p
              className={`text-primary-gray text-left font-primary text-base md:text-lg lg:text-xl font-normal leading-normal absolute transition-opacity duration-500 ease-in-out ${
                currentContent === "companies" ? "opacity-100" : "opacity-0"
              }`}
            >
              From sourcing skilled workers across Asia to handling
              documentation, visas, and relocation—Aarohi HR Solutions takes
              care of the entire hiring process, so you don&apos;t have to.
            </p>

            {/* Invisible spacer to maintain height */}
            <p className="text-primary-gray text-left font-primary text-base md:text-lg lg:text-xl font-normal leading-normal invisible">
              {currentContent === "workers"
                ? "Customized solutions for people looking for work opportunities in Global. From Construction to Tourism, from Hospitality to Manufacturing, we all all sectors."
                : "From sourcing skilled workers across Asia to handling documentation, visas, and relocation—Aarohi HR Solutions takes care of the entire hiring process, so you don't have to."}
            </p>
          </div>

          <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-0">
            <ToggleButton
              isActive={isForWorkers}
              onToggle={handleToggle}
              leftLabel="For workers"
              rightLabel="For Companies"
              className="mt-2 md:mt-0"
            />
          </div>
        </div>
      </div>

      {/* Cards grid with crossfade animation */}
      <div className="w-full relative">
        {/* Workers cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full absolute inset-0 transition-opacity duration-500 ease-in-out ${
            currentContent === "workers" ? "opacity-100" : "opacity-0"
          }`}
        >
          {workersData.map((service) => (
            <OurServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        {/* Companies cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full absolute inset-0 transition-opacity duration-500 ease-in-out ${
            currentContent === "companies" ? "opacity-100" : "opacity-0"
          }`}
        >
          {companiesData.map((service) => (
            <OurServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        {/* Invisible spacer grid to maintain height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full invisible">
          {currentData.map((service) => (
            <OurServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

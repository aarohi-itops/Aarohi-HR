"use client";

import React, {useState} from "react";
import IndustriesWeServeCard from "./components/IndustriesWeServeCard";
import Industries1 from "@/assets/LandingPage/IndustriesWeServe/industries1.png";
import Industries2 from "@/assets/LandingPage/IndustriesWeServe/industries2.png";
import Industries3 from "@/assets/LandingPage/IndustriesWeServe/industries3.png";
import Industries4 from "@/assets/LandingPage/IndustriesWeServe/industries4.png";
import Industries5 from "@/assets/LandingPage/IndustriesWeServe/industries5.png";
import Industries6 from "@/assets/LandingPage/IndustriesWeServe/industries6.png";
import Industries7 from "@/assets/LandingPage/IndustriesWeServe/industries7.webp";
import Industries8 from "@/assets/LandingPage/IndustriesWeServe/industries8.jpg";
import Industries9 from "@/assets/LandingPage/IndustriesWeServe/industries9.jpeg";
import Industries10 from "@/assets/LandingPage/IndustriesWeServe/industries10.jpg";
import Industries11 from "@/assets/LandingPage/IndustriesWeServe/industries11.jpg";
import Industries12 from "@/assets/LandingPage/IndustriesWeServe/industries12.png";
import Industries13 from "@/assets/LandingPage/IndustriesWeServe/industries13.jpg";
import Industries14 from "@/assets/LandingPage/IndustriesWeServe/industries14.jpg";
import Industries15 from "@/assets/LandingPage/IndustriesWeServe/industries15.jpg";
import Industries16 from "@/assets/LandingPage/IndustriesWeServe/industries16.webp";

import HighlightText from "@/services/HighlightText";
import {Button} from "@/components/ui/button";

export default function IndustriesWeServe() {
  const [showAll, setShowAll] = useState(false);

  const industriesData = [
    {
      id: 1,
      title: "Hospitality & Tourism",
      description: "Delivering exceptional guest experiences",
      imageUrl: Industries1.src,
      jobs: [
        "Hotel/Restaurant Manager",
        "Cooks/Chefs/Assistant Cook",
        "Front Desk Staff",
        "Housekeeping Staff",
        "Receptionist",
        "Waiters & Waitresses",
      ],
    },
    {
      id: 2,
      title: "Construction & Engineering",
      description: "Reliable manpower for your toughest projects",
      imageUrl: Industries2.src,
      jobs: [
        "Masons & Carpenters",
        "Electricians & Plumbers",
        "Steel Fixers & Riggers",
      ],
    },
    {
      id: 3,
      title: "Cleaning & Facility Management",
      description: "Keeping Global spotless and operational",
      imageUrl: Industries3.src,
      jobs: [
        "Commercial Cleaners",
        "Office Janitors",
        "Housekeepers",
        "Building Maintenance Staff",
        "Sanitation Workers",
      ],
    },
    {
      id: 4,
      title: "Logistics & Warehousing",
      description: "Organized, efficient, and on time",
      imageUrl: Industries4.src,
      jobs: [
        "Warehouse Assistants",
        "Inventory Clerks",
        " Loaders & Unloaders",
        "Delivery Helpers",
        "Forklift Operators",
      ],
    },
    {
      id: 5,
      title: "Hotels, F&B Service",
      description: "Serving up excellence across Global",
      imageUrl: Industries5.src,
      jobs: [
        "Restaurant Staff",
        "Kitchen Porters",

        "Cooks & Commis Chefsf",
        "Dishwashers",
        "Bakery Assistants",
      ],
    },
    {
      id: 6,
      title: "Kitchen & Pastry",
      description: "Keeping Global spotless and operational",
      imageUrl: Industries6.src,
      jobs: [
        "Chef & Commis Chef",
        "Helpers & Kitchen Staff",
        "Movers & Packers",
        "Commis Sushi",
        "Sushi Chef",
      ],
    },
    {
      id: 7,
      title: "Europe Special Categories",
      description: "Cyprus, Greece, Croatia, Malta, Austria, etc.",
      imageUrl: Industries7.src,
      jobs: [
        "Caregiver and nanny",
        "Domestic workers",
        "Housemaid and Nursemaid",
        "House cleaner",
      ],
    },
    {
      id: 8,
      title: "Oil And Gas",
      description: "",
      imageUrl: Industries8.src,
      jobs: [
        "Scaffolder, charge hand, foremen",
        "electrician, plumber/pipe fitter, skill fixer",
        "Heavy Equipment Operators",
        "Plant/road operators",
        "Concrete plump operator",
        "Helper",
      ],
    },
    {
      id: 9,
      title: "Supermarket",
      description: "",
      imageUrl: Industries9.src,
      jobs: [
        "Store & Warehouse Manager",
        "Cashier/Check Out Cashiers",
        "Trolley boys & stocker's ",
        "Warehouse helper ",
        "Delivery Helper, Storekeeper  ",
        "Sales Boy & Girl",
      ],
    },
    {
      id: 10,
      title: "Agriculture",
      description: "",
      imageUrl: Industries10.src,
      jobs: [
        "Farm worker, Grower",
        "Nursery workers, Sales representative",
        "Grain elevator operator",
        "Agricultural equipment technician",
        "Agricultural specialist & technicians",
        "Veterinary Doctors & Technicians ",
      ],
    },
    {
      id: 11,
      title: "Hospital and Pharmacy",
      description: "",
      imageUrl: Industries11.src,
      jobs: [
        "Doctors & Nurses",
        "Pharmacists",
        "Lab technicians",
        "X-ray technicians",
        "Consultants, Physicians",
        "Pharmacy check out cashiers",
      ],
    },
    {
      id: 12,
      title: " Security Guards",
      description: "",
      imageUrl: Industries12.src,
      jobs: [
        "Industrial and Construction Guards",
        "Life guard, unarmed guards",
        "Mobile guard, armed guard",
        "Residential guard, Ex- army, ex- police",
        "Corporate guards & bodyguards",
        "Screaming Officer ",
      ],
    },
    {
      id: 13,
      title: "Manufacturing",
      description: "",
      imageUrl: Industries13.src,
      jobs: [
        "Factory workers",
        "Machine operators",
        "Quality controllers",
        "Packers & Unpackers",
        "Labour workers",
        "Helpers",
      ],
    },
    {
      id: 14,
      title: "Information Technology",
      description: "",
      imageUrl: Industries14.src,
      jobs: [
        "Software Engineers",
        "Web Developers",
        "System Analysts",
        "Network Administrators",
        "Database Administrators",
        "IT Support Specialists",
      ],
    },
    {
      id: 15,
      title: "Office Personnel Management",
      description: "",
      imageUrl: Industries15.src,
      jobs: [
        "Office Manager",
        "Receptionist",
        "Secretary",
        "Office Clerk",
        "Office Assistant",
        "Office Boy & Girl",
        "Purchasers Clerk",
      ],
    },
    {
      id: 16,
      title: "Vehicle Equipment Operator",
      description: "",
      imageUrl: Industries16.src,
      jobs: [
        "Vehicle Equipment Operator",
        "Vehicle Driver",
        "Vehicle Cleaner",
        "Vehicle Washer",
        " Lorry, Trailer & Forklift Operators",
      ],
    },
  ];

  const displayedIndustries = showAll
    ? industriesData
    : industriesData.slice(0, 6);

  return (
    <div
      id="industriesWeServe"
      className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex flex-col items-center py-12 md:py-24 w-full"
    >
      <div className="w-full flex flex-col items-start mb-8 md:mb-16">
        <h2 className="text-tertiary-green mb-1 font-primary text-start space-x-2 text-base md:text-xl tracking-wider leading-tight font-semibold">
          Industries We Serve
        </h2>
        <div className="text-primary text-start space-x-2 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-tight font-normal">
          <h1 className="relative group flex flex-col w-fit font-semibold overflow-hidden">
            <HighlightText
              className="font-semibold px-2 md:px-4"
              highlightColor="bg-tertiary-green"
              duration={700}
              delayAnimation={700}
            >
              Connecting Great Talent
            </HighlightText>{" "}
            <span className="absolute inset-0 w-0 bg-tertiary-green group-hover:w-full transition-all duration-500 ease-in-out left-0 right-auto -z-10"></span>
          </h1>{" "}
          {/* Title without animation */}
          <span className="inline-block font-primary text-3xl md:text-4xl lg:text-5xl font-normal leading-normal">
            with the Right Opportunities
          </span>
        </div>

        <div className="flex justify-between items-center mt-4 md:mt-6">
          {/* Description without animation */}
          <p className="text-primary-gray text-left font-primary text-base md:text-lg lg:text-xl font-normal leading-normal">
            From fast-growing businesses in Global to skilled individuals across
            Asia—Aarohi HR Solutions bridges the gap between demand and talent
            across key industries. Whether you&apos;re hiring or job hunting,
            we&apos;re here to help you move forward.
            <br />
            <span className="text-primary-gray text-left font-primary text-base md:text-lg lg:text-[15px] font-normal leading-normal">
              <strong className="font-bold">Aarohi HR Solutions Pvt.</strong>
              Ltd. takes pride in its comprehensive recruitment offerings,
              providing a diverse range of skilled, semi-skilled, and unskilled
              workers across various categories. From aviation and cruise to oil
              and gas, information technology, plantations, healthcare,
              supermarkets, manufacturing, security, and hospitality, our
              extensive database and rigorous selection process ensure that we
              connect businesses with the right talent. Whether you need highly
              specialized professionals or dedicated individuals for essential
              roles, we are committed to meeting your recruitment needs with a
              versatile pool of candidates. Our emphasis on inclusivity spans
              across all categories, ensuring that skilled expertise,
              competence, and dedication are seamlessly integrated into every
              placement we facilitate
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 ">
        {displayedIndustries.map((industry) => (
          <IndustriesWeServeCard
            key={industry.id}
            title={industry.title}
            description={industry.description}
            imageUrl={industry.imageUrl}
            jobs={industry.jobs}
          />
        ))}
      </div>

      <Button
        onClick={() => setShowAll(!showAll)}
        variant="withArrow"
        className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group hover:cursor-pointer mt-16"
        withAnimatedArrow
        arrowSize={28}
        StyleBg="#0091e6"
      >
        <span>{showAll ? "Show Less Industries" : "Show More Industries"}</span>
      </Button>
    </div>
  );
}

import React from "react";
import Hero from "../../components/atom/Hero";
import Card, { CardData } from "./components/Card";
import company1 from "@/assets/Services-assets/ForCompanies/company1.png";
import company2 from "@/assets/Services-assets/ForCompanies/company2.png";
import company3 from "@/assets/Services-assets/ForCompanies/company3.png";
import company4 from "@/assets/Services-assets/ForCompanies/company4.png";
import company5 from "@/assets/LandingPage/OurServices/service6.png";
import company6 from "@/assets/Services-assets/ForCompanies/company6.png";
import DoubleCIrcleCard from "@/components/atom/DoubleCircleSectionCard";
import OurOpenings from "./components/OurOpenings";

import Matrix from "./components/Matrix";

// Hero data
const heroData = {
  highlightText: "End-to-End Solutions",
  subtitle: "for Companies",
  description: "From sourcing skilled workers across Asia to handling documentation, visas, and relocation—FindStaff takes care of the entire hiring process, so you don't have to."
};

// Companies data moved to parent component
const companiesData: CardData[] = [
  {
    id: "1",
    title: "Skill Assessment & Job Finding",
    description:
      "We assess your skills and connect you to jobs that best match your abilities, helping you succeed faster and with confidence.",
    benefits: [
      "Skill-based job matching",
      "Higher chances of selection",
      "Better long-term fit",
    ],
    image: company1,
    reversed: false,
  },
  {
    id: "2",
    title: "International Recruitment",
    description:
      "We connect skilled Asian workers to verified jobs abroad with a safe, transparent process from start to finish.",
    benefits: [
      "Legal, ethical job placements",
      "Verified Dubai employers",
      "Help with visas & documents",
      "Support at every step",
    ],
    image: company2,
    reversed: true,
  },
  {
    id: "3",
    title: "Visa & Work Permit Processing",
    description:
      "We handle your visa and work permit process from start to finish, making sure everything is legal, fast, and stress-free.",
    benefits: [
      "Complete visa application support",
      "Legal documentation handled",
      "Fast and transparent process",
    ],
    image: company3,
    reversed: false,
  },
  {
    id: "4",
    title: "Employer Document Preparation",
    description:
      "We help you gather and prepare all the documents your future employer needs, ensuring nothing delays your job placement.",
    benefits: [
      "Organized and complete documentation",
      "Guidance on contract signing",
      "Ensures faster processing",
    ],
    image: company4,
    reversed: true,
  },

  {
    id: "5",
    title: "Relocation & Travel Coordination",
    description:
      "From flights to accommodation, we coordinate your move to Dubai so you arrive prepared, stress-free, and ready to start work.",
    benefits: [
      "Flight booking and itinerary support",
      "Arrival coordination and pickup",
      "Temporary accommodation guidance",
    ],
    image: company5,
    reversed: false,
  },

  {
    id: "6",
    title: "Onboarding & Local Support",
    description:
      "We provide seamless onboarding with personalized support and local assistance, helping new hires settle in quickly and perform at their best.",
    benefits: [
      "Smooth Onboarding Process",
      "Customized Training",
      "Ongoing Support",
      "Local Assistance",
    ],
    image: company6,
    reversed: true,
  },
];

export default function ForCompanies() {
  return (
    <>
      <Hero 
        smallHeading="Our Services"
        beforehighlight={""}
        highlightText={heroData.highlightText}
        subtitle={heroData.subtitle}
        description={heroData.description}
      />
     
        {companiesData.map((cardData) => (
          <Card key={cardData.id} cardData={cardData} />
        ))}

        <OurOpenings />
        <Matrix />
        <DoubleCIrcleCard 
          heading="Ready to Take the Next Step?"
          paragraph="We’re just a call or message away. Whether you’re a business or a job seeker, our team is here to make the process simple, legal, and stress-free."
          buttonText="Talk to Our Team"
        />
    </>
  );
}

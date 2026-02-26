import React from "react";
import Hero from "../../components/atom/Hero";
import Card, { CardData } from "./components/Card";
import employee1 from "@/assets/Services-assets/ForEmployee/employee1.png";
import employee2 from "@/assets/Services-assets/ForEmployee/employee2.png";
import company3 from "@/assets/Services-assets/ForCompanies/company3.png";
import company4 from "@/assets/Services-assets/ForCompanies/company4.png";
import company5 from "@/assets/LandingPage/OurServices/service6.png";

import company6 from "@/assets/Services-assets/ForCompanies/company6.png";
import DoubleCIrcleCard from "@/components/atom/DoubleCircleSectionCard";
// Hero data
const heroData = {
  highlightText: "End-to-End Solutions",
  subtitle: "for People searching for Work",
  description: "Customized solutions for people looking for work opportunities in Global. From Construction to Tourism, from Hospitality to Manufacturing, we cover all sectors."
};

// Companies data moved to parent component
const companiesData: CardData[] = [
  {
    id: "1",
    title: "International Recruitment",
    description:
      "We connect businesses with top global talent, offering efficient and tailored recruitment solutions to meet international hiring needs.",
    benefits: [
      "Global Talent Pool",
      "Tailored Services",
      "Streamlined Process",
      "Cultural Fit",
    ],
    image: employee1,
    reversed: true,
  },
  {
    id: "2",
    title: "Candidate Vetting & Skill Assessment",
    description:
      "We ensure that only the most qualified candidates make it through to you. Our thorough vetting process and skill assessments help identify top talent that matches your specific requirements.",
    benefits: [
      "In-Depth Screening",
      "Cultural Fit Assessment",
      "Reduced Hiring Risks",
      
    ],
    image: employee2,
    reversed: false,
  },
  {
    id: "3",
    title: "Visa & Work Permit Processing",
    description:
      "We simplify the complex process of obtaining visas and work permits, ensuring your international hires can begin work without delays.",
    benefits: [
      "Seamless Processing",
      "Expert Guidance",
      "Compliance Assurance",
    ],
    image: company3,
    reversed: true,
  },
  {
    id: "4",
    title: "Relocation & Travel Coordination",
    description:
      "We assist candidates with every aspect of relocation, from travel arrangements to settling into their new role and location.",
    benefits: [
      "Travel Arrangements",
      "Relocation Support",
      "Ongoing Support",
    ],
    image: company5,
    reversed: false,
  },

  {
    id: "5",
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
    reversed: false,
  },
];

export default function ForEmployees() {
  return (
    <>
      <Hero 
        smallHeading="Our Services"
        highlightText={heroData.highlightText}
        subtitle={heroData.subtitle}
        description={heroData.description} beforehighlight={""}      />

        {companiesData.map((cardData) => (
          <Card key={cardData.id} cardData={cardData} />
        ))}

        <DoubleCIrcleCard 
          heading="Ready to Take the Next Step?"
          paragraph="We’re just a call or message away. Whether you’re a business or a job seeker, our team is here to make the process simple, legal, and stress-free."
          buttonText="Talk to Our Team"
        />

    </>
  );
}

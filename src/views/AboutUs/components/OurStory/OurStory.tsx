import HighlightText from "@/services/HighlightText";
import Image from "next/image";
import React from "react";
import Map from "@/assets/AboutUs/map.svg";

export default function OurStory() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12">
      <header className="text-start flex flex-col items-start justify-start gap-2 mb-24">
        <h2 className="text-primary-gray text-lg font-semibold">Our Story</h2>
        <h1 className="text-primary  text-start font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl max-w-5xl mt-16 md:mt-0">
         <div className="flex items-center gap-2">
         <span> From Nepal to</span>{" "}
          <HighlightText
            className="font-semibold px-1 sm:px-2 md:px-4"
            highlightColor="bg-tertiary-green"
            duration={700}
            delayAnimation={700}
          >
            the World
          </HighlightText>{" "}
         </div>
          <br />
          <span className="hidden  md:block -mt-10">
            {" "}
            Connecting Talent with opportunity
          </span>
          <span className="block md:hidden -mt-10 ">
            {" "}
            Connecting Talent with opportunity
          </span>
        </h1>
        <p className="text-primary-gray   mt-6 text-start font-primary text-base  font-normal leading-normal">
          Human Resources has became a highly competitive industry, reflecting
          several trends in the global market place, notably increasing demand
          for skilled people, consolidation among clients and employment service
          industry itself. Hence, as per our expertise of the past decade, our
          excellent network with the Overseas as well as Domestic Clients,
          professionally managed team, who are recognized in the field of Human
          Resources, has helped innumerable applicants reach the zenith of their
          career through our credibility, professional advice, promptness &
          ethical action. 
          <br />

          Our Success stands for our dedication towards our
          “Three C philosophy”, Co-ordination, Co-operation and Communication.
          We manage these trends by leveraging established strengths including
          one of the employment service industry’s best recognized brands,
          Aarohi HR Solutions (P.) Ltd. having Govt. Reg, Number: 1244/074/075
          accredited with the DOFE Department of Foreign Employment, Nepal. Our
          strategy is focused in providing both the unskilled, skilled and
          professional workforce by offering a complete range of services
          including recruitment, assessment and selection, training,
          outsourcing, consulting and professional services
        </p>
      </header>
      <section className="w-full h-full flex items-center justify-center">
        {/* Image */}
        <Image
          src={Map}
          priority
          quality={100}
          alt="Our Story Image"
          className="w-full max-w-5xl h-auto object-cover "
        />
      </section>
    </div>
  );
}

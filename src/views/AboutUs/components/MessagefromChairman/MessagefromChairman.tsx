import Image from "next/image";
import React from "react";
import Chairman from "@/assets/AboutUs/chairman.jpg";
import CurvArrow from "@/assets/AboutUs/curveArrow.svg";
import HighlightText from "@/services/HighlightText";

export default function MessagefromChairman() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 flex flex-col items-center justify-center py-16">
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-center md:justify-between gap-8 ">
        <section className=" w-full md:w-4/5 flex flex-col items-start md:items-left gap-2 mb-6">
          <h2 className="text-secondary-green text-xl font-semi-bold leading-tight">
            About us
          </h2>
          <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl  font-normal leading-tight tracking-normal flex items-center mb-2">
            <span className=" mr-2">Message from the</span>
            <HighlightText
              className="font-semibold px-1 sm:px-2 md:px-4 "
              highlightColor="bg-tertiary-green"
              duration={700}
              delayAnimation={700}
            >
              Chairman
            </HighlightText>
          </h1>
          <div className="flex max-w-2xl flex-col items-start justify-start ">
            <p className="text-[#334155] text-start text-base">
              At Aarohi HR Solutions, our mission is to bridge the gap between
              skilled talent and global opportunities. Over the years, we have
              remained committed to delivering ethical, efficient, and reliable
              recruitment solutions that empower both businesses and
              individuals.
            </p>
            <p className="text-[#334155] text-start text-base mt-4">
              Our success is built on trust, transparency, and a deep
              understanding of the industries we serve. We take pride in not
              only connecting people with jobs but in shaping careers and
              building futures.
            </p>
            <p className="text-[#334155] text-start text-base mt-4">
              Thank you for choosing Aarohi HR Solutions. We look forward to
              being a part of your journey.
            </p>
            <p className="text-[#334155] text-start text-base mt-4">
              <span className="font-semibold">Arjun Thapa</span>
              <br />
              Chairman, Aarohi HR Solutions
            </p>
          </div>
        </section>
        <section className="w-full md:w-2/5  flex justify-start items-start relative mt-8 md:mt-0 ">
          <Image
            src={Chairman}
            alt="Chairman"
            className="w-full h-full rounded-full object-cover object-center shadow-lg"
          />
          <Image
            src={CurvArrow}
            alt="CurvArrow"
            width={134}
            height={94}
            className="absolute -top-10 -left-20"
          />
        </section>
      </div>
    </div>
  );
}

import HighlightText from "@/services/HighlightText";
import Image from "next/image";
import React from "react";
import YoutubeBg from "@/assets/AboutUs/youtubebg.svg";
import Play from "@/assets/AboutUs/play.svg";

export default function HeroAboutSection() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 flex flex-col items-center py-12">
      <header className="flex flex-col items-center justify-items-start  w-full mb-16 ">
        <h1 className="text-primary text-center tracking-wider leading-[1.15] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl max-w-5xl mt-16 md:mt-0">
         <div className="flex items-center justify-center gap-4">
          <span>From</span>{" "}
          <HighlightText
            className="font-semibold px-1 sm:px-2 md:px-4"
            highlightColor="bg-tertiary-green"
            duration={700}
            delayAnimation={700}
          >
            Asia to the World
          </HighlightText>{" "}
          </div>
          <span className="sm:hidden">Seamless Staffing Solutions</span>
          <span className="hidden sm:inline">Seamless Staffing Solutions</span>
        </h1>
        <p className="text-primary-gray max-w-[874px]  mt-6 text-center font-primary text-base sm:text-lg md:text-xl font-normal leading-normal">
          We connect skilled individuals from Asia with growing companies in
          the World — making global employment accessible, reliable, and
          life-changing.
        </p>
      </header>
      <div className=" relative ">
        <Image
          src={YoutubeBg}
          alt="hero-about-section"
          className="w-full h-full object-cover"
        />
        <Image
          src={Play}
          alt="hero-about-section"
          className="w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-300 hover:cursor-pointer"
        />
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import React from "react";
import BigImage from "../../../../../assets/LandingPage/HowItWorks/big-image.svg";
import SmallImage from "../../../../../assets/LandingPage/HowItWorks/small-image.svg";

export default function FrameImage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-20 bg-gradient-to-b from-white to-transparent z-20"></div>

      <div className="relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-[650px] mt-5 md:mt-10 h-auto group z-10">
        <div className="relative w-full h-full">
          <Image
            src={BigImage}
            alt="Frame image"
            className="w-full h-auto object-contain transition-opacity duration-500 group-hover:opacity-0"
            width={650}
            height={650}
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 650px"
            priority
            quality={90}
          />
          <Image
            src={SmallImage}
            alt="Frame image"
            className="absolute inset-0 w-full h-auto object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            width={650}
            height={650}
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 650px"
            loading="lazy"
            quality={90}
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-5 md:h-10 bg-gradient-to-t from-white via-white to-transparent z-20"></div>
    </div>
  );
}

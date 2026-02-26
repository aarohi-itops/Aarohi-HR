"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";

import Logo from "../../../../../assets/Navbar/Logo.svg";
import Vector2 from "../../../../../assets/LandingPage/HowItWorks/Vector2.svg";
import Vector1 from "../../../../../assets/LandingPage/HowItWorks/Vector1.svg";
import Vector3 from "../../../../../assets/LandingPage/HowItWorks/Vector3.svg";
import Vector4 from "../../../../../assets/LandingPage/HowItWorks/Vector4.svg";
import Vector5 from "../../../../../assets/LandingPage/HowItWorks/Vector5.svg";
import Vector6 from "../../../../../assets/LandingPage/HowItWorks/Vector6.svg";

export default function LogoWithJobFields() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTopVector, setCurrentTopVector] = useState(Vector3);
  const [currentBottomVector, setCurrentBottomVector] = useState(Vector4);
  const [topOpacity, setTopOpacity] = useState(1);
  const [bottomOpacity, setBottomOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        // Fade out current images
        setTopOpacity(0);
        setBottomOpacity(0);

        // Change images after fade out completes
        setTimeout(() => {
          setCurrentTopVector((prev: StaticImageData) =>
            prev === Vector3 ? Vector5 : Vector3
          );
          setCurrentBottomVector((prev: StaticImageData) =>
            prev === Vector4 ? Vector6 : Vector4
          );

          // Fade in new images
          setTimeout(() => {
            setTopOpacity(1);
            setBottomOpacity(1);
          }, 50);
        }, 300);
      }
    }, 1000); // Change every second

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="absolute inline-flex flex-col items-center gap-8 md:gap-10 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentTopVector(Vector3);
        setCurrentBottomVector(Vector4);
        setTopOpacity(1);
        setBottomOpacity(1);
      }}
    >
      {/* Logo in separate div with higher z-index */}
      <div className="relative z-50 h-full w-full p-1.5 md:p-2 rounded-xl md:rounded-2xl border border-black/[0.08] bg-white shadow-[0_1px_4px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.1)] overflow-visible">
        <Image 
          src={Logo} 
          alt="Logo" 
          width={80} 
          height={35} 
          className="w-[60px] md:w-[80px] h-auto"
          sizes="(max-width: 768px) 60px, 80px"
          priority
          quality={95}
        />
        <Image
          src={isHovered ? Vector2 : currentTopVector}
          alt="Avatar"
          width={260}
          style={{
            opacity: isHovered ? 1 : topOpacity,
            transition: "opacity 300ms ease-in-out",
          }}
          className="absolute -top-3 min-w-[130px] md:min-w-[175px] -left-7 md:-left-10 z-10"
          height={260}
          sizes="(max-width: 768px) 130px, 175px"
          loading="eager"
          quality={85}
        />
        <Image
          src={isHovered ? Vector1 : currentBottomVector}
          alt="Avatar"
          width={260}
          style={{
            opacity: isHovered ? 1 : bottomOpacity,
            transition: "opacity 300ms ease-in-out",
          }}
          className="absolute -bottom-3 min-w-[130px] md:min-w-[175px] -left-7 md:-left-10 z-10"
          height={260}
          sizes="(max-width: 768px) 130px, 175px"
          loading="eager"
          quality={85}
        />
        <p className="absolute top-1 -left-24 md:-left-36 text-primary-gray text-xs md:text-sm font-primary font-normal leading-normal bg-secondary-green rounded-lg md:rounded-xl px-2 md:px-3 py-1 md:py-2 text-white shadow-xl">
          Employee
        </p>
        <p className="absolute bottom-0 -right-28 md:-right-40 text-primary-gray text-xs md:text-sm font-primary font-normal leading-normal bg-[#9333EA] rounded-lg md:rounded-xl px-2 md:px-3 py-1 md:py-2 text-white shadow-xl">
          Organization
        </p>
      </div>
    </div>
  );
}

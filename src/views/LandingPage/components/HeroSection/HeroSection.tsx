"use client";

// import heroImage from "@/assets/LandingPage/HeroSection/hero.png";
import heroImage from "@/assets/AboutUs/map.svg";
import {Button} from "@/components/ui/button";
import HighlightText from "@/services/HighlightText";
// import NameDisplayCards from "./components/NameDisplayCards";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-[calc(90vh-88px)] container mx-auto max-w-7xl px-4 md:px-6 flex flex-col items-center relative">
      <div className="relative z-10 px-4 flex flex-col items-center justify-items-start mt-5 w-full">
        <h1 className="text-primary  text-center tracking-wider leading-[1.15] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl max-w-5xl mt-16 md:mt-0">
          <div className="flex items-center justify-center gap-4">
            <span className="">Bringing</span>{" "}
            <HighlightText
              className="font-semibold px-1 sm:px-2 md:px-4"
              highlightColor="bg-tertiary-green"
              duration={700}
              delayAnimation={700}
            >
              Asia&apos;s Top Talent
            </HighlightText>{" "}
          </div>
          to power <span className="sm:hidden">Global Growth</span>
          <span className="hidden sm:inline">Global Growth</span>
        </h1>
        <p className="text-primary-gray max-w-[874px]  mt-6 text-center font-primary text-base sm:text-lg md:text-xl font-normal leading-normal">
          We&apos;re an trusted recruitment agency that handle all your visa,
          and relocation support—tailored for global fast-paced industries.
        </p>
        <div className="mt-16  md:mt-10 flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto justify-center">
          <Link
            href="#industriesWeServe"
            onClick={(e) => scrollToSection(e, "industriesWeServe")}
          >
            <Button
              variant="withArrow"
              className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group hover:cursor-pointer"
              withAnimatedArrow
              arrowSize={28}
              StyleBg="#0091e6"
            >
              <span>Find your Sector</span>
            </Button>
          </Link>
          <Link href="/contactus">
            <Button
              variant="withoutArrow"
              className="h-14 w-[200px] px-4 py-3 relative overflow-hidden font-primary text-sm font-normal group hover:cursor-pointer"
              StyleBg="#E2F7E8"
            >
              <span>Talk to Our Team</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full hidden md:block absolute inset-0">
        {/* <NameDisplayCards /> */}
      </div>

      <div className="absolute bottom-0 md:-bottom-64 left-0 right-0 flex justify-center">
        <Image
          src={heroImage}
          alt="World map"
          width={1500}
          height={500}
          priority
        />
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import React, {useState} from "react";
import bg1 from "../../../../assets/LandingPage/HowItWorks/bg1.png";
import LogoWithJobFields from "./components/LogoWithJobFields";
import FrameImage from "./components/FrameImage";
import MultipleCards from "./components/MultipleCards";
import EmployeeWithOrganization from "./components/EmployeeWithOrganization";
import HighlightText from "@/services/HighlightText";
import GroupCards from "../../../../assets/LandingPage/WorkForceSuccess/GroupCards.svg";
import ToggleButton from "@/components/atom/ToggleButton";

export default function HowItWorksSection() {
  const [isForWorkers, setIsForWorkers] = useState(true);
  const [currentContent, setCurrentContent] = useState<"workers" | "companies">(
    "workers"
  );

  // Handle toggle click
  const handleToggle = () => {
    setIsForWorkers(!isForWorkers);
    setCurrentContent(!isForWorkers ? "workers" : "companies");
  };

  return (
    <div className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex flex-col items-center py-12 md:py-24 w-full">
      <header className="w-full flex flex-col items-center">
        <h2 className="text-tertiary-green mb-1 font-primary text-center space-x-2 text-base md:text-xl tracking-wider leading-tight font-semibold">
          How We Works
        </h2>
        <div className="text-primary text-center space-x-2 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-tight font-normal">
          {/* Title with crossfade animation */}
          <div className="relative">
            {/* Workers title */}
            <h1
              className={`w-full text-center transition-opacity duration-500 ease-in-out ${
                currentContent === "workers" ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="whitespace-nowrap w-full inline-block text-center">
                A Clear Path to
              </span>
              <br />
              <HighlightText
                className="font-semibold px-2 md:px-4 text-center"
                highlightColor="bg-tertiary-green"
                duration={700}
                delayAnimation={700}
              >
                Workforce Success
              </HighlightText>
            </h1>

            {/* Companies title */}
            <h1
              className={`w-full text-center absolute top-0 left-0 right-0 transition-opacity duration-500 ease-in-out ${
                currentContent === "companies" ? "opacity-100" : "opacity-0"
              }`}
            >
              <HighlightText
                className="font-semibold px-2 md:px-4 text-center"
                highlightColor="bg-tertiary-green"
                duration={700}
                delayAnimation={700}
              >
                Simplifying Hiring
              </HighlightText>{" "}
              <br />
            </h1>
            {currentContent === "companies" && (
              <p className="whitespace-nowrap text-primary-gray text-center font-primary text-xl lg:text-5xl font-normal leading-normal transition-opacity duration-500 ease-in-out absolute bottom-0 left-0 right-0 md:bottom-0 md:-left-36 ">
                For your Long term sustainability
              </p>
            )}
          </div>
        </div>

        {/* Description with crossfade animation */}
        <div className="relative max-w-[874px] mt-4 md:mt-6">
          {/* Workers description */}
          <p
            className={`text-primary-gray text-center font-primary text-base md:text-lg lg:text-xl font-normal leading-normal transition-opacity duration-500 ease-in-out absolute inset-0 ${
              currentContent === "workers" ? "opacity-100" : "opacity-0"
            }`}
          >
            From demand letters to deployment — our step-by-step recruitment
            process ensures a smooth, transparent, and efficient hiring
            experience.
          </p>

          {/* Companies description */}
          <p
            className={`text-primary-gray text-center font-primary text-base md:text-lg lg:text-xl font-normal leading-normal transition-opacity duration-500 ease-in-out absolute inset-0 ${
              currentContent === "companies" ? "opacity-100" : "opacity-0"
            }`}
          >
            At Aarohi HR Solutions, we help you land the job that matches your
            skills and goals. You&apos;ll discover opportunities that truly fit
            & take the next step in your career with confidence.
          </p>

          {/* Invisible spacer */}
          <p className="text-primary-gray text-center font-primary text-base md:text-lg lg:text-xl font-normal leading-normal invisible">
            From demand letters to deployment — our step-by-step recruitment
            process ensures a smooth, transparent, and efficient hiring
            experience.
          </p>
        </div>
      </header>

      <section className="w-full flex flex-col items-center py-8 md:py-16">
        <ToggleButton
          isActive={isForWorkers}
          onToggle={handleToggle}
          leftLabel="For workers"
          rightLabel="For Companies"
        />
      </section>

      <div className="w-full flex flex-col gap-4 md:gap-6 justify-center items-center relative">
        {/* Workers view - GroupCards SVG */}
        <div
          className={`w-full absolute inset-0 transition-opacity duration-500 ease-in-out ${
            currentContent === "workers" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full flex justify-center">
            <Image
              src={GroupCards}
              alt="Workforce Success Process"
              className="w-full"
              priority
            />
          </div>
        </div>

        {/* Companies view - Original card layout */}
        <div
          className={`w-full absolute inset-0 transition-opacity duration-500 ease-in-out ${
            currentContent === "companies" ? "opacity-100" : "opacity-0"
          }`}
        >
          <section className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6">
            <div className="w-full md:w-2/5 border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden flex flex-col">
              <div className="w-full h-[200px] md:h-[270px] flex-shrink-0 flex justify-center items-center rounded-t-xl md:rounded-t-2xl relative">
                <Image
                  src={bg1}
                  alt="Background image"
                  className="rounded-t-xl md:rounded-t-2xl"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  style={{objectFit: "cover", objectPosition: "center"}}
                />
                <LogoWithJobFields />
              </div>
              <div className="w-full flex flex-col p-4 md:p-6 flex-grow">
                <p className="font-primary text-lg md:text-xl font-semibold mb-1">
                  Tell us your job requirements
                </p>
                <p className="font-primary text-primary-gray text-xs md:text-sm font-normal">
                  Share your skills, experience, and what kind of job
                  you&apos;re looking for. We take the time to understand your
                  goals and to find the right match for your career journey.
                </p>
              </div>
            </div>
            <div className="w-full md:w-3/5 border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden flex flex-col">
              <div className="w-full h-[200px] md:h-[270px] flex-shrink-0 flex justify-center items-center rounded-t-xl md:rounded-t-2xl relative">
                <Image
                  src={bg1}
                  alt="Background image"
                  className="rounded-t-xl md:rounded-t-2xl"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                  style={{objectFit: "cover", objectPosition: "center"}}
                />
                <FrameImage />
              </div>
              <div className="w-full flex flex-col p-4 md:p-6 flex-grow">
                <p className="font-primary text-lg md:text-xl font-semibold mb-1">
                  We&apos;ll find & recommend best Job opportunity
                </p>
                <p className="font-primary text-primary-gray max-w-full md:max-w-[70%] text-xs md:text-sm font-normal">
                  Using your profile and preferences, we search through top job
                  openings and recommend the best fit — saving you time and
                  bringing you one step closer to your dream job.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 mt-4 md:mt-6">
            <div className="w-full md:w-3/5 border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden flex flex-col">
              <div className="w-full h-[200px] md:h-[270px] flex-shrink-0 flex justify-center items-center rounded-t-xl md:rounded-t-2xl relative overflow-hidden">
                <Image
                  src={bg1}
                  alt="Background image"
                  className="rounded-t-xl md:rounded-t-2xl"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                  style={{objectFit: "cover", objectPosition: "center"}}
                />
                <MultipleCards />
              </div>
              <div className="w-full flex flex-col p-4 md:p-6 flex-grow">
                <p className="font-primary text-lg md:text-xl font-semibold mb-1">
                  We Handle all your Visas & Documentation
                </p>
                <p className="font-primary text-primary-gray max-w-full md:max-w-[70%] text-xs md:text-sm font-normal">
                  Our experts manage all the paperwork, from visa applications
                  to documentation. You can relax knowing every detail is taken
                  care of, quickly, correctly, and without stress.
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/5 border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden flex flex-col">
              <div className="w-full h-[200px] md:h-[270px] flex-shrink-0 flex justify-center items-center rounded-t-xl md:rounded-t-2xl relative">
                <Image
                  src={bg1}
                  alt="Background image"
                  className="rounded-t-xl md:rounded-t-2xl"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  style={{objectFit: "cover", objectPosition: "center"}}
                />
                <EmployeeWithOrganization />
              </div>
              <div className="w-full flex flex-col p-4 md:p-6 flex-grow">
                <p className="font-primary text-lg md:text-xl font-semibold mb-1">
                  Relocation & Work starts
                </p>
                <p className="font-primary text-primary-gray text-xs md:text-sm font-normal">
                  We guide you through your move — from flights and housing to
                  settling in. With our full support, you can confidently
                  relocate and start working without any hassle.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Invisible spacer to maintain height */}
        <div className="w-full invisible">
          {currentContent === "workers" ? (
            <div className="w-full">
              <Image
                src={GroupCards}
                alt="Workforce Success Process"
                className="w-full"
                priority
              />
            </div>
          ) : (
            <>
              <section className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6">
                <div className="w-full md:w-2/5 border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden flex flex-col">
                  <div className="w-full h-[200px] md:h-[270px] flex-shrink-0"></div>
                  <div className="w-full flex flex-col p-4 md:p-6 flex-grow"></div>
                </div>
                <div className="w-full md:w-3/5 border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden flex flex-col">
                  <div className="w-full h-[200px] md:h-[270px] flex-shrink-0"></div>
                  <div className="w-full flex flex-col p-4 md:p-6 flex-grow"></div>
                </div>
              </section>
              <section className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 mt-4 md:mt-6">
                <div className="w-full md:w-3/5 border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden flex flex-col">
                  <div className="w-full h-[200px] md:h-[270px] flex-shrink-0"></div>
                  <div className="w-full flex flex-col p-4 md:p-6 flex-grow"></div>
                </div>
                <div className="w-full md:w-2/5 border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden flex flex-col">
                  <div className="w-full h-[200px] md:h-[270px] flex-shrink-0"></div>
                  <div className="w-full flex flex-col p-4 md:p-6 flex-grow"></div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

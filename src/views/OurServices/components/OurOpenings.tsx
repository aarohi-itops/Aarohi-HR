"use client";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import Global from "@/assets/Services-assets/global.svg";

import Clock from "@/assets/Services-assets/clock.svg";
import People from "@/assets/Services-assets/people.svg";

import Image from "next/image";
import jobsData from "@/data/jobsData";
import HighlightText from "@/services/HighlightText";
import Link from "next/link";

export default function OurOpenings() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="container mx-auto max-w-7xl items-center justify-center px-4 md:px-6 pt-16 font-primary">
      <header className="w-full flex flex-col items-start mb-8 md:mb-16">
        <h2 className="text-tertiary-green mb-1 font-primary text-start text-base md:text-xl leading-tight font-semibold">
          Our Openings
        </h2>
        <h1  className="text-primary  text-start tracking-wider leading-[1.15] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl max-w-5xl ">
        <HighlightText
          className="font-semibold px-2 md:px-4 "
          highlightColor="bg-tertiary-green"
          duration={700}
          delayAnimation={700}
        >
          Explore Opportunities
        </HighlightText>
        </h1>
      
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-4">
          <p className="text-primary-gray max-w-4xl font-primary text-lg font-normal leading-normal">
            Discover exciting internship and job openings abroad, handpicked
            from verified and trusted employers. Start your international career
            journey with confidence and the right opportunities.
          </p>
          <div className="flex items-center gap-3 self-end mt-4 md:mt-0">
            <button 
              ref={prevRef}
              className="bg-quaternary-green p-4 rounded-full hover:bg-opacity-80 transition-colors"
            >
              <ArrowLeft className="h-6 w-6 text-secondary-green" />
            </button>
            <button 
              ref={nextRef}
              className="bg-quaternary-green p-4 rounded-full hover:bg-opacity-80 transition-colors"
            >
              <ArrowRight className="h-6 w-6 text-secondary-green" />
            </button>
          </div>
        </div>
      </header>
      <section>
        <Swiper
          modules={[Navigation, Mousewheel, Keyboard, FreeMode]}
          slidesPerView="auto"
          spaceBetween={24}
          grabCursor={true}
          mousewheel={true}
          keyboard={{
            enabled: true,
          }}
          freeMode={{
            enabled: true,
            sticky: false,
            momentum: true,
            momentumRatio: 0.25,
          }}
          cssMode={false}
          draggable={true}
          onInit={(swiper) => {
            // @ts-expect-error - Swiper navigation params type mismatch
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error - Swiper navigation params type mismatch
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="w-full"
        >
          {jobsData.map((job) => (
            <SwiperSlide key={job.id} className="!w-auto">
              <div className="flex flex-col w-[320px] h-[280px] p-4 gap-2 rounded-2xl border border-[#E2E8F0] bg-white">
              <Link href={`/jobs/${job.id}`} className="flex flex-col h-full">

                <Image 
                  src={job.imageUrl} 
                  alt={`${job.company} logo`} 
                  className="h-[101px] w-full object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-[#0F172A] text-2xl font-medium mt-3 truncate">
                      {job.company}
                    </h3>
                    <div className="flex items-center gap-2 mt-3">
                      <Image src={Global} alt="global" className="h-5 w-5 text-gray-500" />
                      <span className="text-[#475569] text-base font-normal ">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Image src={Clock} alt="people" className="h-5 w-5 text-gray-500" />
                      <span className="text-[#475569] text-base font-normal ">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={People} alt="people" className="h-5 w-5 text-gray-500" />
                      <span className="text-[#475569] text-base font-normal ">
                        {job.employees}
                      </span>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

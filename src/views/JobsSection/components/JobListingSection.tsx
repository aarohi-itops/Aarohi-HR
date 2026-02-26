"use client"
import React from "react";
import Global from "@/assets/Services-assets/global.svg";

import Clock from "@/assets/Services-assets/clock.svg";
import People from "@/assets/Services-assets/people.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import jobsData from "@/data/jobsData";

export default function JobListingSection() {
  return (
    <div className="container mx-auto max-w-5xl px-4 md:px-6 py-8 font-primary">
      <div className="flex flex-col gap-6">
        {jobsData.map((jobData) => (
          <div 
            key={jobData.id}
            className="flex flex-col md:flex-row w-full items-center justify-between rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden p-4 hover:shadow-md transition-shadow"
          >
            <Link href={`/jobs/${jobData.id}`} className="w-full md:flex">
              <div className="w-full md:w-[253px] h-[101px] md:mr-4">
                <Image
                  src={jobData.imageUrl}
                  alt={`${jobData.company} logo`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 w-full py-3 md:py-0">
                <h3 className="text-[#0F172A] text-2xl font-medium">
                  {jobData.company}
                </h3>
                <div className="flex items-center flex-wrap justify-start gap-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src={Global}
                      alt="global"
                      className="h-5 w-5 text-gray-500"
                    />
                    <span className="text-[#475569] text-base font-normal">
                      {jobData.location}
                    </span>
                  </div>
                
                  <div className="flex items-center gap-2">
                    <Image
                      src={Clock}
                      alt="clock"
                      className="h-5 w-5 text-gray-500"
                    />
                    <span className="text-[#475569] text-base font-normal">
                      {jobData.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src={People}
                      alt="people"
                      className="h-5 w-5 text-gray-500"
                    />
                    <span className="text-[#475569] text-base font-normal">
                      {jobData.employees}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex items-center mt-4 md:mt-0 md:ml-4">
              <Link href={`/jobs/${jobData.id}`}>
                <Button
                  variant="withArrow"
                  className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group hover:cursor-pointer"
                  withAnimatedArrow
                  arrowSize={28}
                  StyleBg="#0091e6"
                >
                  <span>View Details</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

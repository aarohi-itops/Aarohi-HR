"use client";

import {Button} from "@/components/ui/button";
import React from "react";
import { saveAs } from 'file-saver';

// Quarter-circle group component with isolated animation
const QuarterCircleGroup = () => {
  return (
    <div className="absolute top-0 right-0 pointer-events-none z-0">
      <div className="absolute top-0 right-0 w-56 h-56">
        <div
          className="quarter-circle-animation"
          style={{transformOrigin: "top right"}}
        >
          {/* Largest quarter-circle */}
          <div
            className={`absolute top-0 -right-16 w-[600px] h-[600px] rounded-bl-full bg-blue-100`}
          />
          {/* Middle quarter-circle */}
          <div
            className={`absolute top-0 -right-12 w-[500px] h-[500px] rounded-bl-full bg-blue-200/40`}
          />
          {/* Smallest quarter-circle */}
          <div
            className={`absolute top-0 -right-8 w-[400px] h-[400px]  rounded-bl-full bg-blue-300/30`}
          />
        </div>
      </div>
    </div>
  );
};

export default function DiscoverInDetail() {
  const handleDownloadBrochure = () => {
    saveAs("/AHRS_Company_Profile.pdf", "AHRS_Company_Profile.pdf");
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 py-14 font-primary">
      <div className="bg-[#0091e614] rounded-[24px] shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <QuarterCircleGroup />
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="flex flex-col max-w-2xl items-start justify-center gap-2">
            <h1 className="text-[#020617] text-[36px] font-bold">
              Discover Aarohi HR Solutions in Detail
            </h1>
            <p className="text-[#334155] text-base font-normal leading-tight">
              Learn more about our recruitment process, global talent network,
              and end-to-end support services. Our brochure provides a complete
              overview of how Aarohi HR Solutions helps businesses hire smarter
              and faster across borders.
            </p>
          </div>
          <div className="flex items-center justify-end mt-4 md:mt-0">
            <Button
              variant="withArrow"
              className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group"
              withAnimatedArrow
              arrowSize={28}
              onClick={handleDownloadBrochure}
              StyleBg="#0091e6"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

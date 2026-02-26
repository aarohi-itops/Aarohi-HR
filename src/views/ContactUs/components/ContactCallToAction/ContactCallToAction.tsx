import {Button} from "@/components/ui/button";
import React from "react";

// Quarter-circle group component with isolated animation
const CircleGroup = () => {
  return (
    <div className="absolute top-0 right-0 pointer-events-none z-0">
      <div className="absolute top-0 right-0 w-56 h-56">
        <div
          className="full-circle-animation"
          style={{transformOrigin: "center"}}
        >
          {/* Largest circle */}
          <div
            className={`absolute top-6 -right-24 w-[400px] h-[400px] rounded-full bg-blue-100`}
          />
          {/* Middle circle */}
          <div
            className={`absolute top-16 -right-12 w-[300px] h-[300px] rounded-full bg-blue-200/40`}
          />
          {/* Smallest circle */}
          <div
            className={`absolute top-28 -right-4 w-[220px] h-[220px] rounded-full bg-blue-300/30`}
          />
        </div>
      </div>
    </div>
  );
};

const SecondCircleGroup = () => {
  return (
    <div className="absolute top-0 left-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-56 h-56">
        <div
          className="full-circle-animation"
          style={{transformOrigin: "center"}}
        >
          {/* Largest circle */}
          <div
            className={`absolute top-6 -right-24 w-[400px] h-[400px] rounded-full bg-blue-100`}
          />
          {/* Middle circle */}
          <div
            className={`absolute top-16 -right-10 w-[300px] h-[300px] rounded-full bg-blue-200/40`}
          />
          {/* Smallest circle */}
          <div
            className={`absolute top-28 right-1 w-[220px] h-[220px] rounded-full bg-blue-300/30`}
          />
        </div>
      </div>
    </div>
  );
};

export default function ContactCallToAction() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 py-24 font-primary">
      <div className="bg-[#0091e614] rounded-[24px] shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <CircleGroup />
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative z-10">
          <div className="flex flex-col max-w-3xl items-center justify-center gap-2">
            <h1 className="text-[#020617] text-[36px] font-bold text-center">
            Still Have Questions?
            </h1>
            <p className="text-[#334155] text-base font-normal leading-tight mb-4 text-center">
            We&apos;re just a call or message away. Whether you&apos;re a business or a job seeker, our team is here to make the process simple, legal, and stress-free.
            </p>
            <Button
              variant="withArrow"
              className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group"
              withAnimatedArrow
              arrowSize={28}
              StyleBg="#0091e6"
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
        <SecondCircleGroup />
      </div>
    </div>
  );
} 
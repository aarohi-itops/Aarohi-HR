"use client";
import React from "react";
import CountUp from "react-countup";

export default function OurNumbersFigure() {
  const statsData = [
    {
      value: 5000,
      suffix: "+",
      description: "Successful Candidate Placements",
    },
    {
      value: 50,
      suffix: "+",
      description: "Global Partner Companies",
    },
    {
      value: 98,
      suffix: "%",
      description: "Client Satisfaction Rate",
    },
    {
      value: 10,
      suffix: "+",
      description: "Years of Recruitment Excellence",
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 py-16 font-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 items-center  md:justify-between">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`p-1 ${index < statsData.length - 1 ? "relative" : ""}`}
          >
            <h3 className="text-5xl mb-2 text-center md:text-left  font-bold text-primary-black">
              <CountUp
                end={stat.value}
                duration={2.5}
                enableScrollSpy
                scrollSpyDelay={200}
                suffix={stat.suffix}
              />
            </h3>
            <p className="text-xl min-w-[215px] text-center md:text-left text-[#475569] font-normal leading-tight">
              {stat.description}
            </p>
            {index < statsData.length - 1 && (
              <div className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 h-[54px] w-[1px] bg-gray-300 hidden lg:block"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

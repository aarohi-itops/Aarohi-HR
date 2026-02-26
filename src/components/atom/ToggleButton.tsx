"use client";
import React from "react";

interface ToggleButtonProps {
  isActive: boolean;
  onToggle: () => void;
  leftLabel: string;
  rightLabel: string;
  leftLabelMinWidth?: string;
  rightLabelMinWidth?: string;
  className?: string;
}

export default function ToggleButton({
  isActive,
  onToggle,
  leftLabel,
  rightLabel,
  leftLabelMinWidth = "min-w-[80px] md:min-w-[106px]",
  rightLabelMinWidth = "min-w-[100px] md:min-w-[136px]",
  className = "",
}: ToggleButtonProps) {
  return (
    <div className={`flex items-center gap-2 md:gap-4 ${className}`}>
      <p
        className={`${leftLabelMinWidth} text-sm md:text-[18px] font-primary font-normal leading-normal transition-all duration-500 ease-in-out ${
          isActive ? "text-primary-gray font-normal" : "text-gray-300"
        }`}
      >
        {leftLabel}
      </p>
      <button onClick={onToggle}>
        <div
          className={`flex w-[60px] md:w-[75px] p-[4px] md:p-[6px] items-center gap-[5px] md:gap-[7.5px] rounded-[749.25px] cursor-pointer ${
            !isActive ? "bg-[#ccecff]" : "bg-[rgba(51,65,85,0.12)]"
          }`}
        >
          <div
            className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 aspect-square rounded-full ${
              isActive
                ? "bg-[#334155] translate-x-0 transition-all duration-500 ease-in-out"
                : "bg-secondary-green translate-x-[30px] md:translate-x-[39px] transition-all duration-500 ease-in-out"
            }`}
          ></div>
        </div>
      </button>
      <p
        className={`${rightLabelMinWidth} text-sm md:text-[18px] font-primary leading-normal transition-all duration-500 ease-in-out ${
          !isActive ? "text-secondary-green font-semibold" : "text-gray-300"
        }`}
      >
        {rightLabel}
      </p>
    </div>
  );
}

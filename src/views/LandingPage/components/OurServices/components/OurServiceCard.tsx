import Image from "next/image";
import React from "react";

interface OurServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function OurServiceCard({
  title,
  description,
  imageUrl,
}: OurServiceCardProps) {
  return (
    <div className="group">
      <div className="relative rounded-[24px] p-[2px] transition-all duration-300 ease-in-out overflow-hidden">
        {/* Gradient border that shows on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#E9EEF3] to-[#0091e6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px]"
          aria-hidden="true"
        />

        {/* Card content */}
        <div className="relative flex flex-col justify-center items-start flex-1 bg-white rounded-[23px] overflow-hidden border border-[#E2E8F0] h-full z-10">
          <div className="w-full h-[160px] rounded-t-[22px] overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              width={160}
              height={160}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
            />
          </div>
          <div className="p-6">
            <h3 className="self-stretch font-primary text-lg font-semibold mb-2 text-gray-800 group-hover:text-[#0091e6] transition-colors duration-300">
              {title}
            </h3>
            <p className="self-stretch text-[#334155] font-primary text-sm font-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

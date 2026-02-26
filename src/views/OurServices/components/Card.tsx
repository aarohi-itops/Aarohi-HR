import Image from "next/image";
import React from "react";
import tick from "@/assets/LandingPage/CompaniesAndEmployeeCard/tick-badge.svg";
import { StaticImageData } from "next/image";
import greenDot from "@/assets/Services-assets/GreenDot.svg";

// Define TypeScript interface for the card data
export interface CardData {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: StaticImageData;
  reversed?: boolean;
}

interface CardProps {
  cardData: CardData;
}

export default function Card({ cardData }: CardProps) {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 md:px-6 font-primary   ">
      <section className="flex flex-col items-center justify-center ">
        <div className={`flex flex-col ${cardData.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-[60px] items-center justify-center`}>
          <div className="w-full md:w-1/2">
            <h1 className="text-[#020617] text-[36px] font-normal leading-tight">
              {cardData.title}
            </h1>
            <p className="text-[#334155] text-[16px] font-normal leading-normal mt-4 mb-6">
              {cardData.description}
            </p>
            <ul className="space-y-4">
              {cardData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Image 
                    src={tick} 
                    alt="Tick" 
                    className="w-5 h-5 mt-1" 
                    width={20}
                    height={20}
                    quality={90}
                    loading="lazy"
                  />
                  <span className="text-[#334155]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className={`absolute -top-4 ${cardData.reversed ? '-right-4' : '-left-4'} z-10`}>
                <Image 
                  src={greenDot} 
                  alt="Green Dot" 
                  width={44}
                  height={44}
                  quality={85}
                  loading="lazy"
                />
              </div>
              <Image 
                src={cardData.image} 
                alt={`${cardData.title} Image`} 
                className="w-[530px] h-[379px] flex-shrink-0 rounded-[24px] object-cover"
                width={530}
                height={379}
                sizes="(max-width: 768px) 100vw, 530px"
                quality={90}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import React, {useState, useCallback} from "react";
import Image from "next/image";
import serviceCall from "@/assets/LandingPage/GotAnswers/service-call.svg";
import {motion} from "framer-motion";
import FaqItem, {Faq} from "./components/FaqItem";
import HighlightText from "@/services/HighlightText";

// Array of FAQs
const faqs: Faq[] = [
  {
    id: 1,
    question: "How does Aarohi HR Solutions help with international hiring?",
    answer:
      "Aarohi HR Solutions streamlines international hiring by handling candidate sourcing, vetting, visa processing, and relocation logistics. We have a global network of skilled workers and manage the entire process from start to finish.",
  },
  {
    id: 2,
    question: "What industries do you specialize in?",
    answer:
      "We specialize in hospitality, manufacturing, food service, logistics, and customer service industries. Our candidates have relevant experience and skills specific to these sectors.",
  },
  {
    id: 3,
    question: "How long does the hiring process typically take?",
    answer:
      "The hiring process typically takes 4-6 weeks from initial contact to worker placement. This includes candidate selection, interviews, visa processing, and relocation arrangements.",
  },
  {
    id: 4,
    question: "Do you handle visa and work permit requirements?",
    answer:
      "Yes, we manage all visa and work permit requirements. Our team has expertise in international employment regulations and ensures all documentation is properly prepared and submitted.",
  },
  {
    id: 5,
    question: "What support do you provide after placement?",
    answer:
      "We offer ongoing support for both employers and workers after placement. This includes cultural integration assistance, performance monitoring, conflict resolution, and renewal services for visas and contracts when needed.",
  },
];

export default function GotQuestion() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = useCallback((id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-24 w-full">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-8 md:gap-16 items-center md:items-start"
          layout
        >
          <header className="w-full flex flex-col items-center md:items-start">
            <h2 className="text-tertiary-green mb-1 font-primary text-center md:text-start space-x-2 text-lg md:text-xl tracking-wider leading-tight font-semibold">
              Got Questions?
            </h2>
            <h1 className="text-primary text-center md:text-start space-x-2 text-3xl md:text-5xl tracking-wider leading-tight font-normal">
              <HighlightText
                className="font-semibold px-4 text-start"
                highlightColor="bg-tertiary-green"
                duration={700}
                delayAnimation={700}
              >
                We&apos;ve Got Answers
              </HighlightText>
            </h1>
            <p className="text-primary-gray max-w-[874px] mt-2 text-center md:text-start font-primary text-sm md:text-base font-normal leading-normal">
              Everything You Need to Know
            </p>
          </header>
          <section className="flex justify-center md:justify-start">
            <Image
              src={serviceCall}
              alt="Got Question"
              height={252}
              width={298}
              className="w-auto h-auto max-w-full"
              priority
            />
          </section>
        </motion.div>

        <motion.div className="w-full md:w-1/2 flex flex-col h-full" layout>
          <div className="flex flex-col h-full">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isExpanded={expandedId === faq.id}
                onToggle={() => toggleExpand(faq.id)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Pin1 from "@/assets/AboutUs/pin1.svg";
import Pin2 from "@/assets/AboutUs/pin2.svg";
import Mission from "@/assets/AboutUs/mission.svg";
import Vision from "@/assets/AboutUs/vision.svg";
import React from "react";
import HighlightText from "@/services/HighlightText";

// Value cards data
const valuesData = [
  {
    title: "Ethical Integrity",
    description: "Upholding the highest standards of ethical conduct is non-negotiable for us. We operate with unwavering integrity, ensuring trust and transparency in every interaction.",
    icon: "👥"
  },
  {
    title: "Client-Centric Approach",
    description: "At Aarohi HR Solutions, customer satisfaction is paramount to our unwavering recruitment commitment. We prioritize understanding unique needs, fostering long-term partnerships for mutual success.",
    icon: "🎯"
  },
  {
    title: "Ethical Recruitment",
    description: "Ethical recruitment is the cornerstone of Aarohi HR Solutions. Recognizing the responsibility in linking individuals to opportunities, our rigorous screening ensures candidates meet qualifications and ethical standards.",
    icon: "⚖️"
  },
  {
    title: "Professionalism",
    description: "At Aarohi HR Solutions, professionalism guides every interaction. Our expert team ensures high standards in recruitment, client consultations, and tailored services for diverse client needs.",
    icon: "👔"
  },
  {
    title: "Collaboration",
    description: "Collaboration is pivotal at Aarohi HR Solutions. Working closely with clients and candidates, we foster open communication and shared goals for enduring relationships, exceeding expectations together.",
    icon: "🤝"
  },
  {
    title: "Trust",
    description: "Trust is foundational at Aarohi HR Solutions. We prioritize building and maintaining trust by delivering on promises, being transparent, and prioritizing well-being, nurturing essential partnerships.",
    icon: "🔒"
  },
  {
    title: "Diversity and Inclusion",
    description: "We celebrate diversity and foster an inclusive environment where every individual, regardless of background or position, is valued, respected, and provided equal opportunities.",
    icon: "🌍"
  },
  {
    title: "Long-Term Partnerships",
    description: "We strive to build enduring partnerships with our clients, fostering trust and collaboration to support their ongoing recruitment requirements and contribute to their long-term success.",
    icon: "🤲"
  },
  {
    title: "Timely Delivery",
    description: "We are committed to providing efficient and prompt services, ensuring that our clients' recruitment needs are met within the agreed-upon time frames.",
    icon: "⏱️"
  }
];

export default function DoubleCards() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 flex flex-col items-center py-24">
      <div className="mb-24 flex flex-col items-center justify-start">
        <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-normal flex items-center mb-2">
          <span className="mr-2">Our core</span>
          <HighlightText
            className="font-semibold px-1 sm:px-2 md:px-4"
            highlightColor="bg-tertiary-green"
            duration={700}
            delayAnimation={700}
          >
            Values
          </HighlightText>
        </h1>
        <p className="text-[#334155] text-start text-base mt-4">
          Aarohi HR Solutions is a company that values integrity, excellence,
          customer focus, collaboration, ethics, and quality services. These
          core values shape the way the company conducts business and interacts
          with clients. The company prides itself on being honest and fair in
          all of its business dealings. It is committed to upholding high
          ethical standards and treating clients with respect and
          transparency.We are dedicated to consistently providing high-quality
          services to its clients. Overall, Aarohi HR Solutions is a company
          that values integrity, excellence, customer focus, collaboration,
          ethics, and quality services. These values drive the company&apos;s
          business practices and shape the way it interacts with clients.
        </p>
        
        {/* Values Cards Grid */}
        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 flex flex-col ${
                index % 2 === 0 ? "bg-blue-100 border border-blue-500" : "bg-orange-100 border border-orange-500"
              }`}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 text-2xl ${
                index % 2 === 0 ? "bg-blue-200" : "bg-orange-200"
              }`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-[#334155] text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full relative flex flex-col md:flex-row items-center justify-between gap-52">
        <div className="absolute hidden md:block left-1/2 top-0 transform -translate-x-1/2 w-[532.954px] h-[337.75px] border border-dashed border-[#64748B] rounded-[90%]"></div>

        {/* Mission Card */}
        <div className="w-full h-full self-start">
          <div className="relative w-[400px] h-[282.346px] transform rotate-[4.04deg] p-[38.133px_10.895px_10.895px_10.895px] flex flex-col items-start gap-[10.895px] rounded-[21.79px] border-[0.908px] border-solid border-blue-100 bg-white">
            <Image
              src={Pin1}
              alt="Pin"
              className="absolute -top-5 left-1/2 transform -translate-x-1/2"
            />
            <div className="flex w-[380.666px] p-[21.79px] flex-col justify-between items-end flex-1 rounded-[21.79px] border-[0.908px] border-solid border-blue-500 bg-blue-100">
              <div className="flex w-[38.133px] h-[38.133px] transform rotate-[-5.124deg] p-[4.767px] justify-center items-center aspect-[38.13/38.13]">
                <Image src={Mission} alt="Mission" />
              </div>
              <div className="flex flex-col items-start gap-[14.527px] self-stretch">
                <h2 className="text-[#0F172A] text-2xl font-medium">
                  Our Mission
                </h2>
                <p className="text-[#334155] text-sm font-normal leading-[150%]">
                  To bridge global opportunity gaps by connecting skilled
                  workers with companies that need them — safely, fairly, and
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="w-full h-full self-end">
          <div className="relative w-[400px] h-[282.346px] transform rotate-[-9.8deg] p-[38.133px_10.895px_10.895px_10.895px] flex flex-col items-start gap-[10.895px] rounded-[21.79px] border-[0.908px] border-solid border-[#E2E8F0] bg-white ">
            <Image
              src={Pin2}
              alt="Pin"
              className="absolute -top-5 left-1/2 transform -translate-x-1/2"
            />
            <div className="flex w-[380.666px] p-[21.79px] flex-col justify-between items-end flex-1 rounded-[21.79px] border-[0.908px] border-solid border-orange-500 bg-orange-100">
              <div className="flex w-[38.133px] h-[38.133px] transform rotate-[-5.124deg] p-[4.767px] justify-center items-center aspect-[38.13/38.13]">
                <Image src={Vision} alt="Vision" />
              </div>
              <div className="flex flex-col items-start gap-[14.527px] self-stretch">
                <h2 className="text-[#0F172A] text-2xl font-medium">
                  Our Vision
                </h2>
                <p className="text-[#334155] text-sm font-normal leading-[150%]">
                  To bridge global opportunity gaps by connecting skilled
                  workers with companies that need them — safely, fairly, and
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

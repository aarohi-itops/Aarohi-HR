"use client";
import Clock from "@/assets/Services-assets/clock.svg";
import Global from "@/assets/Services-assets/global.svg";
import People from "@/assets/Services-assets/people.svg";
import JobApplicationModal from "@/components/JobApplicationModal";
import {Breadcrumb} from "@/components/ui/breadcrumb";
import {Button} from "@/components/ui/button";
import jobsData, {Job} from "@/data/jobsData";
import Image from "next/image";
import React, {useCallback, useRef, useState} from "react";

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

// Using Job interface directly from jobsData
type JobDetailProps = Job;

export default function JobDetailPage({job}: {job: JobDetailProps}) {
  const similarJobs = jobsData.filter((j) => j.id !== job.id);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Adding CSS to hide scrollbar but keep functionality
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Memoize modal handlers to prevent unnecessary re-renders
  const closeApplicationModal = useCallback(() => {
    setIsApplicationModalOpen(false);
  }, []);

  const openApplicationModal = useCallback(() => {
    setIsApplicationModalOpen(true);
  }, []);

  const toggleImageModal = useCallback(() => {
    setIsImageModalOpen((prev) => !prev);
  }, []);

  // Prevent propagation when clicking the modal content
  const handleModalContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 py-8 font-primary">
      <div className="mb-6">
        <Breadcrumb
          items={[
            {label: "Home", href: "/"},
            {label: "Jobs", href: "/jobs"},
            {label: job.company},
          ]}
        />
      </div>

      <div className="bg-white overflow-hidden">
        {/* Job header */}
        <div
          className="w-full h-[250px] relative cursor-pointer"
          onClick={toggleImageModal}
          aria-label="Click to view larger image"
        >
          <Image
            src={job.imageUrl}
            alt={`${job.company} cover`}
            className="w-full h-full object-cover rounded-2xl shadow-md"
            layout="fill"
            priority
          />
        </div>

        <div className="p-6 md:p-8">
          {/* Job title and basic info */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 p-6 rounded-[24px] border border-[#F8FAFC] bg-white shadow-[0_4px_8px_-1px_rgba(0,0,0,0.1),0_1px_1px_-1px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col items-start">
                <p className="text-primary-balck text-base font-medium line-clamp-2">
                  {job.company}
                </p>
                <span className="text-[#475569] text-sm font-normal">
                  Company
                </span>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-primary-balck text-base font-medium line-clamp-2">
                  {job.title}
                </p>
                <span className="text-[#475569] text-sm font-normal">
                  Job Title
                </span>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-primary-balck text-base font-medium">
                  {job.location}
                </p>
                <span className="text-[#475569] text-sm font-normal">
                  Location
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-auto">
              <Button
                variant="withArrow"
                className="h-14 w-full lg:w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group hover:cursor-pointer"
                withAnimatedArrow
                arrowSize={28}
                onAnimationComplete={openApplicationModal}
                StyleBg="#0091e6"
              >
                <span>Apply Now</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {/* Main content - 3/5 width */}
            <div className="lg:col-span-4">
              {/* Job description */}
              <div className="">
                <h2 className="text-2xl font-semibold text-[#0F172A] mb-2">
                  Description
                </h2>
                <div className="text-[#475569] space-y-4">
                  <p>
                    {job.description ||
                      `${job.company} is looking for dedicated professionals to join our team. 
                      We offer competitive compensation, a dynamic work environment, and opportunities for growth.`}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <div className="mb-4">
                  <h2 className="text-primary-gray">Responsibilities:</h2>
                  <ul className="text-[#475569] list-disc pl-6 space-y-0.5">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {job.requirements && job.requirements.length > 0 && (
                <div className="mb-4">
                  <h2 className="text-2xl font-medium text-[#0F172A] mb-2">
                    Requirements
                  </h2>
                  <ul className="text-[#475569] list-disc pl-6 space-y-0.5">
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Perks and Benefits */}
              {job.PerksAndBenefits && job.PerksAndBenefits.length > 0 && (
                <div className="mb-4">
                  <h2 className="text-2xl font-medium text-[#0F172A] mb-2">
                    Perks and Benefits
                  </h2>
                  <ul className="text-[#475569] list-disc pl-6 space-y-0.5">
                    {job.PerksAndBenefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar with similar openings - 2/5 width */}
            <div className="lg:col-span-2">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#0F172A] mb-6">
                  Similar Openings
                </h2>

                {/* Custom vertical slider with hidden scrollbar */}
                <div
                  ref={sliderRef}
                  className="h-[600px] overflow-y-auto hide-scrollbar pr-2"
                  style={{
                    scrollBehavior: "smooth",
                  }}
                >
                  <div className="flex flex-col gap-6">
                    {similarJobs.map((similarJob) => (
                      <div
                        onClick={() =>
                          (window.location.href = `/jobs/${similarJob.id}`)
                        }
                        key={similarJob.id}
                        className="flex flex-col p-4 gap-2 rounded-2xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:shadow-md cursor-pointer"
                      >
                        <Image
                          src={similarJob.imageUrl}
                          alt={`${similarJob.company} logo`}
                          width={280}
                          height={101}
                          className="h-[101px] w-full object-cover rounded-lg"
                        />
                        <h3 className="text-[#0F172A] text-2xl font-medium mt-2">
                          {similarJob.company}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <Image
                            src={Global}
                            alt="global"
                            className="h-5 w-5 text-gray-500"
                          />
                          <span className="text-[#475569] text-base font-normal">
                            {similarJob.location}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mt-1">
                          <Image
                            src={Clock}
                            alt="clock"
                            className="h-5 w-5 text-gray-500"
                          />
                          <span className="text-[#475569] text-base font-normal">
                            {similarJob.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Image
                            src={People}
                            alt="people"
                            className="h-5 w-5 text-gray-500"
                          />
                          <span className="text-[#475569] text-base font-normal">
                            {similarJob.employees}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom implementation of DoubleCircleSectionCard with application button */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-24 font-primary">
        <div className="bg-[#0091e614] rounded-[24px] shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* Circle group elements can be added here if needed */}
          <CircleGroup />
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative z-10">
            <div className="flex flex-col max-w-3xl items-center justify-center gap-2">
              <h1 className="text-[#020617] text-[36px] font-normal text-center">
                Ready to join our team?
              </h1>
              <p className="text-[#334155] text-base font-normal leading-tight mb-4 text-center">
                Apply now and take the first step towards a rewarding career
                with us.
              </p>
              <Button
                variant="withArrow"
                className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group hover:cursor-pointer"
                withAnimatedArrow
                arrowSize={28}
                onAnimationComplete={openApplicationModal}
                StyleBg="#0091e6"
              >
                Apply Now
              </Button>
            </div>
          </div>
          <SecondCircleGroup />
        </div>
      </div>

      {/* Job Application Modal */}
      <JobApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={closeApplicationModal}
        job={job}
      />

      {/* Image Modal - Using Portal would be better but keeping it simple */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={toggleImageModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={handleModalContentClick}
          >
            <button
              onClick={toggleImageModal}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10 hover:bg-black/70 transition-colors"
              aria-label="Close image preview"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="relative w-full h-full">
              <Image
                src={job.imageUrl}
                alt={`${job.company} cover full view`}
                className="object-contain w-full h-full"
                layout="fill"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

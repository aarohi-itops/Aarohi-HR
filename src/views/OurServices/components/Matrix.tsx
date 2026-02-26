import React from "react";
import Image from "next/image";
import matrix from "@/assets/Services-assets/ForCompanies/matrix.png";

export default function Matrix() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 mt-24 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2">
          <section className=" w-full md:w-4/5 flex flex-col items-start md:items-left gap-2 ">
            <h2 className="text-secondary-green text-3xl text-left font-semi-bold leading-tight">
              AHRS Commitment
            </h2>
            
            <div className="flex max-w-2xl flex-col items-start justify-start mt-6 ">
              <p className="text-[#334155] text-start text-base">
                Aarohi HR Solutions adheres to RBA guidelines for foreign
                employment, ensuring a fair and transparent recruitment process
                for candidates. Our commitment to ethical and responsible
                business practices has led to the successful placement of highly
                skilled individuals, fulfilling our clients&apos; needs for
                personnel planning, consultancy, and research.Due to our moral
                and accountable business practices, we have been able to secure
                employment for highly skilled individuals, thus effectively
                meeting our clients&apos; needs in terms of staffing,
                consultation, and research.
              </p>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        
          <Image
            src={matrix}
            alt="Service Matrix"
            height={400}
            width={500}
            className="w-full h-auto rounded-lg"
          />
          <h2 className="text-secondary-green text-xl text-left font-semi-bold leading-tight">
              AHRS Sourcing Matrix
            </h2>
        </div>
      </div>
    </div>
  );
}

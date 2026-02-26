import React from "react";
import HeroAboutSection from "./components/HeroAboutSection/HeroAboutSection";
import TrustedBy from "../LandingPage/components/TrustedBy/TrustedBy";
import DoubleCards from "./components/DoubleCards/DoubleCards";
import DiscoverInDetail from "./components/DiscoverInDetail/DiscoverInDetail";
import MessagefromChairman from "./components/MessagefromChairman/MessagefromChairman";
import OurStory from "./components/OurStory/OurStory";
import ReadyToWork from "./components/ReadyToWork/ReadyToWork";

export default function AboutUs() {
  return (
    <div className="flex flex-col  py-16">
      <HeroAboutSection />
      <TrustedBy
        heading={"Trusted companies"}
        headerStyle={"text-center"}
        // showBackground={false}
        className={"py-24"}
      />
      <DoubleCards />
      <DiscoverInDetail />
      <MessagefromChairman />
      <OurStory />
      <ReadyToWork />
    </div>
  );
}

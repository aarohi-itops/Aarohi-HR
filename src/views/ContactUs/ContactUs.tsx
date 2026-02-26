import React from "react";
import ContactHeroSection from "./components/ContactHeroSection/ContactHeroSection";
import Imap from "./components/Imap/Imap";
import ContactCallToAction from "./components/ContactCallToAction/ContactCallToAction";

export default function ContactUs() {
  return (
    <div className="flex flex-col">
      <ContactHeroSection />
      <Imap />
      <ContactCallToAction />
    </div>
  );
}

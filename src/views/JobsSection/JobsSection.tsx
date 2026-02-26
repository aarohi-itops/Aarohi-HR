import Hero from '@/components/atom/Hero'
import React from 'react'

import DoubleCIrcleCard from '@/components/atom/DoubleCircleSectionCard'
import JobListingSection from './components/JobListingSection'

export default function JobsSection() {
  return (
    <>
      <Hero
        smallHeading="Jobs"
      beforehighlight={"Expore"}
        highlightText="Opportunites abroad"
        subtitle="with Trusted Employers"
        description="Discover exciting internship and job openings abroad, handpicked from verified and trusted employers. Start your international career journey with confidence and the right opportunities."
      />
      <JobListingSection />
      <DoubleCIrcleCard
        heading="Ready to Take the Next Step?"
        paragraph="We’re just a call or message away. Whether you’re a business or a job seeker, our team is here to make the process simple, legal, and stress-free."
        buttonText="Talk to Our Team"
      />
    </>
  )
}

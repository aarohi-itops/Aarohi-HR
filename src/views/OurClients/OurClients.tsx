import React from 'react'
import Hero from '@/components/atom/Hero'
import DoubleCircleCard from '../Licenses/components/DoubleCircleCard'
import LogoGrid from './Components/LogoGrid'

export default function OurClients() {
  return (
    <>
      <Hero
        smallHeading="Our Clients"
        highlightText="Trusted by"
        subtitle="Our valued partners"
        description="Aarohi HR Solutions is fully licensed and compliant with all relevant laws and regulations abroad, providing businesses and job seekers with trustworthy and legally sound staffing services." beforehighlight={""} />
        <LogoGrid />
        <DoubleCircleCard />
    </>
  )
}

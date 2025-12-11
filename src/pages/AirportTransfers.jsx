import React from 'react'
import Hero from '../components/ourservices/airporttransfer/Hero'
import MobileBanner from '../components/ourservices/airporttransfer/MobileBanner'
import AirportTransfersSection from '../components/ourservices/airporttransfer/CityToCitySection'
import FAQPage from '../components/ourservices/airporttransfer/FAQPage'
import AuthorityBrands from '../components/ourservices/city-to-city/AuthorityBrands'

function AirportTransfers() {
  return (
    <div>
        <Hero/>
        <MobileBanner/>
        <AirportTransfersSection/>
        <FAQPage/>
        <AuthorityBrands/>
    </div>
  )
}

export default AirportTransfers
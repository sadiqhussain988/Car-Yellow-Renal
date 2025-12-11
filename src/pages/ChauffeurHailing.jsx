import React from 'react'
import Hero from '../components/ourservices/chauffeurhailing/Header'
import MobileBanner from '../components/ourservices/chauffeurhailing/MobileBanner'
import CityToCitySection from '../components/ourservices/chauffeurhailing/CityToCitySection'
import FAQPage from '../components/ourservices/chauffeurhailing/Faq'
import AuthorityBrands from '../components/ourservices/city-to-city/AuthorityBrands'

function ChauffeurHailing() {
  return (
    <div>
        <Hero/>
        <MobileBanner/>
        <CityToCitySection/>
        <FAQPage/>
        <AuthorityBrands/>
    </div>
  )
}

export default ChauffeurHailing
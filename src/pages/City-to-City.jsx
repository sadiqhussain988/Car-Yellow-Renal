import React from 'react'
import Header from '../components/ourservices/city-to-city/Header'
import MobileBanner from '../components/ourservices/city-to-city/MobileBanner'
import AuthorityBrands from '../components/ourservices/city-to-city/AuthorityBrands'
import CityToCitySection from '../components/ourservices/city-to-city/CityToCitySection'
import FAQPage from '../components/ourservices/city-to-city/Faq'

function CityToCity() {
  return (
    <div>
        <Header/>
        <MobileBanner/>
        <CityToCitySection/>
        <FAQPage/>
        <AuthorityBrands/>
    </div>
  )
}

export default CityToCity
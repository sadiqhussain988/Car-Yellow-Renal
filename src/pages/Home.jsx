import React from "react";
import Header from "../components/home/Header";
import PopularServices from "../components/home/PopularServices";
import TrustedCabService from "../components/home/TrustedCabService";
import Services from "../components/home/Services";
import Faqs from "../components/home/Faqs";
import Testimonials from '../components/home/Testimonials'
import CarRentalStats from "../components/home/CarRentalStats";
import PopularDestination from "../components/home/PopularDestination";
import FairDeal from "../components/home/FairDeal";
import Working from "../components/home/Working";
// import WhyUs from "../components/home/WhyUs";
// import Download from "../components/home/Download";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <TrustedCabService />
      <Working />
      <PopularDestination/>
      <FairDeal/>
      <CarRentalStats />
      <Services />
      <Testimonials/>
      <PopularServices />
      <Faqs />





      {/* <WhyUs /> */}
      {/* <Download /> */}
    </div>
  );
};

export default Home;

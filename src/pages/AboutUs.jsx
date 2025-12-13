import Header from "../components//AboutUs/Header";
import Working from "../components/home/Working";
import StorySection from "../components/AboutUs/StorySection";
import MissionSection from "../components/AboutUs/MissionSection";
import HowWorks from "../components/AboutUs/HowWorks";
import TrustedCabService from "../components/home/TrustedCabService";
// import GetApp from "../components/AboutUs/GetApp";

const About1 = () => {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <StorySection/>
      <Working/>
      <MissionSection/>
      <HowWorks />
      <TrustedCabService />
    
      {/* <GetApp /> */}
    </div>
  );
};

export default About1;
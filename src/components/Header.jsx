import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import pageTitle from "../assets/abouthero.jpg";

const Header = ({ name, title }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 120,
      easing: "ease-in-out-sine",
    });
  }, []);

  return (
    <div className="relative w-full  overflow-hidden">
      
      <div
        className="relative"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <img
          src={pageTitle}
          alt={`${title} banner`}
          className="w-full h-[300px] md:h-[450px] object-cover brightness-75 transform scale-105 hover:scale-110 transition-transform duration-[3000ms] ease-in-out"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

        {/* Decorative Animated Light Sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_6s_linear_infinite]"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        {/* Title */}
        <h1
          className="text-4xl md:text-6xl  font-extrabold text-white mb-4 drop-shadow-lg tracking-wide"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {name}
        </h1>

        {/* Tagline */}
        <p
          className="text-gray-100 font-semibold md:text-lg max-w-2xl mb-6 leading-relaxed "
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Reliable Coach, Minibus & Van Hire Across the UK private and group
          transport solutions for weddings tours, schools,corporate events,
          airport transfers and more.
        </p>

        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 text-gray-300 text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Link
            to="/"
            className="text-white hover:text-[#FFEE02] transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          <FaChevronRight className="text-xs opacity-80" />
          <span className="text-[#FFEE02] font-semibold">{title}</span>
        </div>
      </div>

      {/* Bottom Gradient Curve */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#efe97b92] to-transparent"
        data-aos="fade-in"
        data-aos-delay="800"
      ></div>

      {/* Custom Keyframe for shine animation */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
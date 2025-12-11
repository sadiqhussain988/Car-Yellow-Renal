import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Heading() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="mb-8 flex  flex-col md:items-center md:justify-center gap-4 p-4"
      data-aos="fade-up"
    >
      <button
        className="bg-[#EBF1F8] py-2 px-4 rounded text-[#1447e6] font-semibold hover:cursor-pointer"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Our Blogs
      </button>

      <h2
        className="lg:text-[2.5rem] md:text-[2rem] text-[20px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Browse Our Resources
      </h2>

      <p data-aos="fade-up" data-aos-delay="300">
        We Provide tips and resources from industry leaders. For real.
      </p>
    </div>
  );
}

export default Heading;

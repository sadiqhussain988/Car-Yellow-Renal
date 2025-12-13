import React from "react";
import { FaCar, FaRoad, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

// Background images
// import image1 from "../../assets/home/Audi.png";
// import image2 from "../../assets/home/p1.png";
// import image4 from "../../assets/home/lambo.png";
import image from "../../../public/Link02.png"
import image2 from "../../../public/link05.png"
import image3 from "../../../public/link04.png"

const CarRentalStats = () => {
  const stats = [
    {
      icon: <FaCar size={20} />,
      value: "10+",
      label: "Years in Service",
      description: `A decade of unmatched dedication in the car rental industry. 
We’ve built trust with thousands of clients nationwide.`,
      image:image,
    },
    {
      icon: <FaRoad size={20} />,
      value: "50k+",
      label: "Trips Completed",
      description: `Over fifty thousand trips successfully completed. 
Every road, every mile, handled with precision.`,
      image: image2,
    },
    {
      icon: <FaSmile size={20} />,
      value: "5k+",
      label: "Happy Customers",
      description: `Thousands of customers choose us with confidence. 
Each smile is proof of our customer-first approach.`,
      image: image3,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our <span className="text-[#D68F00]">Achievements</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Numbers that showcase our commitment to excellence in car rental
            services
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer h-80" // Fixed height added
              style={{
                backgroundImage: `url(${stat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500"></div>

              {/* Text content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                <div className="flex justify-end mb-4">
                  <div className="h-12 w-12 flex justify-center items-center bg-[#FFEE02] rounded-full shadow-lg transition-all duration-300 group-hover:bg-white">
                    <span className="text-black group-hover:text-[#D68F00]">
                      {stat.icon}
                    </span>
                  </div>
                </div>
                <p className="uppercase tracking-wider text-lg font-semibold mb-2 sm:mb-3">
                  {stat.label}
                </p>
                <p className="text-sm sm:text-base text-justify mb-4 sm:mb-6">
                  {stat.description}
                </p>
                <div className="flex items-center gap-3">
                  <hr className="h-1 w-[40%] bg-white rounded-full" />
                  <h3 className="text-2xl font-extrabold">{stat.value}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarRentalStats;

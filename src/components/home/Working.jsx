import { motion } from "framer-motion";
import Button from "../Button";
import { Link } from "react-router-dom";
import image2 from "../../../public/Link02.png"
import image5 from "../../../public/Link Way 01.png"
import image from "../../../public/link03.png"
import image4 from "../../../public/coach.png"
import image6 from "../../../public/c2.png"
import image7 from "../../../public/tour.png"

const services = [
  {
    title: "City-to-City Rides",
    subtitle: "Comfort Travel",
    image:
      "https://cdn.pixabay.com/photo/2020/07/28/15/04/airport-5445373_1280.jpg",
    description:
      "Safe and comfortable intercity rides with experienced drivers and premium vehicles.",
  },
  {
    title: "Chauffeur Hailing",
    subtitle: "On-Demand Driver",
    image:
     image2,
    description:
      "Quick chauffeur hailing with luxury standards and professional service.",
  },
  {
    title: "Airport Transfers",
    subtitle: "24/7 Service",
    image:
      "https://cdn.pixabay.com/photo/2024/04/27/05/59/ai-generated-8723087_1280.jpg",
    description:
      "Reliable airport pick & drop with punctual timing and smooth rides.",
  },
  {
    title: "Hourly Hire",
    subtitle: "Flexible",
    image:
     image5,
    description:
      "Hire a car with driver for meetings, appointments, and flexible schedules.",
  },
  {
    title: "Full Day Hire",
    subtitle: "Business & Family",
    image:
     image,
    description:
      "Perfect for business trips, city tours, and family travel plans.",
  },
  {
    title: "Corporate Travel",
    subtitle: "Executive Class",
    image:
      "https://cdn.pixabay.com/photo/2020/05/25/17/03/merry-christmas-5219496_1280.jpg",
    description:
      "Premium corporate chauffeur service for executives and office needs.",
  },
  {
    title: "Family Trips",
    subtitle: "Safe & Spacious",
    image:
      image6,
    description: "Comfortable and safe rides for daily family trips and tours.",
  },
  {
    title: "Event Transport",
    subtitle: "Weddings & Parties",
    image:
      image4,
    description:
      "Premium travel arrangements for weddings, functions, and VIP guests.",
  },
  {
    title: "Tour Packages",
    subtitle: "Explore More",
    image:image7,
    description:
      "Discover the best tourist attractions with our guided travel packages.",
  },
];

const ServicesCards = () => {
  return (
    <section id="servicges" className="py-12 px-4 sm:px-8 lg:px-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Our <span className="bg-gradient-to-r from-[#FFEE02] to-[#F5A623] bg-clip-text text-transparent">Premium Services</span>
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Premium travel & chauffeur solutions designed for your comfort.
        </p>
      </div>

      {/* 9-card grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 
                       hover:border-black/10 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image and Text Section */}
            <div className="group">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-yellow-600 tracking-wide">
                  {item.subtitle}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Centered Button */}
            <div className="p-6 flex justify-center">
              <Link to="/services">
                <Button
                  text="Learn More"
                  className="px-6 py-3 text-sm"
                  bgHover="black"
                  textHover="white"
                  cutHover="white"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCards;

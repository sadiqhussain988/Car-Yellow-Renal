import { motion } from "framer-motion";
import Button from "../Button";
import { Link } from "react-router-dom";

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
      "https://cdn.pixabay.com/photo/2018/07/10/10/40/mercedes-3528323_1280.jpg",
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
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
    description:
      "Hire a car with driver for meetings, appointments, and flexible schedules.",
  },
  {
    title: "Full Day Hire",
    subtitle: "Business & Family",
    image:
      "https://cdn.pixabay.com/photo/2020/03/13/07/34/auto-4927195_1280.jpg",
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
      "https://cdn.pixabay.com/photo/2016/11/19/10/27/airport-1838478_1280.jpg",
    description: "Comfortable and safe rides for daily family trips and tours.",
  },
  {
    title: "Event Transport",
    subtitle: "Weddings & Parties",
    image:
      "https://images.ctfassets.net/ov8o7v78mnye/1CNR5P40StxH9B9nIZ6C3y/bbbbb2f81f3166a645a4e5a17322de16/Blacklane_London_Social-13.jpg?w=768&f=center&q=85&fm=webp",
    description:
      "Premium travel arrangements for weddings, functions, and VIP guests.",
  },
  {
    title: "Tour Packages",
    subtitle: "Explore More",
    image:
      "https://cdn.pixabay.com/photo/2018/08/26/18/50/auto-3632975_1280.jpg",
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
          Our <span className="text-yellow-600">Premium Services</span>
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

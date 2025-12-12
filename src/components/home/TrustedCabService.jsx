import { motion } from "framer-motion";
import { CiCalendarDate } from "react-icons/ci";
import { FaHeadset, FaShieldAlt, FaCar, FaStar } from "react-icons/fa";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import Button from "../Button";
import { Link } from "react-router-dom";

const features = [
  { icon: IoLocationSharp, text: "Live Tracking", color: "text-blue-500" },
  { icon: FaShieldAlt, text: "Safe & Secure", color: "text-green-500" },
  { icon: IoTime, text: "On-Time Service", color: "text-purple-500" },
  { icon: FaCar, text: "Comfortable Fleet", color: "text-yellow-500" },
];

const TrustedCabService = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-20">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-52 -right-52 w-[28rem] h-[28rem] bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-52 -left-52 w-[28rem] h-[28rem] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-t from-yellow-50/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Ride */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.ctfassets.net/ov8o7v78mnye/1CNR5P40StxH9B9nIZ6C3y/bbbbb2f81f3166a645a4e5a17322de16/Blacklane_London_Social-13.jpg?w=768&f=center&q=85&fm=webp"
                alt="Luxury Ride Interior"
                className="w-full h-96 lg:h-[34rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Rating Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span className="font-bold text-gray-900">4.9/5</span>
                <span className="text-gray-600 text-sm">Rating</span>
              </div>
            </motion.div>

            {/* Floating Chauffeur */}
            <motion.div
              className="absolute -bottom-12 -right-8 w-2/3 lg:w-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img
                src="https://images.ctfassets.net/ov8o7v78mnye/39dmQd6ZEdWja0T21UjcU7/e434088a17d45ee6c75a6564d6acce30/Vehicles_ready_for_all_occasions.jpg?w=768&f=center&q=85&fm=webp"
                alt="Professional Chauffeur"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-center gap-2 text-white">
                  <FaShieldAlt className="text-green-400" />
                  <span className="text-sm font-medium">Verified Chauffeurs</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200 mt-12 lg:mt-20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Vehicles</div>
                </div>
                <div className="border-x border-gray-200">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 px-4 py-2 rounded-full border border-yellow-200"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-semibold text-yellow-800 uppercase tracking-wider">
                Premium Experience
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Enjoy a{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Linked Way Rides
              </span>{" "}
              with Total Comfort & Safety
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Experience smooth, comfortable, and secure travel with our premium fleet and professional chauffeurs.  
              Every journey is designed for your comfort, safety, and convenience.
            </motion.p>

            {/* Features */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`p-3 rounded-lg ${f.color} bg-white shadow-sm`}>
                    <f.icon className="text-xl" />
                  </div>
                  <span className="font-medium text-gray-800">{f.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-6 pt-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  text="Book Your Ride"
                  className="w-full sm:w-auto px-8 py-4 text-lg"
                  bgHover="black"
                  textHover="white"
                  cutHover="white"
                />
              </Link>

              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <FaHeadset className="text-yellow-600 text-xl" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <CiCalendarDate className="text-yellow-600 text-xl" />
                  <span className="text-sm">Easy Booking</span>
                </div>
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <img
                  src="https://images.ctfassets.net/ov8o7v78mnye/39dmQd6ZEdWja0T21UjcU7/e434088a17d45ee6c75a6564d6acce30/Vehicles_ready_for_all_occasions.jpg?w=768&f=center&q=85&fm=webp"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-sm" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic">
                    “Absolutely amazing experience! Super comfortable, clean, and professional.  
                    This service has truly upgraded the way I travel.”
                  </p>

                  <p className="text-sm text-gray-600 mt-2 font-medium">— Sarah Johnson</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCabService;

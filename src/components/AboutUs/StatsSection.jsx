import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "-50px 0px",
  });

 const stats = useMemo(() => [
  { 
    num: 10, 
    suffix: "+", 
    label: "Years in Service", 
    desc: "Linkedway Rides has been providing safe, reliable, and punctual airport pick & drop services for over a decade, building trust with every journey.", 
    duration: 3 
  },
  { 
    num: 5000, 
    suffix: "+", 
    label: "Airport Trips Completed", 
    desc: "Thousands of passengers have reached their flights on time, thanks to our efficient airport transfer services across major cities.", 
    duration: 4 
  },
  { 
    num: 6000, 
    suffix: "+", 
    label: "Happy Travelers", 
    desc: "Our passengers consistently rate Linkedway Rides highly for comfort, punctuality, and professional airport service.", 
    duration: 3.5 
  },
  
  { 
    num: 98, 
    suffix: "%", 
    label: "Customer Satisfaction", 
    desc: "Linkedway Rides ensures 98% of our passengers experience stress-free airport transfers, with courteous drivers and on-time pickups.", 
    duration: 2.5
  },
], []);



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5,
      }
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-10 lg:py-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Our Journey in Numbers
          </h2>
         
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-200/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-yellow-400/30 h-full flex flex-col">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Number */}
                <div className="relative mb-6 flex justify-center">
                  <motion.div
                    variants={numberVariants}
                    className="text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent"
                  >
                    {inView ? (
                      <CountUp
                        end={stat.num}
                        duration={stat.duration}
                        suffix={stat.suffix}
                        separator=","
                        enableScrollSpy
                        scrollSpyDelay={200}
                        scrollSpyOnce
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1 group-hover:text-gray-700 transition-colors duration-300">
                    {stat.desc}
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-500 rounded-full" />
              </div>

              {/* Floating Element */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:scale-150" />
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
}
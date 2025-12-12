import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PopularDestination() {
   const countries = [
    {
      img: "/src/assets/home/c1.svg",
      title: "Spain",
      places: [
        {
          name: "Sagrada Familia, Barcelona",
          image: "https://images.ctfassets.net/ov8o7v78mnye/1CNR5P40StxH9B9nIZ6C3y/bbbbb2f81f3166a645a4e5a17322de16/Blacklane_London_Social-13.jpg?w=768&f=center&q=85&fm=webp",
        },
        {
          name: "Alhambra Palace, Granada",
          image:
            "https://images.ctfassets.net/ov8o7v78mnye/1bGHzDEQmkTXeycJoZnH3G/aef3e646c68a8258b1812f34a31fe1a0/SEO_EQS2.jpg?w=768&f=center&q=85&fm=webp",
        },
        {
          name: "Park Güell, Barcelona",
          image:
            "https://cdn.pixabay.com/photo/2020/05/16/16/15/people-5178116_1280.jpg",
        },
       
      ],
    },
    {
      img: "/src/assets/home/c2.svg",
      title: "Italy",
      places: [
        {
          name: "Colosseum, Rome",
          image: "https://images.ctfassets.net/ov8o7v78mnye/3dgPi0nV3HSv1tNibhVxFm/4ba3b779692796dce9a5f48606ac19b5/03_AT.jpg?w=350&h=250&fit=fill&f=center&q=95&fm=webp",
        },
        
        {
          name: "Leaning Tower of Pisa",
          image:
            "https://cdn.pixabay.com/photo/2024/02/28/10/51/ai-generated-8601779_1280.jpg",
        },
        {
          name: "Amalfi Coast",
          image: "https://images.ctfassets.net/ov8o7v78mnye/1wAh2er4Ka7t5ez8CP9lhi/289c6dfc3d72fd6827b8f80bef8a0c67/LONDON_EQS_DAY_11603_sRGBsmaller.webp?w=768&f=center&q=85&fm=webp",
        },
      ],
    },
    {
      img: "/src/assets/home/c3.svg",
      title: "Portugal",
      places: [
        {
          name: "Belém Tower, Lisbon",
          image:
            "https://images.ctfassets.net/ov8o7v78mnye/20JnvDvfXXKakSWOiXZ9Lx/15dcc1c104c3f370c7201e44f7c6f98c/narrowcitybroad3.webp?w=768&f=center&q=85&fm=webp",
        },
        {
          name: "Pena Palace, Sintra",
          image:
            "https://images.ctfassets.net/ov8o7v78mnye/7uqZylnYSY5Mod4B6EflzB/e67ab7a11bc2f31ffa074b0525a41571/Blacklane_Socials_NYC-15.jpg?w=350&h=250&fit=fill&f=center&q=95&fm=webp",
        },
        {
          name: "Douro Valley",
          image:
            "https://images.ctfassets.net/ov8o7v78mnye/2EEbbY6DSnZkbfuyGnf1QY/5cc11a3a1892e05c4f00c8b1c03119d1/CTC.webp?w=350&h=250&fit=fill&f=center&q=95&fm=webp",
        },
       
      ],
    },
    {
      img: "/src/assets/home/c4.svg",
      title: "France",
      places: [
        {
          name: "Eiffel Tower, Paris",
          image:
            "https://cdn.pixabay.com/photo/2020/04/22/05/25/grand-central-terminal-5075970_1280.jpg",
        },
       
        {
          name: "French Riviera",
          image:
            "https://cdn.pixabay.com/photo/2016/07/09/21/47/car-1506922_1280.jpg",
        },
        {
          name: "Louvre Museum",
          image:
            "https://cdn.pixabay.com/photo/2024/06/11/13/30/ai-generated-8823151_1280.jpg",
        },
      ],
    },
    {
      img: "/src/assets/home/c5.svg",
      title: "Croatia",
      places: [
        {
          name: "Dubrovnik Old Town",
          image:
            "https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857_1280.jpg",
        },
        {
          name: "Plitvice Lakes",
          image:
            "https://cdn.pixabay.com/photo/2024/05/05/10/08/car-8740899_1280.png",
        },
        {
          name: "Diocletian's Palace, Split",
          image:
            "https://cdn.pixabay.com/photo/2023/07/24/19/50/plane-8147761_1280.jpg",
        },
      ],
    },
    {
      img: "/src/assets/home/c6.svg",
      title: "Greece",
     places: [
  {
    name: "Family Rides",
    image:
      "https://cdn.pixabay.com/photo/2015/06/27/05/26/travel-823296_1280.jpg",
  },
  {
    name: "Business Class Travel",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Airport Transfers",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
  },
  
],

    },
    {
      img: "/src/assets/home/c7.svg",
      title: "United Arab Emirates",
     places: [
  {
    name: "Sheikh Zayed Grand Mosque, Abu Dhabi",
    image:
      "https://cdn.pixabay.com/photo/2014/02/26/18/31/airport-275439_1280.jpg",
  },
  {
    name: "Palm Jumeirah, Dubai",
    image:
      "https://cdn.pixabay.com/photo/2016/11/27/10/14/mercedes-benz-1862512_1280.jpg",
  },
  {
    name: "Dubai Mall",
    image:
      "https://cdn.pixabay.com/photo/2018/08/26/18/50/auto-3632975_1280.jpg",
  }
],

    },
    {
      img: "/src/assets/home/c8.svg",
      title: "United States",
      places: [
  {
    name: "Luxury Ride Experience",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Airport Pickup & Drop-off",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/10/27/airport-1838478_1280.jpg",
  },
  {
    name: "Family Travel & Comfort",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1600&q=80",
  },
],

    },
    {
      img: "/src/assets/home/c9.svg",
      title: "Malta",
      places: [
        {
          name: "Blue Grotto",
          image:
            "https://cdn.pixabay.com/photo/2016/11/21/16/37/cabin-1846344_1280.jpg",
        },
        {
          name: "Mdina Old City",
          image:
            "https://cdn.pixabay.com/photo/2021/08/15/17/34/car-6548439_1280.jpg",
        },
        {
          name: "St. John's Co-Cathedral",
          image:
            "https://cdn.pixabay.com/photo/2015/05/20/14/39/baggage-hall-775540_1280.jpg",
        },
       
      ],
    },
    {
      img: "/src/assets/home/c10.svg",
      title: "Morocco",
      places: [
        {
          name: "Jemaa el-Fnaa, Marrakech",
          image:
            "https://cdn.pixabay.com/photo/2019/11/12/23/36/mercedes-eqc-4622245_1280.jpg",
        },
        {
          name: "Hassan II Mosque, Casablanca",
          image:
            "https://cdn.pixabay.com/photo/2020/01/09/18/25/mercedes-4753564_1280.jpg",
        },
        {
          name: "Chefchaouen Blue City",
          image:
            "https://cdn.pixabay.com/photo/2018/07/10/10/40/mercedes-3528323_1280.jpg",
        },
       
      ],
    },
    {
      img: "/src/assets/home/c12.svg",
      title: "Turkey",
      places: [
        {
          name: "Hagia Sophia, Istanbul",
          image:
            "https://cdn.pixabay.com/photo/2020/03/13/07/34/auto-4927195_1280.jpg",
        },
        {
          name: "Cappadocia",
          image:
            "https://cdn.pixabay.com/photo/2020/07/28/15/04/airport-5445373_1280.jpg",
        },
        {
          name: "Pamukkale Thermal Pools",
          image:
            "https://cdn.pixabay.com/photo/2022/11/02/10/05/passport-7564502_1280.jpg",
        },
      ],
    },
    {
      img: "/src/assets/home/c15.svg",
      title: "Gambia",
      places: [
        {
          name: "Kachikally Crocodile Pool",
          image: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg",
        },
        {
          name: "Banjul Arch 22",
          image: "https://cdn.pixabay.com/photo/2016/11/13/21/45/airport-1822133_1280.jpg",
        },
        {
          name: "Makasutu Culture Forest",
          image: "https://cdn.pixabay.com/photo/2020/05/25/17/03/merry-christmas-5219496_1280.jpg",
        },
       
      ],
    },
    // {
    //   img: "/src/assets/home/c16.svg",
    //   title: "Tunisia",
    //   places: [
    //     {
    //       name: "Amphitheatre of El Jem",
    //       image: "https://images.unsplash.com/photo-1604937464994-04dd5d14318e"
    //     },
    //     {
    //       name: "Sidi Bou Said",
    //       image: "https://images.unsplash.com/photo-1554926757-6bffff2c9a70"
    //     },
    //     {
    //       name: "Carthage Ruins",
    //       image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5"
    //     },
    //     {
    //       name: "Sahara Desert Oasis",
    //       image: "https://images.unsplash.com/photo-1578314115812-78d10edc91c3"
    //     }
    //   ]
    // },
    // {
    //   img: "/src/assets/home/c17.svg",
    //   title: "Poland",
    //   places: [
    //     {
    //       name: "Wawel Castle, Krakow",
    //       image: "https://images.unsplash.com/photo-1612821962044-1fb26a40cc1a"
    //     },
    //     {
    //       name: "Warsaw Old Town",
    //       image: "https://images.unsplash.com/photo-1540307049752-16e7887e2213"
    //     },
    //     {
    //       name: "Auschwitz-Birkenau",
    //       image: "https://images.unsplash.com/photo-1596765798031-b3b3e2183e87"
    //     },
    //     {
    //       name: "Tatra Mountains",
    //       image: "https://images.unsplash.com/photo-1579482937747-d119c676d1a9"
    //     }
    //   ]
    // },
    // {
    //   img: "/src/assets/home/c18.svg",
    //   title: "Senegal",
    //   places: [
    //     {
    //       name: "Gorée Island",
    //       image: "https://images.unsplash.com/photo-1526404079166-74e4c3ad3c3f"
    //     },
    //     {
    //       name: "Lake Retba Pink Lake",
    //       image: "https://images.unsplash.com/photo-1576013551621-0a8e0c85ef6c"
    //     },
    //     {
    //       name: "Bandia Wildlife Reserve",
    //       image: "https://images.unsplash.com/photo-1546979601-0cc9a98e82a6"
    //     },
    //     {
    //       name: "African Renaissance Monument",
    //       image: "https://images.unsplash.com/photo-1533967724128-661cc2e59e51"
    //     }
    //   ]
    // }
  ];

  const [activeCountry, setActiveCountry] = useState(countries[0]);
  const scrollRef = useRef(null);
  const countryRefs = useRef({});

  const scrollToActiveCountry = (countryTitle) => {
    const element = countryRefs.current[countryTitle];
    if (element && scrollRef.current) {
      const container = scrollRef.current;
      const elementLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      const containerWidth = container.offsetWidth;

      const scrollPosition =
        elementLeft - containerWidth / 2 + elementWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const currentIndex = countries.findIndex(
      (c) => c.title === activeCountry.title
    );
    const nextIndex = (currentIndex + 1) % countries.length;
    const nextCountry = countries[nextIndex];
    setActiveCountry(nextCountry);
    scrollToActiveCountry(nextCountry.title);
  };

  const handlePrev = () => {
    const currentIndex = countries.findIndex(
      (c) => c.title === activeCountry.title
    );
    const prevIndex =
      currentIndex === 0 ? countries.length - 1 : currentIndex - 1;
    const prevCountry = countries[prevIndex];
    setActiveCountry(prevCountry);
    scrollToActiveCountry(prevCountry.title);
  };

  const handleCountryClick = (country) => {
    setActiveCountry(country);
    scrollToActiveCountry(country.title);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = countries.findIndex(
        (c) => c.title === activeCountry.title
      );
      const nextIndex = (currentIndex + 1) % countries.length;
      const nextCountry = countries[nextIndex];
      setActiveCountry(nextCountry);
      scrollToActiveCountry(nextCountry.title);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeCountry, countries]);

  useEffect(() => {
    scrollToActiveCountry(activeCountry.title);
  }, []);

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="py-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl font-bold mb-8 text-gray-900"
        variants={zoomIn}
      >
        Our Most <span className="text-[#D68F00]">Popular Destinations</span>
      </motion.h1>

      {/* Country List with scroll + arrows */}
      <div className="relative mt-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-blue-100 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>

        {/* Scrollable Countries */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto px-10 scroll-smooth hide-scrollbar"
        >
          {countries.map((value) => (
            <motion.div
              key={value.title}
              ref={(el) => (countryRefs.current[value.title] = el)}
              onClick={() => handleCountryClick(value)}
              className={`flex items-center gap-2 px-4 py-3 cursor-pointer border-b-2 min-w-max transition-all duration-300 rounded-lg ${
                activeCountry.title === value.title
                  ? "border-blue-600 text-blue-600 font-semibold scale-105 bg-blue-50 shadow-sm"
                  : "border-transparent text-gray-600 hover:text-blue-500"
              }`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={value.img}
                alt={value.title}
                className="h-8 w-8 rounded-full object-cover shadow-sm"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <h1 className="whitespace-nowrap text-base sm:text-lg">
                {value.title}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-blue-100 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-blue-600" />
        </button>
      </div>

      {/* Active Country Title */}
      <motion.div className="mt-8 text-center" variants={fadeUp}>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Popular in{" "}
          <span className="text-blue-600">{activeCountry.title}</span>
        </h2>
      </motion.div>

      {/* Related Places */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeCountry.places.map((place, idx) => (
          <motion.div
            key={idx}
            className="bg-white hover:text-amber-400 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500"
            variants={zoomIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 + idx * 0.1 }}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-t-xl group">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=300&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            </div>

            {/* Place Info */}
            <div className="p-4 text-center sm:text-left">
              <h3 className="font-semibold text-lg text-gray-900">
                {place.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom CSS for scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
}

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
          image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
        },
        {
          name: "Alhambra Palace, Granada",
          image:
            "https://img.freepik.com/free-photo/cathedral-transfiguration-lord-huesca_1398-4437.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Park Güell, Barcelona",
          image:
            "https://img.freepik.com/free-photo/panoramic-view-barcelona-multiple-building-s-roofs-view-from-parc-guell-spain_1268-18048.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Royal Palace, Madrid",
          image:
            "https://img.freepik.com/free-photo/palacio-de-cibeles-summer-night-madrid_1398-2172.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
      ],
    },
    {
      img: "/src/assets/home/c2.svg",
      title: "Italy",
      places: [
        {
          name: "Colosseum, Rome",
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
        },
        {
          name: "Venice Canals",
          image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
        },
        {
          name: "Leaning Tower of Pisa",
          image:
            "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297190.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Amalfi Coast",
          image: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5",
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
            "https://img.freepik.com/free-photo/tower-belem-surrounded-by-sea-buildings-cloudy-sky-portugal_181624-10409.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Pena Palace, Sintra",
          image:
            "https://img.freepik.com/free-photo/medieval-bridge-with-gate-tower_1398-3161.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Douro Valley",
          image:
            "https://img.freepik.com/free-photo/famous-solutre-rock-with-vineyards-burgundy-france_268835-695.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Algarve Coast",
          image:
            "https://img.freepik.com/free-photo/sideways-woman-enjoying-view-with-copy-space_23-2148699837.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
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
            "https://img.freepik.com/free-photo/famous-eiffel-tower-paris-autumn_268835-834.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Mont Saint-Michel",
          image:
            "https://img.freepik.com/premium-photo/mont-saint-michel-abbey_70898-2274.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "French Riviera",
          image:
            "https://img.freepik.com/free-photo/aegean-sea-coast-greece-loutra-buildings-located-near-rocky-cliffs-greenery-blue-water-view-from-drone_1268-16375.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Louvre Museum",
          image:
            "https://img.freepik.com/free-photo/famous-terreaux-square-lyon-city-by-night-france_268835-1081.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
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
            "https://img.freepik.com/free-photo/mesmerizing-view-fort-bokar-along-walls-dubrovnik-s-medieval-old-city-croatia_181624-50313.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Plitvice Lakes",
          image:
            "https://img.freepik.com/free-photo/panoramic-view-forest-river_23-2148927940.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Diocletian's Palace, Split",
          image:
            "https://img.freepik.com/free-photo/weather-effects-collage-concept_23-2150062093.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
      ],
    },
    {
      img: "/src/assets/home/c6.svg",
      title: "Greece",
      places: [
        {
          name: "Acropolis, Athens",
          image:
            "https://img.freepik.com/free-photo/temple-architecture-from-ancient-greek-civilization_23-2151664676.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Santorini",
          image:
            "https://img.freepik.com/free-photo/santorini-typographic-optical-illusion_23-2151005906.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Mykonos Windmills",
          image:
            "https://img.freepik.com/premium-photo/traditional-windmill-against-clear-blue-sky_1048944-601859.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Meteora Monasteries",
          image:
            "https://img.freepik.com/free-photo/beautiful-shot-mountains-greenery-blue-sky-cuenca-spain_181624-18022.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
      ],
    },
    {
      img: "/src/assets/home/c7.svg",
      title: "United Arab Emirates",
      places: [
        {
          name: "Burj Khalifa, Dubai",
          image:
            "https://img.freepik.com/free-photo/futuristic-dubai-landscape_23-2151339742.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Sheikh Zayed Mosque, Abu Dhabi",
          image:
            "https://img.freepik.com/free-photo/look-from-afar-awesome-buildings-shekh-zayed-grand-mosque_1304-3215.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Palm Jumeirah",
          image:
            "https://img.freepik.com/free-photo/dubai-marina_158595-1999.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Dubai Mall",
          image:
            "https://img.freepik.com/premium-photo/city-retail-customer-girl-business_926199-2891533.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
      ],
    },
    {
      img: "/src/assets/home/c8.svg",
      title: "United States",
      places: [
        {
          name: "Statue of Liberty, NYC",
          image:
            "https://img.freepik.com/free-photo/statue-liberty-liberty-island-new-york_268835-780.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Golden Gate Bridge, SF",
          image:
            "https://img.freepik.com/free-photo/golden-gate-bridge-body-water-near-rock-formations-sunset-san-francisco-california_181624-3228.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Grand Canyon",
          image:
            "https://img.freepik.com/premium-photo/high-angle-view-man-sitting-cliff-against-canyon_1048944-19573835.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
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
            "https://img.freepik.com/premium-photo/view-sea-seen-through-rock-formation_1048944-5982141.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Mdina Old City",
          image:
            "https://img.freepik.com/premium-photo/tuscany-italy-april-4-2017-view-street-old-town-san-gimignano-province-siena-tuscany-italy-april-4-2017_522472-3286.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "St. John's Co-Cathedral",
          image:
            "https://img.freepik.com/free-photo/church_1127-3160.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Blue Lagoon, Comino",
          image:
            "https://img.freepik.com/free-photo/beautiful-outdoor-swimming-pool-with-sea-ocean-white-cloud-blue-sky_74190-8835.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
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
            "https://img.freepik.com/free-photo/view-koutoubia-mosque-night-marrakech_268835-3935.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Hassan II Mosque, Casablanca",
          image:
            "https://img.freepik.com/free-photo/hassan-ii-mosque-surrounded-by-water-buildings-blue-sky-sunlight_181624-26376.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Chefchaouen Blue City",
          image:
            "https://img.freepik.com/free-photo/backpacker-explores-intricate-alleyways-jodhpur39s-blue-city-india-experiencing-vibrant-colors-cultural-richness_73899-44095.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Sahara Desert",
          image:
            "https://img.freepik.com/free-photo/sahara-desert-sunlight-blue-sky-morocco-africa_181624-12415.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
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
            "https://img.freepik.com/free-photo/blue-mosque-night-city-istanbul-turkey_628469-10.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Cappadocia",
          image:
            "https://img.freepik.com/premium-photo/hot-air-balloon-flying-rock-landscape-cappadocia-turkey_146671-12868.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
        {
          name: "Pamukkale Thermal Pools",
          image:
            "https://img.freepik.com/free-photo/beautiful-view-te-puia-geyser-rotorua-new-zealand_181624-45943.jpg?ga=GA1.1.1029239798.1754464986&semt=ais_hybrid&w=740&q=80",
        },
      ],
    },
    {
      img: "/src/assets/home/c15.svg",
      title: "Gambia",
      places: [
        {
          name: "Kachikally Crocodile Pool",
          image: "https://images.unsplash.com/photo-1622012072517-169619cc24d0",
        },
        {
          name: "Banjul Arch 22",
          image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
        },
        {
          name: "Makasutu Culture Forest",
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        },
        {
          name: "Gambia River",
          image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
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

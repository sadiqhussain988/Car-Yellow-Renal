import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const AuthorityBrands = () => {
  const brands = [
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/79/75/27/caption.jpg?w=1200&h=-1&s=1",
      alt: "Highway transport",
      caption: "City-to-City Rides",
    },
    {
      src: "https://images.ctfassets.net/ov8o7v78mnye/6yMUqFplbEiRd5JHNWNAsM/fb7725cb2938a62346323ea314376b46/AT.jpg?w=350&h=250&fit=fill&f=center&q=95&fm=webp",
      alt: "Cargo transport",
      caption: "Airport Transfers",
    },
    {
      src: "https://images.ctfassets.net/ov8o7v78mnye/4djvLcf0zvncORTn6eFFwP/7a9941e1689df86166cc9daa082e8d41/Blacklane-London-Social-13_Hourly.jpg?w=350&h=250&fit=fill&f=center&q=95&fm=webp",
      alt: "Truck on road",
      caption: "Hourly Hire",
    },
    {
      src: "https://images.ctfassets.net/ov8o7v78mnye/33CHa9SOzyCG20bMcgSrDt/7e56fe857cdf5cbdd44e9d5842e74249/Complementary__1_.jpg?w=350&h=250&fit=fill&f=center&q=95&fm=webp",
      alt: "City traffic",
      caption: "Chauffeur Service",
    },
    {
      src: "https://d1ss4nmhr4m5he.cloudfront.net/wp-content/uploads/2024/03/04080107/5-Essential-Car-Rental-Tips-for-a-Smooth-Business-Travel-Experience-1024x544.jpg",
      alt: "Bus transport",
      caption: "Passenger & Shuttle Services",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHya5BtJ6QcnQJIwlZO_UdGv5klQ1BK9hj-Q&s",
      alt: "Van transport",
      caption: "Corporate Fleet",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQPttUJMMxSV6tMkTcx21hTK98SyWKf9Y1Q&s",
      alt: "Luxury car",
      caption: "VIP Services",
    },
    {
      src: "https://img1.wsimg.com/isteam/ip/aa9724e9-8d66-4f25-bf92-67000f78189e/Car%20rental%20en%20grupo.jpg/:/cr=t:0%25,l:25%25,w:50%25,h:100%25/rs=w:365,h:365,cg:true",
      alt: "Delivery van",
      caption: "Cargo Logistics",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWizQS3lMDqu9b0ifzeElc3jrZL7iEXHF4g&s",
      alt: "Minibus",
      caption: "Shuttle Services",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZk56B1AY6W4Ke-MW4WL0eGTSe81KkoRitiQ&s",
      alt: "Parking lot",
      caption: "Fleet Management",
    },
  ];

  const swiperConfig = {
    modules: [Autoplay, FreeMode],
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 2000,
    loop: true,
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 20,
    breakpoints: {
      0: { spaceBetween: 5 },
      640: { spaceBetween: 20 },
      1024: { spaceBetween: 40 },
    },
    className: "brands-swiper",
  };

  return (
    <div className="bg-gray-50 py-16 px-4 rounded-2xl">
      {/* ... other parts remain the same ... */}
      <Swiper {...swiperConfig}>
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="flex flex-col items-center justify-center px-4">
              {/* Use the src directly from the brands array */}
              <img
                src={brand.src} // Changed: removed the appended query string
                alt={brand.alt}
                className="h-28 w-full object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-700 mt-2 font-medium">
                {brand.caption}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AuthorityBrands;

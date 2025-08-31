import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "I've ordered indoor plants from here multiple times, and every delivery has been perfect. The packaging is eco-friendly, and my plants always arrive healthy and thriving.",
    name: "Emily R.",
    role: "Plant Enthusiast",
    img: "https://source.unsplash.com/80x80/?portrait,1",
    rating: 5,
  },
  {
    text: "The variety of herbs and succulents is amazing. I especially love the care tips provided with each plant — they’ve helped me become a better plant parent!",
    name: "Jason T.",
    role: "Home Gardener",
    img: "https://source.unsplash.com/80x80/?portrait,2",
    rating: 4,
  },
  {
    text: "This site has transformed my balcony into a mini jungle. The plants are beautiful, well-priced, and the customer service is top-notch. Highly recommend!",
    name: "Nina L.",
    role: "Urban Plant Lover",
    img: "https://source.unsplash.com/80x80/?portrait,3",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className=" px-6 lg:px-20 relative">
      {/* Background Decoration */}
      <div className="absolute 
	  0 pointer-events-none"></div>

      <div className="text-center mb-14 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          What Our Plant Lovers Say
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Thousands of happy customers are growing greener homes with us.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12 relative z-10"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-2xl p-8 flex flex-col justify-between h-full border border-green-100 dark:border-green-900 hover:shadow-2xl transition-all duration-300">
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-green-400 mb-4" />

              {/* Testimonial Text */}
              <p className="italic text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                “{t.text}”
              </p>

              {/* Star Rating */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < t.rating
                        ? "text-green-500 fill-green-500"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm uppercase text-green-600 dark:text-green-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

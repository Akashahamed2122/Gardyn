import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Star, Quote, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "I've ordered indoor plants from here multiple times, and every delivery has been perfect. The packaging is eco-friendly, and my plants always arrive healthy and thriving.",
    name: "Emily R.",
    role: "Plant Enthusiast",
    img: "https://source.unsplash.com/80x80/?portrait,1",
    rating: 5,
    location: "Portland, OR",
    date: "2 weeks ago"
  },
  {
    text: "The variety of herbs and succulents is amazing. I especially love the care tips provided with each plant — they've helped me become a better plant parent!",
    name: "Jason T.",
    role: "Home Gardener",
    img: "https://source.unsplash.com/80x80/?portrait,2",
    rating: 4,
    location: "Austin, TX",
    date: "1 month ago"
  },
  {
    text: "This site has transformed my balcony into a mini jungle. The plants are beautiful, well-priced, and the customer service is top-notch. Highly recommend!",
    name: "Nina L.",
    role: "Urban Plant Lover",
    img: "https://source.unsplash.com/80x80/?portrait,3",
    rating: 5,
    location: "New York, NY",
    date: "3 days ago"
  },
  {
    text: "As a beginner plant owner, I was nervous about keeping plants alive. Their detailed care guides and responsive support team made all the difference!",
    name: "Michael K.",
    role: "Beginner Gardener",
    img: "https://source.unsplash.com/80x80/?portrait,4",
    rating: 5,
    location: "Chicago, IL",
    date: "2 months ago"
  },
  {
    text: "The subscription service is fantastic! I get a new unique plant every month and my collection has grown into something truly special.",
    name: "Sophia M.",
    role: "Plant Collector",
    img: "https://source.unsplash.com/80x80/?portrait,5",
    rating: 4,
    location: "San Francisco, CA",
    date: "1 week ago"
  },
];

const Testimonials = () => {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const toggleAutoplay = () => {
    setAutoplayEnabled(!autoplayEnabled);
    if (swiperRef.current && swiperRef.current.swiper) {
      if (autoplayEnabled) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          What Our <span className="text-green-600">Plant Lovers</span> Say
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 max-w-xl mx-auto">
          Join thousands of happy customers growing greener homes with us.
        </p>
      </div>

      {/* Custom Controls */}
      <div className="flex justify-center items-center gap-4 mb-10">
        <button 
          onClick={goPrev}
          className="p-3 rounded-full bg-gray-100 shadow-md hover:bg-green-50 transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-green-600" />
        </button>
        
        <button 
          onClick={toggleAutoplay}
          className="p-3 rounded-full bg-gray-100 shadow-md hover:bg-green-50 transition-all duration-300"
          aria-label={autoplayEnabled ? "Pause autoplay" : "Play autoplay"}
        >
          {autoplayEnabled ? (
            <Pause className="w-5 h-5 text-green-600" />
          ) : (
            <Play className="w-5 h-5 text-green-600" />
          )}
        </button>
        
        <button 
          onClick={goNext}
          className="p-3 rounded-full bg-gray-100 shadow-md hover:bg-green-50 transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-green-600" />
        </button>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false 
        }}
        pagination={{ 
          clickable: true,
          el: '.testimonial-pagination',
          bulletClass: 'testimonial-bullet',
          bulletActiveClass: 'testimonial-bullet-active'
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className={`bg-white shadow-md rounded-2xl p-8 flex flex-col justify-between h-full border border-gray-100 transition-all duration-300 hover:shadow-lg ${activeIndex === i ? 'ring-2 ring-green-500/30 scale-[1.02]' : ''}`}>
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-green-400" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t.text}
              </p>

              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-5 h-5 ${idx < t.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">{t.rating}/5</span>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-500 shadow-sm"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-sm text-green-600 font-medium">
                    {t.role}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{t.location}</span>
                    <span>{t.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="testimonial-pagination flex justify-center gap-2 mt-6"></div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
        <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-green-600">10K+</div>
          <div className="text-sm text-gray-600 mt-2">Happy Customers</div>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-green-600">4.9</div>
          <div className="text-sm text-gray-600 mt-2">Average Rating</div>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-green-600">500+</div>
          <div className="text-sm text-gray-600 mt-2">Plant Varieties</div>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-green-600">98%</div>
          <div className="text-sm text-gray-600 mt-2">Delivery Success</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

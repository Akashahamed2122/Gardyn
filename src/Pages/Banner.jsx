import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import banner from '../assets/slider1.jpg';
import images from '../assets/slider2.jpg';
import imgd from '../assets/slider3.jpg';

const cards = [
  {
    img: banner,
    title: 'Orchid',
    desc: `Orchids are a diverse and widespread family of flowering plants with colorful and fragrant blooms.`,
    buttonText: 'Shop Orchids',
    gradient: 'from-purple-600/70 to-pink-500/70'
  },
  {
    img: images,
    title: 'Monstera',
    desc: `Monstera is a popular indoor plant with large, split leaves and low maintenance.`,
    buttonText: 'Explore Monsteras',
    gradient: 'from-green-600/70 to-emerald-500/70'
  },
  {
    img: imgd,
    title: 'Snake Plant',
    desc: `Snake Plant is hardy and helps purify the air, surviving low light and dry conditions.`,
    buttonText: 'View Collection',
    gradient: 'from-teal-600/70 to-cyan-500/70'
  },
  {
    img: images,
    title: 'Peace Lily',
    desc: `Peace Lily is known for its beautiful white flowers and air-purifying qualities.`,
    buttonText: 'Discover Peace Lilies',
    gradient: 'from-blue-600/70 to-indigo-500/70'
  },
];

const Banner = () => {
  return (
    <div className="w-full mx-auto py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-4xl font-bold mb-2 text-center text-green-800">🌿 Our Favorite Plants</h2>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Discover our curated collection of beautiful indoor plants that bring life to any space
        </p> */}
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <Swiper
            effect={'fade'}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active'
            }}
            modules={[EffectFade, Autoplay, Pagination]}
            className="h-full"
          >
            {cards.map((plant, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-96 md:h-[500px] w-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${plant.gradient} z-10`}></div>
                  <img 
                    src={plant.img} 
                    alt={plant.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-left px-8 md:px-16">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
                      {plant.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white mb-8 max-w-lg animate-fade-in-delay">
                      {plant.desc}
                    </p>
                    <button className="bg-white text-green-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 animate-fade-in-more-delay">
                      {plant.buttonText} →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom pagination container */}
          <div className="custom-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2"></div>
          
          {/* Navigation arrows */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 hidden md:block">
            <button className="swiper-button-prev-custom bg-white/80 hover:bg-white text-green-800 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-all duration-300">
              ←
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 hidden md:block">
            <button className="swiper-button-next-custom bg-white/80 hover:bg-white text-green-800 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-all duration-300">
              →
            </button>
          </div>
        </div>
        
        {/* Thumbnail gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {cards.map((plant, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <img src={plant.img} alt={plant.title} className="w-full h-40 object-cover" />
              <div className="p-3 bg-white">
                <h4 className="font-semibold text-green-800">{plant.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 0.8s ease 0.3s forwards;
        }
        .animate-fade-in-more-delay {
          opacity: 0;
          animation: fadeIn 0.8s ease 0.6s forwards;
        }
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          cursor: pointer;
          margin: 0 5px;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background: white;
          width: 30px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Banner;
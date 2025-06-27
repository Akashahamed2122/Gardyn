import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import banner from '../assets/banner.jpg';
import images from '../assets/carosel1.webp';
import imgd from '../assets/carosel2.webp';
import img1 from '../assets/carosol1.jpg';

const cards = [
  {
    img: banner,
    title: 'Orchid',
    desc: `Orchids are a diverse and widespread family of flowering plants with colorful and fragrant blooms.`,
  },
  {
    img: images,
    title: 'Monstera',
    desc: `Monstera is a popular indoor plant with large, split leaves and low maintenance.`,
  },
  {
    img: imgd,
    title: 'Snake Plant',
    desc: `Snake Plant is hardy and helps purify the air, surviving low light and dry conditions.`,
  },
  {
    img: img1,
    title: 'Peace Lily',
    desc: `Peace Lily is known for its beautiful white flowers and air-purifying qualities.`,
  },
  {
    img: img1,
    title: 'Peace Lily',
    desc: `Peace Lily is known for its beautiful white flowers and air-purifying qualities.`,
  },
  {
    img: images,
    title: 'Peace Lily',
    desc: `Peace Lily is known for its beautiful white flowers and air-purifying qualities.`,
  },
];

const Banner = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">🌿 Our Favorite Plants</h2>
      <Swiper
        slidesPerView={2}                // ✅ একসাথে ২টা slide দেখাবে
        slidesPerGroup={2}               // ✅ একবার slide করলে ২টা করে যাবে
        loop={true}                      // ✅ লুপ চালু
        loopFillGroupWithBlank={true}   // ✅ গ্রুপ শেষেও ব্ল্যাঙ্ক না রেখে ব্যালেন্স রাখবে
        autoplay={{
          delay: 2500,                   // ⏱️ একটু বেশি delay দেওয়া ভালো ইউজার experience-এর জন্য
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="rounded-lg"
      >
        {cards.map((plant, idx) => (
          <SwiperSlide key={idx} className="bg-green-50 rounded-lg shadow-lg overflow-hidden flex flex-col mx-2">
            <img src={plant.img} alt={plant.title} className="w-full h-100 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">{plant.title}</h3>
              <p className="text-gray-700 leading-relaxed">{plant.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

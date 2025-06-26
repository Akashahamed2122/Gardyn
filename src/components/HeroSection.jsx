import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "DISCOVER AMAZING VARIETY OF PLANTS",
    subtitle: "BEST QUALITY PLANTS",
    description: "From vibrant flowering plants to lush tropical greens, we offer an incredible variety to turn your space into a living paradise.",
    image: "https://i.ibb.co/bjg8kppk/aloe-vera-mini.webp",
    features: ["Special Price", "Free Delivery", "Guarantee"],
    product: "Algonema Plant with Teracota Pot",
  },
  {
    title: "Bring Home the Joy of Greenery",
    subtitle: "FRESH & GREEN",
    description: "Transform your room with refreshing indoor plants delivered directly to you.",
    image: "https://i.ibb.co/KxrqjGMc/ficus-lyrata.webp",
    features: ["Top Rated", "Eco-Friendly"],
    product: "Snake Plant in White Pot",
  },
  {
    title: "BRING NATURE INTO YOUR HOME",
    subtitle: "FRESH & GREEN",
    description: "Transform your room with refreshing indoor plants delivered directly to you.",
    image: "https://i.ibb.co/x83sxd6c/calathea-sanderiana-1.webp",
    features: ["Top Rated", "Fast Delivery", "Eco-Friendly"],
    product: "Snake Plant in White Pot",
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="  py-12">
      <div className="w-10/12 mx-auto px-4">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="flex flex-col lg:flex-row items-center h-[60vh] justify-between gap-8">
                {/* Left: Text Content */}
                <div className="lg:w-[70%] md:pl-20 space-y-6 text-center lg:text-left">
                  <span className="text-sm font-semibold text-green-700 uppercase">{slide.subtitle}</span>
                  <h1 className="text-4xl lg:text-5xl font-bold text-green-900 leading-tight">{slide.title}</h1>
                  <p className="">{slide.description}</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {slide.features.map((f, i) => (
                      <div key={i} className=" border px-4 py-2 rounded-xl text-sm font-medium  shadow-sm">
                        {f}
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                    SHOP NOW
                  </button>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-[30%] flex flex-col items-center">
                  <img src={slide.image} alt={slide.product} className="w-[300px] lg:w-[400px]" />
                  <div className="mt-4  px-4 py-2 rounded shadow text-center font-medium">
                    {slide.product}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;

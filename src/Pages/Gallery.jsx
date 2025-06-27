import React, { useState } from 'react';
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/4.webp';
import img5 from '../assets/5.webp';
import img6 from '../assets/6.webp';
import img7 from '../assets/3.webp';

const images = [img1, img2, img3, img5, img6, img7];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="mt-20 px-4 md:px-0 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-700">
        Our Beautiful Plant Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => setSelectedImage(img)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(img)}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={img}
              alt={`Plant image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl font-semibold tracking-wide transform scale-90 group-hover:scale-100 transition-transform duration-300">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-green-400 transition"
            aria-label="Close modal"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Description or Extra Content */}
      <div className="mt-12 max-w-3xl mx-auto text-center text-gray-700 space-y-4 px-2">
        <p className="text-lg">
          Explore our carefully curated collection of stunning plants that bring life and freshness to any space.
          Each image captures the beauty and diversity of our plant varieties.
        </p>
        <p>
          Click on any image to view it in full size. Our plants are nurtured with love and care to ensure they thrive in your home or garden.
        </p>
        <p className="italic text-green-700 font-semibold">
          “Bring nature closer and let your space bloom with greenery!”
        </p>
      </div>
    </section>
  );
};

export default Gallery;

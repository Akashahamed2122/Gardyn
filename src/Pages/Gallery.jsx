import React, { useState } from 'react';
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/4.webp';
import img5 from '../assets/5.webp';
import img6 from '../assets/6.webp';
import img7 from '../assets/3.webp';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className='mt-20'>
            <h1 className='text-xl text-center mb-6'>Gallery</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 row-span-2 w-8/12 mx-auto'>
                {/* Image Card */}
                <div
                    className='relative group cursor-pointer overflow-hidden rounded'
                    onClick={() => setSelectedImage(img1)}
                >
                    {/* Image with zoom on hover */}
                    <img
                        src={img1}
                        alt="Gallery"
                        className='w-full h-100 object-cover transform transition-transform duration-500 group-hover:scale-110'
                    />

                    {/* Overlay with View text */}
                    <div className='absolute inset-0  bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500'>
                        <span className='text-white text-xl font-semibold transform scale-90 group-hover:scale-110 transition-transform duration-300'>
                            View
                        </span>
                    </div>
                </div>

                {/* Placeholder blocks */}
                <div className='bg-gray-200 h-100 rounded'>
                     {/* Image Card */}
                <div
                    className='relative group cursor-pointer overflow-hidden rounded'
                    onClick={() => setSelectedImage(img2)}
                >
                    {/* Image with zoom on hover */}
                    <img
                        src={img2}
                        alt="Gallery"
                        className='w-full h-100 object-cover transform transition-transform duration-500 group-hover:scale-110'
                    />

                    {/* Overlay with View text */}
                    <div className='absolute inset-0  bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500'>
                        <span className='text-white text-xl font-semibold transform scale-90 group-hover:scale-110 transition-transform duration-300'>
                            View
                        </span>
                    </div>
                </div>
                </div>
                {/* cards */}
                <div className='bg-gray-200 h-100 rounded'>
                           {/* Image Card */}
                <div
                    className='relative group cursor-pointer overflow-hidden rounded'
                    onClick={() => setSelectedImage(img3)}
                >
                    {/* Image with zoom on hover */}
                    <img
                        src={img3}
                        alt="Gallery"
                        className='w-full h-100 object-cover transform transition-transform duration-500 group-hover:scale-110'
                    />

                    {/* Overlay with View text */}
                    <div className='absolute inset-0  bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500'>
                        <span className='text-white text-xl font-semibold transform scale-90 group-hover:scale-110 transition-transform duration-300'>
                            View
                        </span>
                    </div>
                </div>

                </div>
                {/* cards */}
                <div className='bg-gray-200 h-100 rounded'>
                           {/* Image Card */}
                <div
                    className='relative group cursor-pointer overflow-hidden rounded'
                    onClick={() => setSelectedImage(img5)}
                >
                    {/* Image with zoom on hover */}
                    <img
                        src={img5}
                        alt="Gallery"
                        className='w-full h-100 object-cover transform transition-transform duration-500 group-hover:scale-110'
                    />

                    {/* Overlay with View text */}
                    <div className='absolute inset-0  bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500'>
                        <span className='text-white text-xl font-semibold transform scale-90 group-hover:scale-110 transition-transform duration-300'>
                            View
                        </span>
                    </div>
                </div>

                </div>
                {/* cards */}
                <div className='bg-gray-200 h-100 rounded'>
                           {/* Image Card */}
                <div
                    className='relative group cursor-pointer overflow-hidden rounded'
                    onClick={() => setSelectedImage(img6)}
                >
                    {/* Image with zoom on hover */}
                    <img
                        src={img6}
                        alt="Gallery"
                        className='w-full h-100 object-cover transform transition-transform duration-500 group-hover:scale-110'
                    />

                    {/* Overlay with View text */}
                    <div className='absolute inset-0  bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500'>
                        <span className='text-white text-xl font-semibold transform scale-90 group-hover:scale-110 transition-transform duration-300'>
                            View
                        </span>
                    </div>
                </div>

                </div>
                {/* cards */}
                <div className='bg-gray-200 h-100 rounded'>
                           {/* Image Card */}
                <div
                    className='relative group cursor-pointer overflow-hidden rounded'
                    onClick={() => setSelectedImage(img7)}
                >
                    {/* Image with zoom on hover */}
                    <img
                        src={img7}
                        alt="Gallery"
                        className='w-full h-100 object-cover transform transition-transform duration-500 group-hover:scale-110'
                    />

                    {/* Overlay with View text */}
                    <div className='absolute inset-0  bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500'>
                        <span className='text-white text-xl font-semibold transform scale-90 group-hover:scale-110 transition-transform duration-300'>
                            View
                        </span>
                    </div>
                </div>

                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Full View"
                        className='max-w-3xl max-h-[80vh] rounded shadow-lg transition-all duration-300'
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;

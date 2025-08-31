import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const DisplayPlantsCard = ({ plant, index }) => {
  const { plantname, photo, _id } = plant;

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      scale: 0.95
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: index * 0.1
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  return (
    <motion.div
      className="w-full rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 cursor-pointer"
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden">
        <motion.img
          src={photo}
          alt={plantname}
          className="object-cover w-full h-full"
          variants={imageVariants}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full px-4 py-3">
          <h3 className="text-white text-xl font-bold tracking-tight drop-shadow-md">{plantname}</h3>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-green-700/20 backdrop-blur-sm flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg>
        </div>
      </div>

      {/* Button Section */}
      <div className="p-4 bg-gray-50">
        <Link to={`/viewDetails/${_id}`}>
          <motion.button 
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium w-full flex items-center justify-center gap-2"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default DisplayPlantsCard;
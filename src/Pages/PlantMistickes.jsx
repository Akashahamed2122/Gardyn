import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiX, FiArrowRight, FiInfo } from "react-icons/fi";
import img1 from "../assets/c-1.webp";
import img2 from "../assets/c-2.webp";
import img3 from "../assets/c-3.webp";
import img4 from "../assets/c-4.webp";

const services = [
  {
    title: "Overwatering",
    description: "Too much water suffocates roots and causes rot. Always check if the soil is dry before watering again.",
    image: img1,
    icon: "💧",
    tips: [
      "Check soil moisture with your finger before watering",
      "Ensure pots have proper drainage holes",
      "Water less frequently during winter months",
      "Use a moisture meter for accurate readings",
      "Different plants have different water needs"
    ],
    severity: "High",
    frequency: "Common"
  },
  {
    title: "Incorrect Lighting",
    description: "Placing plants in the wrong light (too much or too little) affects their growth. Match lighting to plant needs.",
    image: img2,
    icon: "💡",
    tips: [
      "Research your plant's specific light requirements",
      "South-facing windows provide the most light",
      "Use grow lights for plants that need more light",
      "Rotate plants regularly for even growth",
      "Watch for signs of light stress (bleaching or stretching)"
    ],
    severity: "Medium",
    frequency: "Very Common"
  },
  {
    title: "Wrong Pot Size",
    description: "A pot that's too small or too large can restrict root development. Use a pot that suits the plant's current size.",
    image: img3,
    icon: "🪴",
    tips: [
      "Repot when roots start growing through drainage holes",
      "Only move up 1-2 inches in pot diameter at a time",
      "Choose pots with adequate drainage",
      "Consider material: terracotta dries faster than plastic",
      "Report annually for fast-growing plants"
    ],
    severity: "Medium",
    frequency: "Common"
  },
  {
    title: "Poor Soil Quality",
    description: "Using the wrong type of soil can block nutrients. Choose soil that's appropriate for your specific plant species.",
    image: img4,
    icon: "🌱",
    tips: [
      "Use well-draining soil for most houseplants",
      "Add perlite or vermiculite to improve drainage",
      "Refresh soil annually to maintain nutrients",
      "Research specific soil needs for specialty plants",
      "Test pH levels for sensitive plants"
    ],
    severity: "High",
    frequency: "Common"
  },
];

const PlantMistakes = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.03,
      y: -8,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.98 }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.08 }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-24 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden"
    >
      {/* Premium decorative elements */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-r from-emerald-400/3 to-teal-300/3 -skew-y-3 -translate-y-40"></div>
      <div className="absolute -left-40 top-1/4 w-80 h-80 rounded-full bg-emerald-200/10 blur-3xl"></div>
      <div className="absolute -right-40 bottom-0 w-80 h-80 rounded-full bg-teal-300/10 blur-3xl"></div>
      
      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span 
            className="text-emerald-600 font-medium text-sm uppercase tracking-widest inline-block mb-4 px-4 py-1.5 bg-emerald-50 rounded-full"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Plant Care Guidance
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6 max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Avoid These Common <span className="text-emerald-600">Plant Care Mistakes</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Professional insights to help you identify and correct the most frequent plant care errors for healthier, thriving plants.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="relative group cursor-pointer h-full"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setActiveIndex(index)}
            >
              <motion.div 
                className="h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500"
                variants={cardVariants}
              >
                <div className="h-64 overflow-hidden relative">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-5 right-5 w-12 h-12 rounded-xl bg-white/95 flex items-center justify-center text-2xl shadow-lg backdrop-blur-sm">
                    {service.icon}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 bg-amber-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      Severity: {service.severity}
                    </span>
                    <span className="px-2.5 py-1 bg-emerald-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      Frequency: {service.frequency}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">{service.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-emerald-600 font-medium text-sm">
                      <span>View detailed guide</span>
                      <motion.div
                        animate={{ x: hoveredCard === index ? 5 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      >
                        <FiChevronRight className="ml-1" />
                      </motion.div>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <FiInfo size={14} />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIndex(null)}
            >
              <motion.div 
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 z-10 bg-white border-b border-gray-100 flex items-center justify-between p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{services[activeIndex].title}</h3>
                  <button 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                    onClick={() => setActiveIndex(null)}
                  >
                    <FiX size={20} />
                  </button>
                </div>
                
                <div className="relative h-72">
                  <img
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-6 flex gap-2">
                    <span className="px-3 py-1.5 bg-amber-500 text-white text-sm font-medium rounded-full">
                      Severity: {services[activeIndex].severity}
                    </span>
                    <span className="px-3 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded-full">
                      Frequency: {services[activeIndex].frequency}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start mb-8">
                    <span className="text-4xl mr-5 bg-emerald-100 p-3 rounded-xl">{services[activeIndex].icon}</span>
                    <p className="text-gray-700 text-lg leading-relaxed flex-1">{services[activeIndex].description}</p>
                  </div>
                  
                  <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 text-xl mb-6 flex items-center">
                      <FiInfo className="mr-2" /> Professional Recommendations
                    </h4>
                    <ul className="space-y-4">
                      {services[activeIndex].tips.map((tip, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start p-4 bg-white rounded-xl shadow-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="text-emerald-500 mr-3 mt-1">
                            <FiArrowRight />
                          </span>
                          <span className="text-gray-700">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <motion.button 
            className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl relative overflow-hidden group flex items-center mx-auto"
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center">
              Download Complete Care Guide
              <FiArrowRight className="ml-2" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.button>
          
          <p className="text-gray-500 text-sm mt-6">
            Join 10,000+ plant enthusiasts who've improved their plant care skills
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlantMistakes;
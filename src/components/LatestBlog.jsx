import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import blogImage from '../assets/1.webp';
import blog2 from '../assets/2.webp';

const LatestBlog = () => {
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
      { threshold: 0.2 }
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

  const blogPosts = [
    {
      id: 1,
      image: blogImage,
      date: "20 Jun",
      title: "Creative Garden Layouts for Every Space",
      excerpt: "This month has been bustling with exciting developments in the world of plants. From groundbreaking new devices to innovative gardening techniques...",
      comments: 10,
      category: "Garden Design",
      readTime: "5 min read"
    },
    {
      id: 2,
      image: blog2,
      date: "15 Jun",
      title: "Top Trends in Modern Garden Landscaping",
      excerpt: "Discover the latest trends shaping contemporary garden design. From sustainable practices to innovative plant arrangements that maximize any space...",
      comments: 8,
      category: "Landscaping",
      readTime: "7 min read"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <section ref={sectionRef} className="w-full py-24 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-emerald-400/5 to-teal-300/5 -skew-y-3 -translate-y-32"></div>
      <div className="absolute -left-32 top-1/3 w-64 h-64 rounded-full bg-emerald-200/10 blur-3xl"></div>
      
      <div className="container mx-auto px-5 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="text-emerald-600 font-medium text-sm uppercase tracking-widest inline-block mb-4 px-4 py-1.5 bg-emerald-50 rounded-full"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From Our Blog
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Latest <span className="text-emerald-600">Plant Insights</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Discover expert tips, trends, and inspiration for your gardening journey
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(post.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-72 object-cover"
                  variants={imageVariants}
                />
                <div className="absolute top-5 left-5">
                  <div className="bg-emerald-600 text-white font-semibold text-sm px-4 py-2 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="absolute top-5 right-5">
                  <div className="bg-white text-emerald-700 font-bold text-center p-4 rounded-xl shadow-md">
                    <div className="text-2xl leading-tight">{post.date.split(' ')[0]}</div>
                    <div className="text-sm uppercase tracking-wide">{post.date.split(' ')[1]}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-6">
                    <FaCalendarAlt className="mr-2 text-emerald-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCommentAlt className="mr-2 text-emerald-600" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  
                  <motion.div 
                    className="flex items-center text-emerald-600 font-medium"
                    animate={{ x: hoveredCard === post.id ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <span>Read More</span>
                    <FaArrowRight className="ml-2" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl relative overflow-hidden group"
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center">
              View All Articles
              <FaArrowRight className="ml-2" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlog;
import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import debbieImage from '../images/debbie.jpg';

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [{
    url: debbieImage,
    title: 'Fashion Editorial',
    category: 'Modeling'
  }, {
    url: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?q=80&w=1000&auto=format&fit=crop',
    title: 'Commercial Campaign',
    category: 'Advertising'
  }, {
    url: 'https://images.unsplash.com/photo-1618375531912-867984bdfd87?q=80&w=1000&auto=format&fit=crop',
    title: 'Beauty Product Launch',
    category: 'Beauty'
  }, {
    url: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1000&auto=format&fit=crop',
    title: 'Wellness Feature',
    category: 'Health'
  }, {
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    title: 'Magazine Cover',
    category: 'Editorial'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + images.length) % images.length);
  };
  return <div className="min-h-screen w-full">
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1
    }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
          Gallery
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative h-[500px] mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          {images.map((image, index) => {
          const position = (index - activeIndex) % images.length;
          const zIndex = position === 0 ? 10 : 5 - Math.abs(position);
          const opacity = position === 0 ? 1 : 0.7 - Math.abs(position) * 0.2;
          const scale = position === 0 ? 1 : 0.8 - Math.abs(position) * 0.1;
          const translateX = position * 60;
          return <motion.div key={index} className="absolute w-3/4 max-w-2xl rounded-xl overflow-hidden shadow-2xl" animate={{
            x: translateX + '%',
            zIndex,
            opacity,
            scale
          }} transition={{
            duration: 0.5,
            ease: 'easeOut'
          }} whileHover={position === 0 ? {
            scale: 1.05
          } : {}}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img src={image.url} alt={image.title} className="w-full h-[500px] object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <div className="inline-block bg-pink-600/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                      {image.category}
                    </div>
                  </div>
                </div>
              </motion.div>;
        })}
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
          <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-purple-900/60 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-purple-900/60 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => <motion.div key={index} variants={itemVariants} className="relative rounded-lg overflow-hidden cursor-pointer group" whileHover={{
        scale: 1.05,
        zIndex: 10
      }} transition={{
        duration: 0.3
      }}>
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src={image.url} alt={image.title} className="w-full h-48 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-lg font-bold text-white">{image.title}</h4>
            </div>
          </motion.div>)}
      </motion.div>
    </div>;
};
export default GallerySection;
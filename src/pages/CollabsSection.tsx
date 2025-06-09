import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
const CollabsSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const brands = [{
    name: 'Glow Cosmetics',
    logo: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1000&auto=format&fit=crop',
    description: 'Premium makeup line collaboration featuring custom lipstick shades and foundation formulations.'
  }, {
    name: 'Pharma Plus',
    logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop',
    description: 'Health supplement campaign highlighting natural ingredients and scientific formulations.'
  }, {
    name: 'Luxury Skincare',
    logo: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop',
    description: 'Featured model for premium anti-aging serum with clinical trial backing.'
  }, {
    name: 'Fitness First',
    logo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
    description: 'Wellness ambassador promoting holistic health routines and supplement regimens.'
  }, {
    name: 'Natural Essence',
    logo: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop',
    description: 'Organic beauty line featuring botanical extracts and sustainable packaging.'
  }, {
    name: 'Tech Beauty',
    logo: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1000&auto=format&fit=crop',
    description: 'Smart skincare devices with app integration for personalized beauty routines.'
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
  const handleCardClick = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
      // Play whoosh sound
      const audio = new Audio('data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAAABMYXZjNTguMTMuMTAwAGRhdGEOAAAAAQAAAAEA');
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
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
          Collaborations
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand, index) => <motion.div key={index} variants={itemVariants} className="relative h-64 perspective" onClick={() => handleCardClick(index)}>
            <motion.div className="absolute inset-0 w-full h-full transition-all duration-500 preserve-3d cursor-pointer" animate={{
          rotateY: flippedCard === index ? 180 : 0
        }} transition={{
          duration: 0.6
        }}>
              {/* Front of card */}
              <div className="absolute inset-0 backface-hidden border border-purple-500/30 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-lg shadow-lg shadow-purple-500/20">
                <div className="absolute inset-0 bg-purple-500/10 bg-grid-pattern opacity-30"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-24 h-24 mb-4 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                    <img src={brand.logo} alt={brand.name} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {brand.name}
                  </h3>
                  <div className="text-teal-300 text-sm">
                    Click to reveal details
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
              {/* Back of card */}
              <div className="absolute inset-0 backface-hidden border border-teal-500/30 rounded-xl overflow-hidden bg-gradient-to-br from-teal-900/40 to-black/40 backdrop-blur-lg shadow-lg shadow-teal-500/20 rotateY-180">
                <div className="absolute inset-0 bg-teal-500/10 bg-grid-pattern opacity-30"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {brand.name}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {brand.description}
                  </p>
                  <div className="mt-4 text-pink-300 text-sm">
                    Click to flip back
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
              </div>
            </motion.div>
          </motion.div>)}
      </motion.div>
    </div>;
};
export default CollabsSection;
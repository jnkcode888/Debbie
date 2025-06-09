import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { PillIcon, HeartPulseIcon, FlowerIcon, SparklesIcon, DropletIcon, BrainIcon } from 'lucide-react';
const BeautyWellnessSection = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const items = [{
    id: 'skincare',
    icon: <DropletIcon className="w-10 h-10 text-teal-400" />,
    title: 'Advanced Skincare',
    description: 'Science-backed formulations with clinically proven ingredients for optimal skin health and rejuvenation.',
    color: 'from-teal-500/50 to-blue-500/50'
  }, {
    id: 'supplements',
    icon: <PillIcon className="w-10 h-10 text-purple-400" />,
    title: 'Nutraceuticals',
    description: 'Pharmaceutical-grade supplements that enhance beauty from within, targeting specific health and aesthetic concerns.',
    color: 'from-purple-500/50 to-pink-500/50'
  }, {
    id: 'herbal',
    icon: <FlowerIcon className="w-10 h-10 text-green-400" />,
    title: 'Herbal Remedies',
    description: 'Traditional botanical solutions modernized with scientific extraction methods for optimal efficacy and safety.',
    color: 'from-green-500/50 to-teal-500/50'
  }, {
    id: 'beauty',
    icon: <SparklesIcon className="w-10 h-10 text-pink-400" />,
    title: 'Beauty Tech',
    description: 'Cutting-edge beauty devices and applications that leverage technology for personalized beauty solutions.',
    color: 'from-pink-500/50 to-purple-500/50'
  }, {
    id: 'wellness',
    icon: <HeartPulseIcon className="w-10 h-10 text-red-400" />,
    title: 'Holistic Wellness',
    description: 'Integrated approaches that address beauty through overall health, including fitness, nutrition, and stress management.',
    color: 'from-red-500/50 to-orange-500/50'
  }, {
    id: 'cognitive',
    icon: <BrainIcon className="w-10 h-10 text-blue-400" />,
    title: 'Cognitive Beauty',
    description: 'Innovative products targeting the mind-beauty connection, enhancing appearance through mental wellbeing.',
    color: 'from-blue-500/50 to-indigo-500/50'
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
  const handleItemClick = (id: string) => {
    setActiveItem(id === activeItem ? null : id);
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
          Beauty & Wellness
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => <motion.div key={item.id} variants={itemVariants} className={`relative border border-${item.id === activeItem ? 'white/40' : 'purple-500/30'} rounded-xl overflow-hidden backdrop-blur-lg shadow-lg transition-all duration-300 cursor-pointer`} style={{
        background: item.id === activeItem ? `linear-gradient(135deg, ${item.color.split(' ')[0].replace('/50', '/70')} ${item.color.split(' ')[1].replace('/50', '/70')})` : 'rgba(0, 0, 0, 0.2)'
      }} onClick={() => handleItemClick(item.id)} whileHover={{
        scale: 1.02
      }}>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <motion.div initial={{
            height: 0,
            opacity: 0
          }} animate={{
            height: item.id === activeItem ? 'auto' : 0,
            opacity: item.id === activeItem ? 1 : 0
          }} transition={{
            duration: 0.3
          }} className="overflow-hidden">
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="mt-4 flex items-center text-sm text-white/70">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </motion.div>
              {item.id !== activeItem && <div className="mt-2 text-sm text-white/70">Tap to expand</div>}
            </div>
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>
          </motion.div>)}
      </motion.div>
    </div>;
};
export default BeautyWellnessSection;
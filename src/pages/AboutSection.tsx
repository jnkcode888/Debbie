import React, { useEffect, useRef, Children } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
const AboutSection = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!avatarRef.current) return;
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    renderer.setSize(300, 300);
    avatarRef.current.appendChild(renderer.domElement);
    // Create silhouette
    const geometry = new THREE.CylinderGeometry(1, 1, 2.5, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const silhouette = new THREE.Mesh(geometry, material);
    scene.add(silhouette);
    // Add sphere for head
    const headGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const headMaterial = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.55;
    scene.add(head);
    camera.position.z = 5;
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      silhouette.rotation.y += 0.01;
      head.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    // Cleanup
    return () => {
      if (avatarRef.current) {
        avatarRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
  return <div className="min-h-screen w-full">
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1
    }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
          About Debbie
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div className="flex justify-center" initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8
      }}>
          <div className="relative w-64 h-64">
            <div ref={avatarRef} className="w-full h-full"></div>
            <motion.div className="absolute -top-4 -right-4 bg-purple-900/50 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.5,
            duration: 0.6
          }}>
              Model
            </motion.div>
            <motion.div className="absolute -bottom-4 -left-4 bg-teal-900/50 backdrop-blur-sm border border-teal-500/30 px-4 py-2 rounded-full" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.7,
            duration: 0.6
          }}>
              Pharmacy Graduate
            </motion.div>
            <motion.div className="absolute top-1/2 -translate-y-1/2 -right-16 bg-pink-900/50 backdrop-blur-sm border border-pink-500/30 px-4 py-2 rounded-full" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.9,
            duration: 0.6
          }}>
              Beauty Influencer
            </motion.div>
          </div>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="backdrop-blur-md bg-black/20 border border-purple-500/30 rounded-xl p-6 shadow-lg shadow-purple-500/20">
          <motion.p variants={itemVariants} className="mb-4 text-lg text-gray-200">
            Dr. Debbie Mutheu is a multifaceted professional who seamlessly
            blends her pharmaceutical expertise with her successful modeling
            career.
          </motion.p>
          <motion.p variants={itemVariants} className="mb-4 text-lg text-gray-200">
            As a Kenyan pharmacy graduate, she brings scientific precision and
            health knowledge to her work in the beauty and wellness industry.
          </motion.p>
          <motion.p variants={itemVariants} className="mb-4 text-lg text-gray-200">
            Her unique background allows her to approach beauty from both
            aesthetic and health perspectives, making her a trusted voice for
            brands and followers alike.
          </motion.p>
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">5+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">20+</div>
              <div className="text-sm text-gray-300">Brand Collabs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">50K+</div>
              <div className="text-sm text-gray-300">Followers</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>;
};
export default AboutSection;
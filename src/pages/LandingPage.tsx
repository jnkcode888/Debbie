import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
const LandingPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Create a torus knot
    const geometry = new THREE.TorusKnotGeometry(3, 0.4, 128, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    camera.position.z = 10;
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.003;
      torusKnot.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const textVariants = {
    hidden: {
      opacity: 0
    },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8
      }
    })
  };
  return <div className="relative w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10 text-center">
        <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.2
      }}>
          Dr. Debbie 🤍
        </motion.h1>
        <div className="overflow-hidden">
          <motion.div initial={{
          y: '100%'
        }} animate={{
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.8,
          ease: 'easeOut'
        }} className="text-xl md:text-2xl font-light tracking-wider">
            <span className="bg-gradient-to-r from-teal-300 to-pink-400 bg-clip-text text-transparent">
              Model • Pharmacy Graduate • Digital Creator
            </span>
          </motion.div>
        </div>
        <motion.div className="mt-12 relative" initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 1.5,
        duration: 0.6
      }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <button className="relative px-8 py-3 bg-black rounded-lg leading-none flex items-center">
            <span className="text-gray-100 group-hover:text-gray-100 transition duration-200">
              Explore Portfolio
            </span>
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div className="animate-bounce" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 2,
        duration: 1
      }}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </div>;
};
export default LandingPage;
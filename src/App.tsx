import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import AboutSection from './pages/AboutSection';
import GallerySection from './pages/GallerySection';
import CollabsSection from './pages/CollabsSection';
import BeautyWellnessSection from './pages/BeautyWellnessSection';
import ContactSection from './pages/ContactSection';
import { ParticleBackground } from './components/ParticleBackground';
export function App() {
  return <BrowserRouter>
      <div className="relative w-full min-h-screen bg-[#0a0118] text-white overflow-hidden">
        <ParticleBackground />
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/gallery" element={<GallerySection />} />
            <Route path="/collabs" element={<CollabsSection />} />
            <Route path="/beauty-wellness" element={<BeautyWellnessSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>;
}
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setActiveTab(location.pathname);
    setIsMobileMenuOpen(false); // Close mobile menu on route change
  }, [location]);
  const navItems = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/gallery',
    label: 'Gallery'
  }, {
    path: '/collabs',
    label: 'Collabs'
  }, {
    path: '/beauty-wellness',
    label: 'Beauty & Wellness'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  return <div className="relative w-full min-h-screen">
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="backdrop-blur-md bg-black/10 border border-purple-500/30 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg shadow-purple-500/20">
          {navItems.map(item => <NavLink key={item.path} to={item.path} className="relative px-4 py-2 rounded-full text-sm">
              {activeTab === item.path && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-500/50 rounded-full border border-teal-300/50 shadow-md shadow-teal-300/30" initial={false} animate={{
            opacity: 1
          }} transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.6
          }} />}
              <span className="relative z-10 font-medium">{item.label}</span>
            </NavLink>)}
        </div>
      </nav>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-purple-500/30 flex items-center justify-center shadow-lg shadow-purple-500/20" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMobileMenuOpen}>
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? <motion.div key="close" initial={{
          opacity: 0,
          rotate: -90
        }} animate={{
          opacity: 1,
          rotate: 0
        }} exit={{
          opacity: 0,
          rotate: 90
        }} transition={{
          duration: 0.2
        }}>
              <XIcon className="w-6 h-6 text-white" />
            </motion.div> : <motion.div key="menu" initial={{
          opacity: 0,
          rotate: 90
        }} animate={{
          opacity: 1,
          rotate: 0
        }} exit={{
          opacity: 0,
          rotate: -90
        }} transition={{
          duration: 0.2
        }}>
              <MenuIcon className="w-6 h-6 text-white" />
            </motion.div>}
        </AnimatePresence>
      </button>
      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.2
        }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div initial={{
          x: '100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '100%'
        }} transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.4
        }} className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black/90 backdrop-blur-md z-40 md:hidden border-l border-purple-500/30">
              <div className="flex flex-col gap-2 p-6 mt-24">
                {navItems.map(item => <NavLink key={item.path} to={item.path} className={({
              isActive
            }) => `relative px-6 py-4 rounded-lg text-base transition-colors ${isActive ? 'bg-gradient-to-r from-purple-600/50 to-pink-500/50 border border-teal-300/50' : 'hover:bg-white/5'}`} onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="relative z-10 font-medium">
                      {item.label}
                    </span>
                  </NavLink>)}
              </div>
              {/* Mobile menu decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/20 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-500/20 to-transparent" />
            </motion.div>
          </>}
      </AnimatePresence>
      <main className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
        {children}
      </main>
    </div>;
};
export default Layout;
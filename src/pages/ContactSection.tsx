import React, { useEffect, useState, Children } from 'react';
import { motion } from 'framer-motion';
const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };
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
  return <div className="min-h-screen w-full">
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1
    }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
          Contact
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="backdrop-blur-md bg-black/20 border border-purple-500/30 rounded-xl p-6 shadow-lg shadow-purple-500/20">
          <motion.div variants={itemVariants} className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-gray-300">
              Interested in collaborations, bookings, or consultations? Send a
              message!
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span className="text-white">contact@drdebbie.com</span>
            </div>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-pink-900/50 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <span className="text-white">+254 123 456 789</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-teal-900/50 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <span className="text-white">Nairobi, Kenya</span>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-yellow-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778C2.036 8.746 2 12 2 12s.036 3.254.403 4.816a2.5 2.5 0 001.767 1.763c1.566.43 7.83.421 7.83.421s6.265.007 7.831-.404a2.5 2.5 0 001.767-1.763C22.036 15.254 22 12 22 12s.036-3.254-.407-4.797zM10 15V9l5.177 3L10 15z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="backdrop-blur-md bg-black/30 border border-teal-500/30 rounded-xl p-6 shadow-lg shadow-teal-500/20 font-mono">
          <div className="mb-4 flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <div className="text-gray-400 text-xs ml-2">terminal ~ message</div>
          </div>
          {!submitted ? <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="flex text-teal-300 mb-1">
                  <span className="mr-2">$</span>
                  <span>name</span>
                  <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                    _
                  </span>
                </div>
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full bg-black/40 border border-teal-500/30 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <div className="flex text-pink-300 mb-1">
                  <span className="mr-2">$</span>
                  <span>email</span>
                  <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                    _
                  </span>
                </div>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-black/40 border border-pink-500/30 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50" placeholder="Your Email" required />
              </div>
              <div className="mb-6">
                <div className="flex text-purple-300 mb-1">
                  <span className="mr-2">$</span>
                  <span>message</span>
                  <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                    _
                  </span>
                </div>
                <textarea value={message} onChange={e => setMessage(e.target.value)} className="w-full bg-black/40 border border-purple-500/30 rounded px-4 py-2 text-white h-32 focus:outline-none focus:ring-2 focus:ring-purple-500/50" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:from-purple-700 hover:to-pink-700 transition-colors">
                Send Message
              </button>
            </form> : <div className="flex flex-col items-center justify-center py-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-lg text-white mb-2">Message Sent!</p>
              <p className="text-gray-400 text-center">
                Thank you for your message. Dr. Debbie will get back to you
                soon.
              </p>
            </div>}
        </motion.div>
      </div>
    </div>;
};
export default ContactSection;
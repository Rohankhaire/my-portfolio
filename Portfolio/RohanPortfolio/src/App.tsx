import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import BootScreen from './components/BootScreen';
import Scanline from './components/Scanline';
import CyberBackground from './components/CyberBackground';
import PageTransition from './components/PageTransition';

const App: React.FC = () => {
  const [isSystemReady, setIsSystemReady] = useState(false);
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-cyber-black text-gray-300 font-mono selection:bg-cyber-cyan selection:text-black overflow-hidden relative">
      <Scanline />
      <CyberBackground />

      {!isSystemReady && <BootScreen onComplete={() => setIsSystemReady(true)} />}

      <div className={`transition-opacity duration-1000 ${isSystemReady ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Navbar />

        {/* Background Grid Animation */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 transform perspective-[500px] rotate-x-[20deg] scale-150 animate-pulse" />

        <main className="flex-grow pt-32 pb-12 relative z-10">
          <div className="container-custom">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
                <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
                <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;

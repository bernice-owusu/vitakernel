/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ProcessSection } from './components/ProcessSection';
import { SpotlightCardsSection } from './components/SpotlightCardsSection';
import { ContactSection } from './components/ContactSection';
import { BrandRibbon } from './components/BrandRibbon';
import { Footer } from './components/Footer';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { ArrowUp } from 'lucide-react';

function HomeContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <main className="flex-1 w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ProcessSection />
        <SpotlightCardsSection />
        <ContactSection />
        <BrandRibbon />
      </main>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#174D35] hover:bg-[#123d2a] active:scale-95 text-white flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-[#292D2A] font-sans-dm flex flex-col relative selection:bg-[#174D35] selection:text-white overflow-x-hidden w-full max-w-full">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

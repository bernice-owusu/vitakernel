import React from 'react';
import { useCart } from '../context/CartContext';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { scrollToSection, requestInquiry } = useCart();

  return (
    <section id="home" className="relative w-full bg-[#FAF8F5] overflow-hidden border-b border-[#eae6df]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-10">
            <h1 className="font-serif-baskerville text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#174D35] leading-[1.15] tracking-tight">
              Turning Mango By-products into Valuable Resources
            </h1>

            <p className="font-sans-dm text-sm sm:text-base md:text-lg text-[#3D4440] mt-4 sm:mt-6 leading-relaxed max-w-xl font-normal">
              At Vitakernel, we transform mango-derived raw materials into valuable products through sustainable processing. From extracting oil from mango seeds to producing biomass briquettes, we are creating new opportunities from agricultural resources.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('products')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 bg-[#174D35] hover:bg-[#123d2a] text-white font-medium text-sm sm:text-base rounded-full shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer active:scale-98"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => requestInquiry('Partnership Inquiry')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 bg-white hover:bg-gray-50 text-[#174D35] border border-[#174D35] font-medium text-sm sm:text-base rounded-full shadow-2xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer active:scale-98"
              >
                <span>Partner With Us</span>
              </button>
            </div>
          </div>

          {/* Right Column: Mango Gold Curved Wave Composite Visual */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] sm:max-w-[640px] aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              {/* Gold curved background accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E5A928]/30 via-transparent to-transparent z-10 pointer-events-none" />

              <img
                src="/images/hero-composite.jpg"
                alt="VitaKernel Mango Seed Oil & Biomass Briquettes"
                className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
              />

              {/* Floating product badges */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-gray-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5A928]" />
                <span className="text-xs font-bold text-[#174D35]">Cold Pressed Oil &amp; Eco Briquettes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

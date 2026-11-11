import React from 'react';
import { useCart } from '../context/CartContext';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { scrollToSection } = useCart();

  return (
    <section id="about" className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-[#eae6df] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Facility Photo Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-[#eae6df] group">
              <img
                src="/images/factory-building.jpg"
                alt="VitaKernel Agro-Processing Facility"
                className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-gray-100 flex items-center justify-between text-xs text-gray-700">
                <span className="font-bold text-[#174D35]">VitaKernel Processing Facility</span>
                <span className="text-[11px] text-[#689857] font-semibold">Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* About Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-bold tracking-wider uppercase text-[#174D35] bg-[#FAF8F5] px-3.5 py-1 rounded-full border border-[#174D35]/15 mb-3">
              Company Overview
            </span>

            <h2 className="font-serif-baskerville text-2xl sm:text-3xl lg:text-4xl font-bold text-[#174D35] tracking-tight">
              About Vitakernel
            </h2>

            <p className="font-sans-dm text-sm sm:text-base text-[#3D4440] mt-4 leading-relaxed font-normal">
              Vitakernel is an agro-processing company focused on extracting value from mango-derived materials through the production of mango seed oil and biomass briquettes.
            </p>

            <p className="font-sans-dm text-sm sm:text-base text-[#3D4440] mt-3 leading-relaxed font-normal">
              Our mission is to transform agricultural by-products into valuable products while promoting sustainability and resource efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full my-6">
              <div className="p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#eae6df]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#174D35] mb-1">
                  <Award className="w-4 h-4 text-[#E5A928]" />
                  <span>Circular Agribusiness</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Transforming local fruit byproducts into high-value industrial solutions.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#eae6df]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#174D35] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#689857]" />
                  <span>Sustainable Standards</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Solvent free extraction and clean burning deforestation-free solid biofuel.
                </p>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('products')}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#174D35] hover:bg-[#123d2a] text-white text-sm font-medium rounded-full shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

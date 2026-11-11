import React from 'react';
import { ArrowRight, Cog, Droplets, Package, Leaf } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-[#eae6df] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="font-serif-baskerville text-2xl sm:text-3xl lg:text-4xl font-bold text-[#174D35] tracking-tight">
            Our Process
          </h2>
          <p className="font-sans-dm text-sm sm:text-base text-[#3D4440] mt-2 font-medium">
            From Mango By-products to Valuable Products
          </p>
        </div>

        {/* 4-Step Diagram with Circular Icon Badges & Arrows */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#eae6df] mb-8 sm:mb-10 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 relative">
            {/* Step 1: Raw Material Collection */}
            <div className="flex flex-col items-center text-center relative group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E5A928]/15 border-2 border-[#E5A928] text-[#E5A928] flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                <Leaf className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <span className="font-serif-baskerville font-bold text-sm sm:text-base text-[#174D35]">
                Raw Material Collection
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 mt-1 max-w-[180px]">
                Collecting discarded mango seeds from agro-processing partners.
              </span>
            </div>

            {/* Step 2: Processing & Extraction */}
            <div className="flex flex-col items-center text-center relative group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#174D35]/15 border-2 border-[#174D35] text-[#174D35] flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                <Cog className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <span className="font-serif-baskerville font-bold text-sm sm:text-base text-[#174D35]">
                Processing &amp; Extraction
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 mt-1 max-w-[180px]">
                Decortication, expeller cold pressing &amp; briquette compression.
              </span>
            </div>

            {/* Step 3: Quality Control */}
            <div className="flex flex-col items-center text-center relative group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E5A928]/15 border-2 border-[#E5A928] text-[#E5A928] flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                <Droplets className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <span className="font-serif-baskerville font-bold text-sm sm:text-base text-[#174D35]">
                Quality Control
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 mt-1 max-w-[180px]">
                Strict laboratory testing for purity, moisture &amp; burn metrics.
              </span>
            </div>

            {/* Step 4: Packaging & Distribution */}
            <div className="flex flex-col items-center text-center relative group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#689857]/15 border-2 border-[#689857] text-[#689857] flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                <Package className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <span className="font-serif-baskerville font-bold text-sm sm:text-base text-[#174D35]">
                Packaging &amp; Distribution
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 mt-1 max-w-[180px]">
                Safe, eco-compliant delivery to commercial &amp; domestic clients.
              </span>
            </div>
          </div>
        </div>

        {/* Industrial Plant Wide Photo */}
        <div className="w-full h-[200px] sm:h-[260px] md:h-[360px] lg:h-[440px] rounded-3xl overflow-hidden shadow-md border border-[#eae6df] relative group">
          <img
            src="/images/processing-plant.jpg"
            alt="VitaKernel Industrial Oil Extraction Plant"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#E5A928] block mb-1">
                State-of-the-Art Agronomy Facility
              </span>
              <h3 className="font-serif-baskerville text-lg sm:text-2xl font-bold">
                Solvent-Free Cold Pressing &amp; High-Pressure Briquetting
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

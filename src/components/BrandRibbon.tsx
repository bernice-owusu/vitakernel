import React from 'react';

export const BrandRibbon: React.FC = () => {
  return (
    <section className="w-full bg-[#174D35] text-white overflow-hidden relative py-6 sm:py-8 border-t border-b border-[#123d2a]">
      {/* Decorative background curve */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#E5A928]/20 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-4 text-center md:text-left">
          <span className="w-3 h-3 rounded-full bg-[#E5A928] shrink-0 hidden sm:block animate-pulse" />
          <h3 className="font-serif-baskerville text-lg sm:text-2xl md:text-3xl italic font-bold tracking-tight text-balance text-[#FAF8F5]">
            “Turning mango by-products into valuable resources.”
          </h3>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs uppercase font-bold tracking-widest text-[#E5A928] bg-black/20 px-4 py-1.5 rounded-full border border-[#E5A928]/30">
            VitaKernel Ghana
          </span>
        </div>
      </div>
    </section>
  );
};

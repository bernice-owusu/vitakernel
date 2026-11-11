import React from 'react';
import { PRODUCTS_DATA } from '../data/siteData';
import { useCart } from '../context/CartContext';
import { ArrowRight, Check } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const { requestInquiry, scrollToSection } = useCart();

  return (
    <section id="products" className="w-full bg-white py-12 sm:py-16 lg:py-24 border-b border-[#eae6df] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#174D35] bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[#174D35]/15 inline-block mb-4">
            Our Offerings
          </span>
          <h2 className="font-serif-baskerville text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174D35] tracking-tight leading-[1.1]">
            Two Products. One Sustainable Vision.
          </h2>
          <p className="font-sans-dm text-sm sm:text-base md:text-lg text-[#3D4440] mt-5 leading-relaxed font-normal max-w-xl mx-auto">
            Vitakernel upcycles mango-derived by-products into high-value, plant-based materials for
            cosmetics, personal care and clean energy — turning agricultural waste into opportunity.
          </p>
        </div>

        {/* Product Showcase Cards */}
        <div className="space-y-12 sm:space-y-20 lg:space-y-24">
          {PRODUCTS_DATA.map((product, index) => (
            <div
              key={product.id}
              id={product.id}
              className="bg-[#FAF8F5] rounded-[2.5rem] border border-[#eae6df] overflow-hidden group scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Media Side */}
                <div className="relative bg-white h-[240px] sm:h-[320px] md:h-[420px] lg:h-[480px] flex items-center justify-center p-6 sm:p-10 lg:p-16">
                  <div className="relative w-full max-w-[460px] h-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-xl border border-gray-100 z-20">
                    <div className="w-2 h-2 rounded-full bg-[#E5A928] animate-pulse" />
                    <span className="text-xs font-bold text-[#174D35] tracking-wider uppercase">
                      Available Now
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 text-left">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#E5A928] mb-3 block">
                    Plant-Derived Botanical
                  </span>
                  <h3 className="font-serif-baskerville text-2xl sm:text-3xl lg:text-4xl font-bold text-[#174D35] tracking-tight mb-2 leading-[1.15]">
                    {product.title}
                  </h3>
                  <h4 className="font-sans-dm text-base sm:text-lg font-semibold text-[#3D4440] mb-5 font-normal">
                    {product.subtitle}
                  </h4>

                  <p className="font-sans-dm text-sm sm:text-base text-gray-600 mb-7 leading-relaxed font-normal max-w-lg">
                    {product.fullDescription}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E5A928]/15 text-[#E5A928] flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="font-sans-dm text-sm text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => requestInquiry(`${product.title} Inquiry`)}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#174D35] hover:bg-[#123d2a] text-white font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-[#174D35]/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-[#174D35]/40 cursor-pointer active:scale-95"
                  >
                    <span>{product.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Band */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="bg-[#174D35] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#E5A928]" />
            <h3 className="font-serif-baskerville text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              Ready to place an order?
            </h3>
            <p className="font-sans-dm text-sm sm:text-base text-[#FAF8F5]/90 mb-8 max-w-xl mx-auto leading-relaxed">
              Connect with our executive team in Accra for product specifications, pricing and partnership options.
            </p>
            <button
              onClick={() => requestInquiry('Product Order')}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#E5A928] hover:bg-[#d89c20] text-[#292D2A] font-bold text-sm sm:text-base rounded-full shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export const SpotlightCardsSection: React.FC = () => {
  const { scrollToSection } = useCart();
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 lg:py-20 border-b border-[#eae6df]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Sustainability */}
          <div
            id="sustainability"
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#eae6df] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group scroll-mt-24"
          >
            <div>
              <div className="w-full h-40 sm:h-44 md:h-48 rounded-2xl overflow-hidden mb-5 bg-[#FAF8F5]">
                <img
                  src="/images/sustainability-seedling.jpg"
                  alt="VitaKernel Sustainability"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#689857] block mb-1">
                Resource Efficiency
              </span>
              <h3 className="font-serif-baskerville text-xl font-bold text-[#174D35]">
                Sustainability
              </h3>
              <h4 className="font-sans-dm text-sm font-semibold text-gray-800 mt-0.5">
                A Better Use for Every Resource
              </h4>
              <p className="font-sans-dm text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                We are committed to sustainable practices, from resource-efficient production to responsible waste utilisation.
              </p>
            </div>

            <button
              onClick={() => scrollToSection('process')}
              className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 bg-[#174D35] hover:bg-[#123d2a] text-white text-xs font-semibold rounded-full transition-all cursor-pointer w-fit"
            >
              <span>Our Sustainability Approach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: News & Insights */}
          <div
            id="news"
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#eae6df] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group scroll-mt-24"
          >
            <div>
              <div className="w-full h-40 sm:h-44 md:h-48 rounded-2xl overflow-hidden mb-5 bg-[#FAF8F5]">
                <img
                  src="/images/mango-orchard.jpg"
                  alt="VitaKernel News and Updates"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#E5A928] block mb-1">
                Latest Updates
              </span>
              <h3 className="font-serif-baskerville text-xl font-bold text-[#174D35]">
                News &amp; Insights
              </h3>
              <h4 className="font-sans-dm text-sm font-semibold text-gray-800 mt-0.5">
                Stay Informed
              </h4>
              <p className="font-sans-dm text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                Get the latest updates on our products, partnerships and sustainable innovations.
              </p>
            </div>

            <button
              onClick={() => navigate('/news')}
              className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 bg-[#174D35] hover:bg-[#123d2a] text-white text-xs font-semibold rounded-full transition-all cursor-pointer w-fit"
            >
              <span>Read All News</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Contact Us / Let's Build Partnerships */}
          <div
            id="contact-spotlight"
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#eae6df] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
          >
            <div>
              <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 bg-[#FAF8F5]">
                <img
                  src="/images/factory-building.jpg"
                  alt="VitaKernel Headquarters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating contact icon badges matching mockup */}
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
                  <div className="w-7 h-7 rounded-full bg-[#174D35] text-white flex items-center justify-center shadow-sm">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#174D35] text-white flex items-center justify-center shadow-sm">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#174D35] text-white flex items-center justify-center shadow-sm">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#174D35] block mb-1">
                Direct Dialogue
              </span>
              <h3 className="font-serif-baskerville text-xl font-bold text-[#174D35]">
                Contact Us
              </h3>
              <h4 className="font-sans-dm text-sm font-semibold text-gray-800 mt-0.5">
                Let's Build Partnerships
              </h4>
              <p className="font-sans-dm text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                Whether you're interested in our products or exploring partnership opportunities, we'd love to hear from you.
              </p>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 bg-[#174D35] hover:bg-[#123d2a] text-white text-xs font-semibold rounded-full transition-all cursor-pointer w-fit"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { COMPANY_INFO, NAV_ITEMS } from '../data/siteData';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {

  return (
    <footer className="w-full bg-[#174D35] text-white pt-12 sm:pt-16 pb-10 border-t border-[#123d2a]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer text-left mb-6 group"
              aria-label="VitaKernel Home"
            >
              <img
                src="/vitakernel-logo-transparent.png"
                alt="VitaKernel"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-102 filter brightness-0 invert"
              />
            </button>

            <p className="font-sans-dm text-xs sm:text-sm text-gray-200 leading-relaxed mb-4 max-w-sm">
              Vitakernel is an agro-processing company focused on extracting value from mango-derived materials through the production of mango seed oil and biomass briquettes.
            </p>

            <span className="text-[11px] text-[#E5A928] italic font-serif-baskerville block mb-6">
              “Turning mango by-products into valuable resources.”
            </span>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-serif-baskerville text-base sm:text-lg font-bold text-[#E5A928] mb-3 sm:mb-4">
              Quick Links
            </h4>
            <div className="font-sans-dm text-xs sm:text-sm space-y-2">
              {NAV_ITEMS.map((item) => (
                <p key={item.name}>
                  <Link
                    to={item.href.startsWith('/') ? item.href : `/#${item.href.replace('#', '')}`}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer py-0.5 block"
                  >
                    {item.name}
                  </Link>
                </p>
              ))}
            </div>
          </div>

          {/* Our Products Column (2 cols) */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif-baskerville text-base sm:text-lg font-bold text-[#E5A928] mb-3 sm:mb-4">
              Our Products
            </h4>
            <div className="font-sans-dm text-xs sm:text-sm space-y-2">
              <p>
                <Link
                  to="/#mango-seed-oil"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer py-0.5 block"
                >
                  Mango Seed Oil
                </Link>
              </p>
              <p>
                <Link
                  to="/#biomass-briquettes"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer py-0.5 block"
                >
                  Biomass Briquettes
                </Link>
              </p>
            </div>
          </div>

          {/* Contact Details Column (2 cols) */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif-baskerville text-base sm:text-lg font-bold text-[#E5A928] mb-3 sm:mb-4">
              Contact
            </h4>
            <div className="font-sans-dm text-xs sm:text-sm text-gray-300 space-y-2.5 leading-relaxed">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E5A928] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E5A928] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E5A928] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address}<br />
                  {COMPANY_INFO.city}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits matching mockup */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300">
          <p className="font-sans-dm text-center sm:text-left">
            &copy; 2026 Vitakernel. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-300">
            <Link
              to="/#about"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              to="/#about"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

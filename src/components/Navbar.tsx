import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, COMPANY_INFO } from '../data/siteData';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { requestInquiry } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 border-b border-[#eae6df] ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xs py-2.5' : 'bg-white py-3 sm:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo with Tagline */}
          <Link
            to="/"
            className="flex items-center gap-3 group cursor-pointer text-left shrink-0"
            aria-label="VitaKernel Home"
          >
            <img
              src={COMPANY_INFO.logoUrl}
              alt="VitaKernel"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7 text-[14px] xl:text-[15px] font-medium text-[#292D2A]">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
              <Link
                to={item.href.startsWith('/') ? item.href : `/#${item.href.replace('#', '')}`}
                className="flex items-center gap-1 hover:text-[#174D35] py-2 transition-colors cursor-pointer"
              >
                <span>{item.name}</span>
                {item.subItems && (
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#174D35] group-hover:rotate-180 transition-transform" />
                )}
              </Link>

                {/* Submenu Dropdown */}
                {item.subItems && openDropdown === item.name && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href.startsWith('/') ? sub.href : `/#${sub.href.replace('#', '')}`}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#292D2A] hover:bg-[#FAF8F5] hover:text-[#174D35] transition-colors cursor-pointer"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Action: Request a Quote (Mango Gold Button) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => requestInquiry('Quote Request')}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#E5A928] hover:bg-[#d89c20] text-[#292D2A] font-bold text-xs sm:text-sm rounded-full shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#292D2A]" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              className="lg:hidden min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#174D35]" /> : <Menu className="w-6 h-6 text-[#174D35]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-4 shadow-xl">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                  <div key={item.name} className="border-b border-gray-50 py-1">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href.startsWith('/') ? item.href : `/#${item.href.replace('#', '')}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-left font-medium text-base text-[#292D2A] hover:text-[#174D35] py-2 px-2 rounded-lg cursor-pointer w-full block"
                      >
                        {item.name}
                      </Link>
                    {item.subItems && (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="p-2 text-gray-400 hover:text-[#174D35]"
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenu Accordion */}
                    {item.subItems && openDropdown === item.name && (
                      <div className="pl-4 pb-2 space-y-1 bg-[#FAF8F5] rounded-xl my-1 p-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href.startsWith('/') ? sub.href : `/#${sub.href.replace('#', '')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full text-left text-xs text-gray-600 hover:text-[#174D35] py-1.5 px-2 rounded-md"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}

              <div className="pt-4 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    requestInquiry('Quote Request');
                  }}
                  className="w-full min-h-[48px] bg-[#E5A928] hover:bg-[#d89c20] text-[#292D2A] font-bold text-sm rounded-full flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

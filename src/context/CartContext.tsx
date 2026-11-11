import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  scrollToSection: (id: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  currentPage: string;
  navigateTo: (page: string, sectionId?: string) => void;
  requestInquiry: (subject?: string) => void;
  inquirySubject: string;
  setInquirySubject: (sub: string) => void;
}

const CartContext = createContext<AppContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('General Inquiry');

  const scrollToSection = (id: string) => {
    const cleanId = id.replace('#', '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateTo = (_page: string, sectionId?: string) => {
    if (sectionId) {
      scrollToSection(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const requestInquiry = (subject?: string) => {
    if (subject) setInquirySubject(subject);
    scrollToSection('contact');
  };

  return (
    <CartContext.Provider
      value={{
        scrollToSection,
        isSearchOpen,
        setIsSearchOpen,
        currentPage: 'home',
        navigateTo,
        requestInquiry,
        inquirySubject,
        setInquirySubject,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

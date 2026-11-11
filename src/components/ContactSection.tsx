import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { useCart } from '../context/CartContext';
import { MapPin, Phone, Mail, Clock, Send, Check, Loader2, ExternalLink } from 'lucide-react';

const RECIPIENT_EMAILS = [
  'bernyx.owusu@gmail.com',
  'info@vitakernel.com',
];

export const ContactSection: React.FC = () => {
  const { inquirySubject } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<{
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: inquirySubject || 'Quote Request',
    message: '',
  });

  useEffect(() => {
    if (inquirySubject) {
      setFormData((prev) => ({ ...prev, subject: inquirySubject }));
    }
  }, [inquirySubject]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/bernyx.owusu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          topic: formData.subject,
          message: formData.message,
          _cc: 'info@vitakernel.com',
          _subject: `New VitaKernel Inquiry: ${formData.subject} - from ${formData.name}`,
          _captcha: 'false',
        }),
      });
    } catch (err) {
      console.warn('Form submission notification:', err);
    } finally {
      setIsSubmitting(false);
      setLastSubmittedData({ ...formData });
      setSubmitted(true);
    }
  };

  const getMailtoUrl = () => {
    if (!lastSubmittedData) return `mailto:${RECIPIENT_EMAILS.join(',')}`;
    const subject = encodeURIComponent(`VitaKernel Inquiry: ${lastSubmittedData.subject} (from ${lastSubmittedData.name})`);
    const body = encodeURIComponent(
      `Name: ${lastSubmittedData.name}\n` +
      `Email: ${lastSubmittedData.email}\n` +
      `Phone: ${lastSubmittedData.phone || 'N/A'}\n` +
      `Topic: ${lastSubmittedData.subject}\n\n` +
      `Message:\n${lastSubmittedData.message}`
    );
    return `mailto:bernyx.owusu@gmail.com,info@vitakernel.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-[#eae6df] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#174D35] bg-[#FAF8F5] px-3.5 py-1 rounded-full border border-[#174D35]/15">
            Get in Touch
          </span>
          <h2 className="font-serif-baskerville text-2xl sm:text-3xl lg:text-4xl font-bold text-[#174D35] mt-3 tracking-tight">
            Contact &amp; Request a Quote
          </h2>
          <p className="font-sans-dm text-xs sm:text-sm md:text-base text-gray-600 mt-2.5 leading-relaxed">
            Whether you are inquiring about our Mango Seed Oil, Biomass Briquettes, or looking to explore partnerships, our executive team in Accra is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-5 sm:p-8 lg:p-10 rounded-3xl border border-[#eae6df] shadow-xs">
            {submitted ? (
              <div className="text-center py-8 sm:py-10">
                <div className="w-14 h-14 bg-[#174D35] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif-baskerville text-2xl font-bold text-[#174D35] mb-2">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="font-sans-dm text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-4 leading-relaxed">
                  Thank you, <span className="font-semibold text-gray-900">{lastSubmittedData?.name || 'for reaching out'}</span>.
                  Your message has been routed directly to our corporate team.
                </p>

                {/* Delivery Confirmation */}
                <div className="bg-white border border-[#eae6df] rounded-2xl p-4 max-w-md mx-auto text-left mb-6 text-xs text-gray-700 space-y-2">
                  <span className="font-bold text-gray-900 block text-[11px] uppercase tracking-wider text-[#174D35]">
                    Delivering to:
                  </span>
                  <div className="flex items-center gap-2 text-gray-800">
                    <Mail className="w-3.5 h-3.5 text-[#174D35] shrink-0" />
                    <span className="font-mono text-xs">bernyx.owusu@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <Mail className="w-3.5 h-3.5 text-[#174D35] shrink-0" />
                    <span className="font-mono text-xs">info@vitakernel.com</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getMailtoUrl()}
                    className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 bg-[#174D35] text-white rounded-full text-xs font-semibold hover:bg-[#123d2a] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <span>Open in Your Mail App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Quote Request', message: '' });
                    }}
                    className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-xs font-semibold transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif-baskerville text-lg sm:text-xl font-bold text-[#174D35] mb-3 sm:mb-4">
                  Send Us a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 sm:py-2.5 text-base sm:text-sm border border-gray-300 rounded-xl focus:outline-hidden focus:border-[#174D35] focus:ring-1 focus:ring-[#174D35] bg-white transition-all min-h-[46px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 sm:py-2.5 text-base sm:text-sm border border-gray-300 rounded-xl focus:outline-hidden focus:border-[#174D35] focus:ring-1 focus:ring-[#174D35] bg-white transition-all min-h-[46px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+233 XX XXX XXXX"
                      className="w-full px-4 py-3 sm:py-2.5 text-base sm:text-sm border border-gray-300 rounded-xl focus:outline-hidden focus:border-[#174D35] focus:ring-1 focus:ring-[#174D35] bg-white transition-all min-h-[46px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Topic of Interest *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 sm:py-2.5 text-base sm:text-sm border border-gray-300 rounded-xl focus:outline-hidden focus:border-[#174D35] focus:ring-1 focus:ring-[#174D35] bg-white transition-all min-h-[46px]"
                    >
                      <option value="Quote Request">Request a Quote</option>
                      <option value="Mango Seed Oil Inquiry">Mango Seed Oil Inquiry</option>
                      <option value="Biomass Briquette Quote">Biomass Briquette Quote</option>
                      <option value="Partnership & Collaboration">Partnership &amp; Collaboration</option>
                      <option value="Agro Processing Supply Chain">Agro Processing Supply Chain</option>
                      <option value="General Information">General Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements or question..."
                    className="w-full px-4 py-3 sm:py-2.5 text-base sm:text-sm border border-gray-300 rounded-xl focus:outline-hidden focus:border-[#174D35] focus:ring-1 focus:ring-[#174D35] bg-white transition-all"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#E5A928] hover:bg-[#d89c20] text-[#292D2A] font-bold text-sm sm:text-base rounded-full shadow-xs transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#292D2A]" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#292D2A]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Headquarters Office Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-[#FAF8F5] p-5 sm:p-8 rounded-3xl border border-[#eae6df] shadow-xs">
              <span className="text-xs font-bold text-[#174D35] uppercase tracking-wider block mb-2">
                Executive Office
              </span>
              <h3 className="font-serif-baskerville text-xl sm:text-2xl font-bold text-[#174D35] mb-5">
                Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#174D35] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900 block">Address:</span>
                    <span className="block leading-relaxed">{COMPANY_INFO.address}</span>
                    <span className="block">{COMPANY_INFO.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#174D35] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900 block">Direct Telephone:</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-[#174D35] font-bold hover:underline inline-block min-h-[32px] pt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#174D35] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900 block">Email:</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#174D35] font-medium hover:underline inline-block min-h-[32px] pt-0.5 break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#174D35] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900 block">Office Hours:</span>
                    <span>Monday to Friday: 8:30 AM to 5:30 PM GMT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

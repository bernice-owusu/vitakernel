import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NEWS_DATA } from '../data/siteData';
import { ArrowLeft, Mail, Phone } from 'lucide-react';

export const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = NEWS_DATA.find((n) => n.id === id);

  if (!news) {
    return (
      <section className="w-full bg-white py-12 sm:py-16 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center py-20">
            <h2 className="font-serif-baskerville text-3xl sm:text-4xl font-bold text-[#174D35] mb-4">
              Article Not Found
            </h2>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#174D35] hover:bg-[#123d2a] text-white font-medium text-sm rounded-full transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to News</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-12 sm:py-16 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#174D35] mb-8 sm:mb-12 hover:text-[#123d2a] transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>Back to News</span>
        </Link>

        <article className="max-w-3xl mx-auto">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden mb-8 shadow-xl">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#174D35]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                {news.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E5A928]" />
            <span className="text-[11px] text-[#689857] font-medium uppercase tracking-wider">
              {news.date}
            </span>
          </div>

          <h1 className="font-serif-baskerville text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174D35] mb-6 tracking-tight leading-[1.15]">
            {news.title}
          </h1>

          <div className="prose prose-sm sm:prose-base lg:prose-lg text-[#3D4440] max-w-none">
            <p className="mb-6 text-lg leading-relaxed font-medium text-[#174D35]">
              {news.excerpt}
            </p>
            <p className="mb-6 leading-relaxed">
              At Vitakernel, we are proud to share this update on our progress in
              agricultural waste valorisation. {news.title.toLowerCase()} represents
              our ongoing commitment to building a circular bio-economy in Ghana,
              turning discarded mango seeds into high-value products that serve both
              local communities and international markets.
            </p>
            <p className="mb-6 leading-relaxed">
              Our team in Accra continues to work with agro-processing partners to
              collect mango seeds, apply solvent-free cold pressing, and produce
              clean-burning biomass briquettes. Every update we share brings us
              closer to a deforestation-free future.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#eae6df]">
            <h3 className="font-serif-baskerville text-2xl font-bold text-[#174D35] mb-6">
              Got a question about this story?
            </h3>
            <p className="font-sans-dm text-sm text-gray-600 mb-6 leading-relaxed">
              Our executive team in Accra is ready to help with media inquiries,
              partnership questions, or product information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:info@vitakernel.com`}
                className="flex items-center gap-2 px-7 py-3 bg-[#174D35] hover:bg-[#123d2a] text-white font-semibold text-sm rounded-full transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
              <a
                href="tel:+233244380495"
                className="flex items-center gap-2 px-7 py-3 border border-[#174D35] text-[#174D35] font-semibold text-sm rounded-full transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

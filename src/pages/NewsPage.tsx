import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_DATA } from '../data/siteData';
import { Newspaper, ArrowRight } from 'lucide-react';

export const NewsPage: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-8 sm:py-12 lg:py-20 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#174D35] bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[#174D35]/15 inline-block mb-3 sm:mb-4">
            News &amp; Insights
          </span>
          <h2 className="font-serif-baskerville text-2xl sm:text-3xl lg:text-4xl font-bold text-[#174D35] tracking-tight leading-[1.1]">
            Latest Updates
          </h2>
          <p className="font-sans-dm text-xs sm:text-base md:text-lg text-[#3D4440] mt-3 sm:mt-5 leading-relaxed max-w-xl mx-auto">
            Follow our journey as we transform mango by-products into valuable resources,
            from product launches to sustainability milestones and partnership news.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {NEWS_DATA.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-3xl border border-[#eae6df] overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white bg-[#174D35]/90 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <Newspaper className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#E5A928]" />
                  <span className="text-[9px] sm:text-[10px] text-[#689857] font-medium uppercase tracking-wider">
                    {news.date}
                  </span>
                </div>
                <h3 className="font-serif-baskerville text-lg sm:text-xl font-bold text-[#174D35] mb-2 sm:mb-3 leading-tight group-hover:text-[#123d2a] transition-colors">
                  {news.title}
                </h3>
                <p className="font-sans-dm text-[11px] sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-1">
                  {news.excerpt}
                </p>
                <Link
                  to={`/news/${news.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#174D35] hover:bg-[#123d2a] text-white text-[10px] sm:text-xs font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

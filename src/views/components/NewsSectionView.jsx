import React from 'react';

/**
 * [VIEW] NewsSectionView
 */
export default function NewsSectionView() {
  const articles = [
    {
      id: 1,
      title: 'New Beauty Products Editors Are Loving This December',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
      date: 'December 2025',
    },
    {
      id: 2,
      title: '38 New Beauty Products Our Editors Are Loving This December',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80',
      date: 'December 2025',
    },
    {
      id: 3,
      title: '38 New Beauty Products Our Editors Are Loving This December',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80',
      date: 'December 2025',
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Title Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center space-x-3">
            <span className="hidden sm:block w-8 h-0.5 bg-[#4c1d54]"></span>
            <h2 className="bg-[#4c1d54] text-white text-base sm:text-lg font-bold px-6 py-2 rounded-sm shadow-sm tracking-wide">
              Nu Skin In The News
            </h2>
          </div>

          <a href="#all-news" className="text-xs font-bold text-gray-700 hover:text-[#4c1d54] underline">
            View All &gt;&gt;
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 3 News Articles */}
          {articles.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-sm border border-gray-100 hover:border-gray-300 hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-3 group-hover:text-[#4c1d54] transition">
                  {item.title}
                </h4>
                <span className="text-[11px] text-gray-400 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}

          {/* Right Featured News Card */}
          <div className="relative h-64 sm:h-auto rounded-sm overflow-hidden bg-gray-900 group shadow-md">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
              alt="News Highlight"
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-200 mb-1">
                News
              </span>
              <h3 className="text-xl font-extrabold leading-snug">
                Nu Skin In The News
              </h3>
            </div>
          </div>

        </div>

        {/* Indicator Bar */}
        <div className="flex justify-center items-center pt-4">
          <span className="w-10 h-1.5 bg-gray-900 rounded-full"></span>
        </div>

      </div>
    </section>
  );
}

import React from 'react';

/**
 * [VIEW] AwardRecognitionView
 * Section: Award And Recognition
 */
export default function AwardRecognitionView() {
  const awards = [
    {
      badgeYear: '2024',
      badgeOrg: 'NEWBEAUTY',
      badgeColor: 'border-pink-500 text-pink-600',
      title: 'ageLOC® LumiSpa® iO',
      desc: '2023 Best Cleansing Device Award Winner\nNewBeauty Awards',
    },
    {
      badgeYear: '2023',
      badgeOrg: 'BEAUTY BIBLE',
      badgeColor: 'border-rose-400 text-rose-500',
      title: 'Epoch Baobab Body Butter',
      desc: '2023 Beauty Bible Awards Winner',
    },
    {
      badgeYear: '2022',
      badgeOrg: 'GLOBAL MAKEUP',
      badgeColor: 'border-purple-600 text-purple-700',
      title: 'Nu Skin Enterprises',
      desc: '2022 Best USA Beauty Brand\nGlobal Makeup Awards',
    },
    {
      badgeYear: '2022',
      badgeOrg: 'GREEN BEAUTY',
      badgeColor: 'border-emerald-600 text-emerald-700',
      title: 'Epoch® Yin & Yang Mask',
      desc: '2022 Most Sustainable Packaging: Silver Winner\nGlobal Green Beauty Awards',
    },
    {
      badgeYear: '2021',
      badgeOrg: 'InStyle',
      badgeColor: 'border-gray-800 text-gray-900',
      title: 'ageLOC® Facial Spa',
      desc: "2021 Readers' Choice Beauty Award Winner\nInStyle",
    },
    {
      badgeYear: '2022',
      badgeOrg: 'PURE BEAUTY',
      badgeColor: 'border-blue-600 text-blue-700',
      title: 'Nutricentials® Eye Love Bright Eyes',
      desc: 'Pure Beauty Global Awards Finalist',
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Header */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center space-x-3">
            <span className="hidden sm:block w-12 h-0.5 bg-[#4c1d54]"></span>
            <h2 className="bg-[#4c1d54] text-white text-base sm:text-lg font-bold px-6 py-2 rounded-sm shadow-sm tracking-wide">
              Award And Recognition
            </h2>
            <span className="hidden sm:block w-12 h-0.5 bg-[#4c1d54]"></span>
          </div>
        </div>

        {/* Top Info Banner */}
        <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 border border-gray-200 rounded-sm p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          {/* Ảnh các thiết bị làm đẹp */}
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80"
              alt="Device Systems"
              className="h-20 sm:h-24 object-contain rounded"
            />
          </div>

          <div className="text-center md:text-right">
            <span className="text-xs uppercase font-extrabold tracking-widest text-gray-500 block mb-1">
              WORLD'S #1 COMPANY FOR
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              Beauty & Wellness Device Systems
            </h3>
            <span className="text-[11px] text-gray-400 block mt-1 italic">
              Source: Euromonitor International Limited
            </span>
          </div>
        </div>

        {/* Grid các danh hiệu giải thưởng */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-gray-50/60 hover:bg-white p-4 rounded-sm border border-gray-100 hover:border-gray-200 hover:shadow-md transition duration-200 flex flex-col items-center justify-between"
            >
              {/* Badge Icon tròn */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 ${award.badgeColor} flex flex-col items-center justify-center p-1 mb-3 shadow-sm bg-white`}>
                <span className="text-[8px] font-black uppercase leading-tight">{award.badgeOrg}</span>
                <span className="text-[10px] font-extrabold">{award.badgeYear}</span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-900 mb-1 leading-snug">
                  {award.title}
                </h4>
                <p className="text-[10px] text-gray-500 whitespace-pre-line leading-relaxed">
                  {award.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-1.5 mt-8">
          <span className="w-2 h-2 rounded-full bg-[#4c1d54]"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>

      </div>
    </section>
  );
}

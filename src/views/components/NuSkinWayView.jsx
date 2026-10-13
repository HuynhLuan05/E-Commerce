import React from 'react';

/**
 * [VIEW] NuSkinWayView
 * Section: The Nu Skin Way
 */
export default function NuSkinWayView() {
  const stats = [
    { title: 'Nu Skin,', subtitle: 'Improving Lives Everyday', isMain: true },
    { number: '25+', label: 'Years of Giving' },
    { number: '20+', label: 'Current Social Projects' },
    { number: '850M+', label: 'Meals Donated through Nourish the Children' },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-12 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <span className="hidden sm:block w-12 h-0.5 bg-[#4c1d54]"></span>
            <h2 className="bg-[#4c1d54] text-white text-base sm:text-lg font-bold px-6 py-2 rounded-sm shadow-sm tracking-wide">
              The Nu Skin Way
            </h2>
            <span className="hidden sm:block w-12 h-0.5 bg-[#4c1d54]"></span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-200 pb-10 text-center md:text-left">
          {stats.map((stat, idx) => {
            if (stat.isMain) {
              return (
                <div key={idx} className="col-span-2 md:col-span-1">
                  <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                    {stat.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.subtitle}
                  </p>
                </div>
              );
            }
            return (
              <div key={idx} className="space-y-1">
                <span className="text-2xl sm:text-3xl font-black text-gray-900 block">
                  {stat.number}
                </span>
                <span className="text-xs text-gray-600 font-medium block">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Story Block 1: Being a Force for Good */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-10 rounded-sm border border-gray-100 shadow-sm">
          {/* Cột trái: Ảnh */}
          <div className="rounded overflow-hidden shadow">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
              alt="Being a Force for Good"
              className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Cột phải: Nội dung */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
              Being a Force for Good
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Some call it corporate social responsibility. We call it our purpose. Together we're engaged in initiatives worldwide—nourishing thousands of hungry children, funding pediatric health and wellness services, or striving for a more sustainable future.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              And sometimes, we're simply taking meaningful steps to improve our local communities. Whatever we do, we believe changing the world begins with a single action.
            </p>
            <div className="pt-2">
              <a
                href="#projects"
                className="text-xs font-bold text-[#4c1d54] hover:text-[#63236e] uppercase tracking-wider underline transition"
              >
                Explore our projects &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Story Block 2: Nature + Science */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-10 rounded-sm border border-gray-100 shadow-sm">
          {/* Cột trái: Nội dung */}
          <div className="space-y-4 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
              Nature + Science
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Capturing the best in nature to bring you the best results is our personal mission. We combine powerful ingredients with innovative science and technology. The result? World-class products that deliver real benefits.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              And even though we've spent more than 30 years researching aging at the genetic level, Mother Nature continually inspires us to push the boundaries of inquiry and innovation. We bottle what's best and bring it right to your door.
            </p>
            <div className="pt-2">
              <a
                href="#discover"
                className="text-xs font-bold text-[#4c1d54] hover:text-[#63236e] uppercase tracking-wider underline transition"
              >
                Discover more &rarr;
              </a>
            </div>
          </div>

          {/* Cột phải: Ảnh Nature + Science */}
          <div className="rounded overflow-hidden shadow order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
              alt="Nature and Science"
              className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

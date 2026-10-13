import React from 'react';

/**
 * [VIEW] FooterView
 */
export default function FooterView() {
  const quickLinks = [
    'Home',
    'Our Shop',
    'Shop Detail',
    'Shopping Cart',
    'Checkout',
    'Contact Us',
  ];

  return (
    <footer className="bg-[#4c1d54] text-white pt-12 pb-6 px-4 sm:px-8 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-purple-800/60">
          
          {/* Col 1: About & Info */}
          <div className="sm:col-span-2 pr-0 lg:pr-8">
            <p className="text-xs text-purple-200 leading-relaxed mb-6">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.
            </p>
            <div className="space-y-2.5 text-xs text-purple-100">
              <div className="flex items-center space-x-2.5">
                <svg className="w-4 h-4 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                <span>123 Street, New York, USA</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <svg className="w-4 h-4 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                <span>info@example.com</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <svg className="w-4 h-4 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                <span>+012 345 67890</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-purple-200 hover:text-white flex items-center space-x-1.5 transition">
                    <span className="text-[10px]">❯</span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-purple-200 hover:text-white flex items-center space-x-1.5 transition">
                    <span className="text-[10px]">❯</span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-purple-300">
          <p className="text-center md:text-left">
            &copy; <strong className="text-white">Your Site Name</strong>. All Rights Reserved. Designed by{' '}
            <strong className="text-white">HTML Codex</strong> | Distributed By{' '}
            <strong className="text-white">ThemeWagon</strong>
          </p>

          <div className="flex items-center space-x-2">
            {['VISA', 'MasterCard', 'PayPal', 'AMEX', 'Discover'].map((card) => (
              <span
                key={card}
                className="bg-white text-gray-800 font-extrabold text-[9px] px-2 py-0.5 rounded shadow-sm"
              >
                {card}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}


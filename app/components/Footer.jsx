'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = ({ data }) => {
  const pathname = usePathname();

  const footerData = data || {
    banner: {
      title: "EXPLORE OUR FASHION CATALOG",
      subtitle:
        "Browse through our fashion catalog to find a wide range of stylish clothing options. From classics to the latest trends, there’s something for everyone.",
      cta: "SEE OUR INSTAGRAM ↗",
      ctaLink: "https://instagram.com",
    },
    columns: {
      GENERAL: [
        { name: "About Us", link: "/about" },
        { name: "Blog", link: "/blog" },
        { name: "How it Works", link: "/how-it-works" },
        { name: "Contact Us", link: "/contact" },
      ],
      PRODUCTS: [
        { name: "Men Fashion", link: "/men" },
        { name: "Women Fashion", link: "/women" },
        { name: "Shoes & Bag", link: "/shoes-bags" },
        { name: "Accessories", link: "/accessories" },
      ],
      "CUSTOMER SERVICE": [
        { name: "FAQ", link: "/faq" },
        { name: "Help & Support", link: "/support" },
        { name: "Billing Cycle", link: "/billing" },
        { name: "Privacy Policy", link: "/privacy" },
      ],
      "SOCIAL MEDIA": [
        { name: "Instagram", link: "https://instagram.com" },
        { name: "Tiktok", link: "https://tiktok.com" },
        { name: "Facebook", link: "https://facebook.com" },
        { name: "YouTube", link: "https://youtube.com" },
      ],
    },
    watermark: "GLAMORA",
  };

  return (
    <footer className="w-full flex justify-center px-4 sm:px-6 md:px-10 py-10 sm:py-14 font-satoshi relative">
      <div
        className="w-full max-w-5xl rounded-[40px] shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 relative z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/footer-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-[40px] z-0" />
        <div className="relative z-10 text-white">

          {/* Banner */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold uppercase tracking-wide">
              {footerData.banner.title}
            </h2>
            <p className="text-[9px] sm:text-xs md:text-sm mt-2 max-w-2xl mx-auto text-white/90 px-2">
              {footerData.banner.subtitle}
            </p>
            <Link href={footerData.banner.ctaLink} target="_blank">
              <button className="mt-4 px-5 py-2 border border-white/30 bg-white/10 rounded-full text-xs sm:text-sm md:text-base transition-all hover:scale-110 hover:shadow-lg">
                {footerData.banner.cta}
              </button>
            </Link>
          </div>

          {/* Columns */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-7 shadow-inner">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 text-left">
              {Object.entries(footerData.columns).map(([title, links], i) => (
                <div key={i} className="min-w-[100px]">
                  <h3 className="font-extrabold text-[10px] sm:text-xs md:text-sm uppercase mb-2 sm:mb-3">
                    {title}
                  </h3>
                  <ul className="space-y-1 sm:space-y-2 text-[9px] sm:text-xs md:text-sm">
                    {links.map((item, j) => (
                      <li
                        key={j}
                        className="transition-all hover:translate-x-1 active:scale-95"
                      >
                        {item.link.startsWith("http") ? (
                          <a
                            href={item.link}
                            target="_blank"
                            className="text-white/90"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link href={item.link}>
                            <span
                              className={`text-white/90 ${
                                item.link === pathname ? "font-semibold text-white" : ""
                              }`}
                            >
                              {item.name}
                            </span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Watermark */}
          <h1 className="text-center mt-6 sm:mt-8 md:mt-10 text-[50px] sm:text-[80px] md:text-[110px] font-extrabold opacity-20 select-none pointer-events-none">
            {footerData.watermark}
          </h1>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

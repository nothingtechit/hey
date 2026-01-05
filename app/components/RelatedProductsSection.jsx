'use client'
import React, { useState } from "react";
import Image from "next/image";

const RelatedProductsSection = ({ list }) => {
  const products = list || [
    { title: "NAUTICAL LOGO LONG COAT", price: 370, img: "c1.png" },
    { title: "JACQUARD BLOUSON JACKET", price: 275, img: "c2.png" },
    { title: "BAROCCO BOMBER JACKET", price: 225, img: "c3.png" },
    { title: "CLASSIC TRENCH COAT", price: 390, img: "c2.png" },
    { title: "WINTER PARKA COAT", price: 310, img: "c3.png" },
    { title: "BEIGE OVERSIZED COAT", price: 350, img: "c1.png" },
    { title: "LEATHER BROWN JACKET", price: 260, img: "c3.png" },
    { title: "PREMIUM WOOL COAT", price: 410, img: "c2.png" },
    { title: "DOUBLE BUTTON TRENCH", price: 330, img: "c1.png" },
  ];

  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const itemsPerSlide = 3; // default monitor view

  const nextSlide = () => {
    setIndex(prev => (prev + itemsPerSlide >= products.length ? 0 : prev + itemsPerSlide));
  };

  const prevSlide = () => {
    setIndex(prev => (prev - itemsPerSlide < 0 ? Math.max(products.length - itemsPerSlide, 0) : prev - itemsPerSlide));
  };

  // Swipe Handlers
  const onTouchStart = e => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12 text-black font-satoshi">
      <div
        className="w-full max-w-6xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center mb-5 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-wide">
            RELATED PRODUCTS ({products.length})
          </h2>

          {/* Arrow Buttons */}
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={prevSlide}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white active:scale-95 transition-all text-xl"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white active:scale-95 transition-all text-xl"
            >
              ›
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {products.slice(index, index + 4).map((p, i) => (
            <div
              key={i}
              className="rounded-[28px] sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative aspect-[3/4] w-full"
            >
              {/* Image */}
              <Image
                src={`/assets/${p.img}`}
                alt={p.title}
                width={400}
                height={520}
                className="w-full h-full object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm p-3 sm:p-4 md:p-5 text-white">
                <p className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase truncate">
                  {p.title}
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-bold">${p.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedProductsSection;

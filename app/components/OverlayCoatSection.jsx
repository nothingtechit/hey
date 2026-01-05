'use client'
import React from "react";
import Image from "next/image";

const OverlayCoatSection = ({ data }) => {
  const sectionData = data || {
    bigCard: {
      img: "coat-big.png",
      label: "97% Polyester",
      text: "Elegant coat with the best materials",
    },
    smallCard: {
      img: "coat-big.png",
      label: "Neat Stitches",
      text: "Durable and strong stitches",
    },
  };

  return (
    <section className="w-full flex justify-center px-4 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 font-satoshi text-black">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 md:h-[420px] lg:h-[480px]">

        {/* Big Card */}
        <div className="w-full md:w-[70%] relative rounded-[32px] sm:rounded-3xl overflow-hidden shadow-lg h-[260px] sm:h-[320px] md:h-full">
          <Image
            src={`/assets/${sectionData.bigCard.img}`}
            alt={sectionData.bigCard.text}
            width={900}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white">
            <span className="text-[9px] sm:text-[11px] md:text-xs opacity-90">
              {sectionData.bigCard.label}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug mt-1 max-w-[90%]">
              {sectionData.bigCard.text}
            </h3>
          </div>
        </div>

        {/* Small Card */}
        <div className="w-full md:w-[30%] relative rounded-[32px] sm:rounded-3xl overflow-hidden shadow-lg h-[220px] sm:h-[280px] md:h-full">
          <Image
            src={`/assets/${sectionData.smallCard.img}`}
            alt={sectionData.smallCard.text}
            width={400}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/35 flex flex-col justify-end p-4 sm:p-5 text-white">
            <span className="text-[9px] sm:text-[11px] md:text-xs opacity-90">
              {sectionData.smallCard.label}
            </span>
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug mt-1 max-w-[95%]">
              {sectionData.smallCard.text}
            </h4>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OverlayCoatSection;

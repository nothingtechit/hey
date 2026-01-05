'use client'
import React from "react";
import Image from "next/image";

const ProductGallery = ({ gallery }) => {
  const galleryData = gallery || {
    mainImage: "coat-main.png",
    sideImages: [
      { file: "coat-1.png", w: 280, h: 200 },
      { file: "coat-2.png", w: 320, h: 240 },
    ],
    bottomImage: { file: "coat-3.png", w: 450, h: 350 },
  };

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 md:px-10 py-6 font-satoshi">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-5 md:gap-6 items-center md:items-start">

        {/* Main Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src={`/assets/${galleryData.mainImage}`}
            alt="Main Product"
            width={700}
            height={900}
            className="rounded-3xl object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Right Images Section */}
        <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-col gap-3 sm:gap-4 md:gap-5">

          {/* Side Images */}
          <div className="col-span-2 md:col-span-1 flex gap-3 md:justify-end">
            {galleryData.sideImages.map((img, i) => (
              <Image
                key={i}
                src={`/assets/${img.file}`}
                alt={`Side Image ${i + 1}`}
                width={img.w}
                height={img.h}
                className="rounded-2xl object-cover w-1/2 h-auto active:scale-95 transition-all"
                priority
              />
            ))}
          </div>

          {/* Bottom Image */}
          <div className="col-span-2 flex justify-center md:justify-end">
            <Image
              src={`/assets/${galleryData.bottomImage.file}`}
              alt="Bottom Image"
              width={galleryData.bottomImage.w}
              height={galleryData.bottomImage.h}
              className="rounded-3xl object-cover w-full h-auto active:scale-95 transition-all"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductGallery;

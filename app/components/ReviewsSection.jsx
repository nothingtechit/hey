'use client'
import React, { useState } from "react";
import Image from "next/image";

const ReviewsSection = () => {
  const reviewsData = [
    {
      name: "Hasna Azlya",
      time: "Yesterday",
      img: "user-1.png",
      rating: 5,
      text: "I absolutely adore my beige coat! It's not just a coat, it's a statement piece. The fit is incredible and the fabric is elegant.",
      replies: 22,
    },
    {
      name: "Hellena Joy",
      time: "Yesterday",
      img: "user-2.png",
      rating: 5,
      text: "As a busy professional, I needed something stylish and practical. This coat keeps me warm without losing charm.",
      replies: 21,
    },
    {
      name: "Sarah Jasmine",
      time: "2 days ago",
      img: "user-3.png",
      rating: 5,
      text: "Soft, cozy, and warm. My wardrobe finally feels complete. This coat elevates every look.",
      replies: 10,
    },
    {
      name: "Taylor Swift",
      time: "2 days ago",
      img: "user-4.png",
      rating: 5,
      text: "Quality is top-notch. I feel confident and put together. Perfect for chilly days.",
      replies: 10,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  return (
    <section className="w-full flex justify-center px-4 sm:px-10 py-10 font-satoshi text-black">
      <div className="w-full max-w-4xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide">
            Rating & Reviews ({reviewsData.length})
          </h2>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            Showing {visibleCount} results from {reviewsData.length} reviews
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviewsData.slice(0, visibleCount).map((r, i) => (
            <div key={i} className="border border-gray-200 rounded-3xl p-5 shadow-sm relative">

              {/* Profile */}
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={`/assets/${r.img}`}
                  alt={r.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-[10px] text-gray-400">{r.time}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="text-yellow-500 text-xs mb-2">
                {"⭐".repeat(r.rating)}
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed min-h-[60px]">
                "{r.text}"
              </p>

              {/* Footer Actions */}
              <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                <button className="hover:text-black transition">Reply</button>
                <span>{r.replies} replies</span>
              </div>

            </div>
          ))}
        </div>
<div className="w-full flex justify-center px-4 sm:px-10 py-6 font-satoshi text-black">
  <div className="w-full max-w-4xl flex justify-start">
    <button
      className="
        flex items-center gap-2
        px-6 py-2
        border border-gray-400
        rounded-full
        text-sm font-medium text-black
        transition-all duration-300 ease-in-out
        hover:border-black
        hover:shadow-lg
        hover:translate-x-1
      "
    >
      SHOW MORE ↓
    </button>
  </div>
</div>


      </div>
    </section>
  );
};

export default ReviewsSection;

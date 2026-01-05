'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

let Icons = null;
try {
  Icons = require("lucide-react");
} catch {}

const Navbar = ({ links, brandName, initialCart }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(initialCart ?? initialCart ?? 1);

  const navLinks = links || [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const handleCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <nav className="w-full bg-white rounded-2xl shadow-sm px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center font-satoshi relative">
      
      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 lg:gap-8 text-gray-600 text-xs sm:text-sm md:text-base">
        {navLinks.map((link, i) => (
          <Link key={i} href={link.path}>
            <span
              className={`hover:text-black transition-all ${
                pathname === link.path ? "text-black font-bold" : ""
              }`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl active:scale-95">
        ☰
      </button>

      {/* Logo / Brand */}
      <div className="flex items-center gap-2 text-black">
        {Icons && <Icons.ShoppingBag size={20} />}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide">
          {brandName || "GLAMORA"}
        </h1>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        {Icons && <Icons.Search size={18} className="text-gray-600 cursor-pointer hover:text-black" />}
        {Icons && <Icons.Bell size={18} className="text-gray-600 cursor-pointer hover:text-black" />}

        {/* Cart */}
        <button
          onClick={handleCart}
          className="border border-gray-300 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm md:text-base text-gray-600 hover:border-black hover:text-black flex items-center gap-1 active:scale-95"
        >
          My Cart {cartCount > 0 && <span className="text-black font-bold">({cartCount})</span>}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-3 sm:gap-4 py-6 md:hidden rounded-b-2xl">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.path} onClick={() => setMenuOpen(false)}>
              <span className="text-gray-700 hover:text-black text-sm sm:text-base active:scale-95">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

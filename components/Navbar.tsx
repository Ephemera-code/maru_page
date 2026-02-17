
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-amber-50/60 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-[#1B4332] hover:text-green-600 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo */}
        <Link href="#home" className="shrink-0">
          <Image src="/images/logo.svg" alt="Light Food Logo" width={150} height={50} className="w-auto scale-220 h-12" />
        </Link>

        {/* Cart Icon */}
        <button
          onClick={toggleCart}
          className="p-2 text-[#1B4332] hover:text-green-600 transition-colors relative"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 py-4 flex flex-col items-center gap-4 text-lg font-semibold text-gray-700">
          <Link href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 transition-colors">Home</Link>
          <Link href="#products" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 transition-colors">Menu</Link>
          <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 transition-colors">Sobre Nosotros</Link>
        </div>
      )}
    </nav>
  );
}

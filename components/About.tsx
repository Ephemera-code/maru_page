"use client";

import CircularGallery from './CircularGallery';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function About() {
    const galleryItems = [
        { image: '/images/galeriFirst.png', text: 'Light Food' },
        { image: '/images/galeri1.png', text: 'Sabor Saludable' },
        { image: '/images/galeri2.jpeg', text: 'Natural' },
        { image: '/images/galeri3.jpeg', text: 'Fresco' },
        { image: '/images/galeri4.jpeg', text: 'Calidad' },
    ];

    return (
        <section id="about" className="py-12 md:py-20 min-h-[70vh] md:min-h-screen bg-amber-50/60 flex flex-col items-center relative overflow-hidden">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#1B4332] relative z-10">nuestros productos</h1>
            <p className="text-[#1B4332] font-bold text-center mb-6 md:mb-10 max-w-xl px-4 relative z-10 tracking-wider text-xl md:text-base">
                Pan receta exclusiva de oliva light, todos nuestros productos van con nuestro pan
            </p>
            <div className="w-full h-[380px] md:h-[580px] relative z-0">
                <CircularGallery
                    items={galleryItems}
                    bend={0.5}
                    textColor="#000000"
                    font="bold 50px Figtree"
                    borderRadius={0.05}
                    scrollSpeed={2}
                />
            </div>

            {/* Directional Arrows - Positioned absolutely to ensure they stay on top and are visible */}
            <div className="flex justify-between w-full max-w-lg mt-12 px-8 text-[#1B4332] relative z-20 pointer-events-none">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <ArrowLeft size={48} strokeWidth={2.5} />
                    <span className="text-xs font-black uppercase tracking-widest">Desliza</span>
                </div>
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <ArrowRight size={48} strokeWidth={2.5} />
                    <span className="text-xs font-black uppercase tracking-widest">Desliza</span>
                </div>
            </div>
        </section>
    );
}

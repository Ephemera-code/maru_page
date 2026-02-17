"use client";

import CircularGallery from './CircularGallery';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function About() {
    const galleryItems = [
        { image: '/images/foto_galeria_1.jpeg', text: '' },
        { image: '/images/foto_galeria_2.jpeg', text: '' },
        { image: '/images/foto_galeria_3.jpeg', text: '' },
        { image: '/images/foto_galeria_4.jpeg', text: '' },
    ];

    return (
        <section id="about" className="py-12 md:py-20 min-h-[70vh] md:min-h-screen bg-amber-50/60 flex flex-col items-center relative overflow-hidden">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#1B4332] relative z-10">Nuestros Productos</h1>
            <div className="w-full h-[380px] md:h-[580px] relative z-0">
                <CircularGallery
                    items={galleryItems}
                    bend={0.5}
                    textColor="#000000"
                    font="bold 50px Figtree"
                    borderRadius={0.05}
                    scrollSpeed={2}
                    onSelect={() => window.open('https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDMxNTA2NTU0NTcxNzI1?story_media_id=3804965363130334082_58331106388&igsh=a2RmNzY5ajFuZHFm', '_blank')}
                />
            </div>

            {/* Directional Arrows - Positioned absolutely to ensure they stay on top and are visible */}
            <div className="flex justify-between w-full max-w-lg mt-12 px-8 text-[#1B4332] relative z-20 pointer-events-none">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <ArrowLeft size={48} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <ArrowRight size={48} strokeWidth={2.5} />
                </div>
            </div>
        </section>
    );
}

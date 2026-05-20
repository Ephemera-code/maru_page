"use client";

import { useCallback } from 'react';
import CircularGallery from './CircularGallery';


export default function About() {
    const handleSelect = useCallback(() => {
        window.open('https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDMxNTA2NTU0NTcxNzI1?story_media_id=3804965363130334082_58331106388&igsh=a2RmNzY5ajFuZHFm', '_blank');
    }, []);

    const galleryItems = [
        { image: '/images/foto_galeria_1.jpeg', text: '' },
        { image: '/images/foto_galeria_2.jpeg', text: '' },
        { image: '/images/foto_galeria_3.jpeg', text: '' },
        { image: '/images/foto_galeria_4.jpeg', text: '' },
        { image: '/images/foto_galeria_5.jpeg', text: '' },
    ];

    return (
        <section id="about" className="py-12 md:py-24 min-h-[70vh] md:min-h-screen bg-[#ccdbb0c9] flex flex-col items-center relative overflow-hidden">

            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#1B4332] relative z-10 uppercase tracking-widest text-center">Nuestros Productos</h2>
            <div className="w-full h-[380px] md:h-[580px] relative z-0" aria-label="Galería de productos de comida saludable Olivia Light Food">
                <CircularGallery
                    items={galleryItems}
                    bend={0.5}
                    textColor="#000000"
                    font="bold 50px Figtree"
                    borderRadius={0.05}
                    scrollSpeed={2}
                    onSelect={handleSelect}
                />
            </div>

            <div className="container mx-auto px-6 mb-16 text-center max-w-4xl relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#1B4332] mb-6 tracking-tighter">
                    Islas Gastronómicas Saludables para tu Evento
                </h2>
                <p className="text-lg md:text-xl text-[#344b25] font-medium leading-relaxed mb-10">
                    Preparamos y servimos en el momento.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="bg-white/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm">
                        <span className="text-3xl mb-4 block">🧑‍🍳</span>
                        <h3 className="font-bold text-[#1B4332] mb-2 uppercase text-sm tracking-wider">Preparamos en el momento</h3>
                        <p className="text-[#4A5D23] text-sm leading-snug">Preparamos y servimos todo en el lugar para garantizar máxima frescura.</p>
                    </div>
                    <div className="bg-white/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm">
                        <span className="text-3xl mb-4 block">🍽️</span>
                        <h3 className="font-bold text-[#1B4332] mb-2 uppercase text-sm tracking-wider">Formato dinámico</h3>
                        <p className="text-[#4A5D23] text-sm leading-snug">Los invitados se acercan a nuestras islas y retiran su plato recién hecho.</p>
                    </div>
                </div>
                <div className="mt-10 bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/30 shadow-lg text-center">
                    <p className="text-lg md:text-xl text-[#1B4332] font-semibold mb-6">
                        ¿Querés una propuesta a medida para tu evento? Escribinos y hacemos tu consulta por WhatsApp.
                    </p>
                    <a
                        href="https://wa.me/5491165878387?text=Quiero%20consultar%20para%20las%20islas%20gastron%C3%B3micas%20y%20ver%20opciones%20para%20mi%20evento"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contactar por WhatsApp para consulta de islas gastronómicas"
                        className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#20b85b] transition-all shadow-md"
                    >
                        Hace tu consulta
                    </a>
                </div>
            </div>

           

        </section>
    );
}

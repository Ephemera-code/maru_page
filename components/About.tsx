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

            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#1B4332] relative z-10 uppercase tracking-widest text-center">Nuestros Productos</h1>
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
            </div>

            <div className="max-w-3xl mx-auto px-4 py-12 font-sans">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#1B4332] mb-6 tracking-tighter text-center">
                    Preguntas Frecuentes
                </h2>
                <p className="text-lg md:text-xl text-[#344b25] font-medium leading-relaxed mb-10 text-center">
                    Resolvemos tus dudas para que puedas disfrutar sin preocupaciones.
                </p>
                <div className="space-y-6">
                
                    <div className="group bg-white/30 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                            <span className="text-green-600 mr-2">01.</span>
                            ¿No queda insípido sin sal ni azúcar?
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-8">
                            <span className="font-semibold text-gray-800">No.</span> Usamos hierbas, especias y técnicas de cocción para sacar el sabor natural de cada ingrediente. La gente se sorprende porque sabe a <span className="text-gray-900 font-medium italic">comida de verdad</span>, no a dieta de hospital.
                        </p>
                        </div>

                        <div className="group bg-white/30 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                            <span className="text-green-600 mr-2">02.</span>
                            ¿Me va a llenar con tan poca grasa?
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-8">
                            <span className="font-semibold text-gray-800">Sí.</span> La fibra y los prebióticos te dan saciedad real y te mantienen tranquilo por más tiempo. Sin el bajón ni el hambre 2 horas después.
                        </p>
                        </div>

                        <div className="group bg-white/30 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                            <span className="text-green-600 mr-2">03.</span>
                            ¿Sirve si tengo dieta especial o intolerancias?
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-8">
                            Nuestros platos están pensados para gente que cuida su digestión, presión y azúcar. No usamos ingredientes ultraprocesados. 
                            <a 
                                href="https://wa.me/5491165878387?text=Hola!%20Tengo%20una%20consulta%20sobre%20mi%20dieta%20y%20las%20opciones%20del%20menú" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-3 inline-block text-green-600 font-semibold hover:underline decoration-2 underline-offset-4">
                                Si tenés una condición específica, escribinos y te asesoramos →
                            </a>
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}

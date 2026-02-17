import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="min-h-[90svh] flex items-center justify-center bg-transparent pt-24 pb-12 overflow-hidden">
            <div className="text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
                {/* Rotating Ribbon */}
                <div className="relative w-full overflow-hidden mb-12 -rotate-2 -skew-x-6 scale-105">
                    <div className="bg-[#C72425] py-4 shadow-xl border-y-4 border-white/20">
                        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="flex gap-8 items-center text-white text-3xl md:text-5xl font-black uppercase tracking-widest leading-none">
                                    <span>Sin Sal</span>
                                    <span className="w-3 h-3 bg-white rounded-full"></span>
                                    <span className="text-[#bcdbc2]">Sin Azucar</span>
                                    <span className="w-3 h-3 bg-white rounded-full"></span>
                                    <span className="text-[#bcdbc2]">Sin Grasas</span>
                                    <span className="w-3 h-3 bg-white rounded-full"></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Promotional Text */}
                <div className="flex w-full pb-2 pt-1.5  bg-black/10 backdrop-blur-sm flex-col items-center gap-6 mb-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-7xl font-extrabold text-white tracking-tighter drop-shadow-sm">
                        Come rápido y sano
                    </h2>
                    <p className="text-sm md:text-2xl text-white font-medium tracking-wide bg-black/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 uppercase italic">
                        Carnes magras • <br /> Menú vegetariano • <br /> Estudiantil • Ejecutivo
                    </p>
                    <p className="text-sm md:text-2xl text-white font-medium tracking-wide bg-black/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 uppercase italic">
                        fibras , calcio y minerales. <br />
                        Delivery
                    </p>
                </div>



                {/* Buttons */}
                <div className="flex flex-col mt-2 sm:flex-row gap-3 justify-center">
                    <a
                        href="#products"
                        className="bg-[#C72425] text-white px-10 py-3 rounded-full text-sm font-bold hover:bg-[#a61e1f] transition-all hover:scale-105 shadow-lg"
                    >
                        Explorar Menu
                    </a>
                    <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-green-600 border-2 border-green-600 px-10 py-3 rounded-full text-sm font-bold hover:bg-green-50 transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                    >
                        <Image src="/images/whatsapp_icon.svg" alt="WhatsApp" width={20} height={28} />
                        Whatsapp
                    </a>
                </div>
            </div>
        </section>
    );
}

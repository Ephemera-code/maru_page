import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="min-h-[90svh] flex items-center justify-center bg-[#ccdbb0ad] pt-24 pb-12 overflow-hidden">
            <div className="text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
                {/* Title */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[#1B4332] mb-3 leading-none">
                    <span className="">Sin Sal.</span> <br /> Sin Azúcar. <br /> <span className="text-[#C72425]">Sin Grasas.</span>
                </h1>
                <p className="text-sm md:text-2xl mb-4 text-[#1B4332] font-medium tracking-wide bg-amber-50/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 uppercase italic shadow-sm">
                    Fibras, calcio y minerales.
                </p>

                {/* Central Image with Red Frame */}
                <div className="relative w-full max-w-4xl px-4">
                    <div className="relative w-full mx-auto bg-amber-50/60 backdrop-blur-md  rounded-3xl overflow-hidden shadow-2xl  ">
                        <Image
                            src="/images/galeriFirst.png"
                            alt="Presentación Light Food"
                            width={500}
                            height={500}
                            className="w-full h-auto  object-cover"
                            priority
                        />
                    </div>

                    {/* Promotional Text */}
                    <div className="flex w-full pb-2 pt-4 bg-amber-50/60 backdrop-blur-sm rounded-3xl flex-col items-center gap-6 mt-5 mb-4 max-w-4xl mx-auto shadow-sm">
                        <h2 className="text-3xl md:text-7xl font-extrabold text-[#1B4332] tracking-tighter drop-shadow-sm">
                            Comida sana, rica y natural
                        </h2>
                        <p className="sr-only">Especialistas en comida sin grasa, sin azúcar y sin sal.</p>
                        <p className="text-sm md:text-2xl text-[#1B4332] font-medium tracking-wide bg-amber-50/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 uppercase italic shadow-sm">
                            Carnes magras • <br /> Menú vegetariano • <br /> Estudiantil • Ejecutivo
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
                            href="https://wa.me/5491165878387"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-green-600 border-2 border-green-600 px-10 py-3 rounded-full text-sm font-bold hover:bg-green-50 transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                        >
                            <Image src="/images/whatsapp_icon.svg" alt="WhatsApp" width={20} height={28} />
                            Whatsapp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

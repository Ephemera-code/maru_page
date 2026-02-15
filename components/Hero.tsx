import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="min-h-[90svh] flex items-center justify-center bg-transparent pt-24 pb-12">
            <div className="text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
                {/* Title */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[#1B4332] mb-8 leading-none">
                    <span className="">Sin Sal.</span> <br /> Sin Azucar. <br /> <span className="text-[#C72425]">Sin Grasas.</span>
                </h1>

                {/* Central Image with Red Frame */}
                <div className="relative w-full max-w-4xl px-4">
                    <div className="relative w-full mx-auto bg-white/60 backdrop-blur-md  rounded-3xl overflow-hidden shadow-2xl  ">
                        <Image
                            src="/images/presentacion1.png"
                            alt="Presentación Light Food"
                            width={500}
                            height={500}
                            className="w-full h-auto  object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Paragraph */}
                <p className="text-md md:text-2xl  p-5 font-semibold text-[#4A5D23]  max-w-2xl">
                    Descubre el sabor de cuidarte con nuestros productos frescos y naturales.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="#products"
                        className="bg-[#C72425] text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-[#a61e1f] transition-all hover:scale-105 shadow-lg"
                    >
                        Explorar Menu
                    </a>
                    <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-green-600 border-2 border-green-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-green-50 transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                    >
                        <Image src="/images/whatsapp_icon.svg" alt="WhatsApp" width={28} height={28} />
                        Whatsapp
                    </a>
                </div>
            </div>
        </section>
    );
}

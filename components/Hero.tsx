import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-24 pb-12">
            <div className="text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
                {/* Title */}
                <h1 className="text-[15vw] mt-2 md:text-[8vw] font-extrabold tracking-tighter text-[#3C3F3C] mb-8 leading-none">
                    <span className="">Sin Sal.</span> <br /> Sin Azucar. <br /> <span className="text-[#C72425]">Sin Grasas.</span>
                </h1>

                {/* Central Image with Red Frame */}
                <div className="relative w-screen h-[260px] ">
                    <div className="absolute w-[90vw] h-full left-4.5 inset-0 bg-[#FF7373] rounded-3xl  -z-10  "></div>
                    <div className="relative mt-2 rounded-3xl overflow-hidden shadow-2xl  ">
                        <Image
                            src="/images/presentacion1.png"
                            alt="Presentación Light Food"
                            width={500}
                            height={500}
                            className="w-full h-auto max-w-[430px] md:max-w-[450px] object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Paragraph */}
                <p className="text-xl md:text-2xl mt-5 font-semibold text-[#3C3F3C] mb-5 max-w-2xl">
                    Descubre el sabor de cuidarte con nuestros productos frescos y naturales.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
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

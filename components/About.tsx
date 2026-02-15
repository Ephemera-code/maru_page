import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20  ">
            <div className="w-[90%] mx-auto rounded-lg bg-white p-5 mb-12">
                <div className="relative w-full h-[220px] md:h-[500px] shadow-xl overflow-hidden">
                    <Image
                        src="/images/presentacion1.png"
                        alt="Sobre Nosotros"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
            <div className="w-[90%] rounded-lg bg-white mx-auto p-5 text-center max-w-3xl">
                <h2 className="text-3xl mb-6 font-bold text-[#1B4332]">Sobre Nosotros</h2>
                <p className="text-[#4A5D23] mb-4 leading-relaxed text-sm">
                    En Light Food, nos apasiona la comida que nutre el cuerpo y el alma.
                    Nacimos con la misión de hacer que la alimentación saludable sea accesible, deliciosa y conveniente para todos.
                </p>
                <p className="text-[#4A5D23] leading-relaxed text-sm">
                    Utilizamos solo ingredientes frescos y de la más alta calidad, trabajando de la mano con productores locales
                    para garantizar que cada bocado sea una experiencia única.
                </p>
            </div>
        </section>
    );
}

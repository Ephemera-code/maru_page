import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20  backdrop-blur-sm">
            <div className="w-full mb-12">
                <div className="relative w-full h-[300px] md:h-[600px] shadow-xl overflow-hidden">
                    <Image
                        src="/images/presentacion1.png"
                        alt="Sobre Nosotros"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <h2 className="text-4xl mb-6 font-bold text-[#3C3F3C]">Sobre Nosotros</h2>
                <p className="text-[#3C3F3C] mb-4 leading-relaxed text-lg">
                    En Light Food, nos apasiona la comida que nutre el cuerpo y el alma.
                    Nacimos con la misión de hacer que la alimentación saludable sea accesible, deliciosa y conveniente para todos.
                </p>
                <p className="text-[#3C3F3C] leading-relaxed text-lg">
                    Utilizamos solo ingredientes frescos y de la más alta calidad, trabajando de la mano con productores locales
                    para garantizar que cada bocado sea una experiencia única.
                </p>
            </div>
        </section>
    );
}

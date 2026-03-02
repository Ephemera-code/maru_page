import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-12 bg-[#ccdbb0f8]">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-6">
                        <Image src="/images/logo_final.svg" alt="Logo de Olivia Light Food" width={150} height={50} className="w-auto scale-250 h-12" />
                    </div>

                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-6 text-[#1B4332]">Enlaces</h3>
                    <ul className="space-y-3 text-[#4A5D23] font-semibold">
                        <li><Link href="#home" className="hover:text-green-600 transition-all hover:translate-x-1">Home</Link></li>
                        <li><Link href="#products" className="hover:text-green-600 transition-all hover:translate-x-1">Menu</Link></li>
                        <li><Link href="#about" className="hover:text-green-600 transition-all hover:translate-x-1">Sobre Nosotros</Link></li>
                    </ul>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-6 text-[#1B4332]">Contacto</h3>
                    <ul className="space-y-3 text-[#4A5D23] font-semibold">
                        <li className="flex items-center justify-center md:justify-start gap-2 hover:text-[#C72425] transition-colors cursor-default">
                            <span>Email: Olivialightfastfoodllc@gmail.com</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2 hover:text-[#C72425] transition-colors cursor-default">
                            <span>Tel: +54 9 11 6587-8387</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-200/50 text-center text-[#3C3F3C] font-medium text-sm">
                &copy; {new Date().getFullYear()} Olivia Light Food. Todos los derechos reservados.
            </div>
        </footer>
    );
}

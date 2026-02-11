
import Image from 'next/image';

export default function Background() {
    return (
        <div className="fixed inset-0 -z-50 w-full h-full">
            <Image
                alt="Background"
                src="/images/fondo_page.svg"
                fill
                className="object-cover object-center opacity-100" // Ensure opacity is 100
                priority
            />
            {/* Optional overlay if image is too bright/dark */}
            {/* <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" /> */}
        </div>
    );
}

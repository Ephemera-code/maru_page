
import Image from 'next/image';

export default function Background() {
    return (
        <div
            className="fixed top-[-5lvh] left-0 w-full h-[110lvh] -z-50 overflow-hidden pointer-events-none transform-gpu will-change-transform"
            style={{ backfaceVisibility: 'hidden' }}
        >
            <Image
                alt="Background"
                src="/images/fondo_page.png"
                fill
                className="object-cover object-center opacity-100 w-full h-full"
                priority
                sizes="110vw"
            />
            {/* Optional overlay if image is too bright/dark */}
            {/* <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" /> */}
        </div>
    );
}


import Image from 'next/image';

export default function Background() {
    return (
        <div className="fixed inset-0 -z-50 w-full h-full">
            <Image
                alt="Background"
                src="/images/fondo_page.svg"
                fill
                className="object-cover object-center opacity-100"
                priority
                quality={75} // Slightly reduce quality for SVG if converted, or irrelevant for SVG. 
                // Wait, user has .svg. SVGs don't use 'quality'. 
                // I should check if it's actually an SVG or raster. 
                // list_dir showed `fondo_page.svg` size 1.5MB. That's huge for an SVG.
                // It likely contains embedded raster images.
                // I will treat it as is, but maybe adding `loading="eager"` explicity helper? 
                // `priority` does that.
                // I will leave it as `priority` but maybe add `sizes`.
                sizes="100vw"
            />
            {/* Optional overlay if image is too bright/dark */}
            {/* <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" /> */}
        </div>
    );
}

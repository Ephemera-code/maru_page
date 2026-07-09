"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DesktopNotice() {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPageUrl(window.location.href);
    }
  }, []);

  const qrSrc = pageUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(pageUrl)}`
    : "";

  return (
    <section className="min-h-screen flex items-center justify-center zoom-100 bg-[#1B4332] text-white px-6 py-12">
      <div className="max-w-4xl w-full text-center rounded-3xl border border-white/20 bg-[#173824]/90 p-10 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Esta web está optimizada para móviles
        </h1>
        <p className="mt-4 text-base md:text-xl text-[#E9F1E8] leading-relaxed">
          Escanea este código con tu celular para abrir la misma página en tu teléfono.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          {qrSrc ? (
            <Image
              src={qrSrc}
              alt="QR para abrir la página en el celular"
              width={320}
              height={320}
              className="w-72 h-72 rounded-3xl border border-white/20 bg-white p-2"
            />
          ) : (
            <div className="w-72 h-72 rounded-3xl border border-white/20 bg-white/10 flex items-center justify-center text-sm text-[#A8D5B3]">
              Generando código QR...
            </div>
          )}

          <p className="text-sm md:text-base text-[#A8D5B3] break-all">
            {pageUrl || "Cargando URL..."}
          </p>
        </div>
      </div>
    </section>
  );
}

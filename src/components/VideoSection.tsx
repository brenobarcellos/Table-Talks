import React from 'react';
import { Sparkles, VolumeX } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 bg-[#0F0F0F] border-y border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-[#64DF65]/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#64DF65]/10 border border-[#64DF65]/25 text-[#64DF65] text-xs font-bold uppercase tracking-widest mb-3 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atmósfera y Formato</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F0F0EE]">
            Conoce la experiencia Letmino Table Talks
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#F0F0EE]/70 max-w-2xl mx-auto">
            Descubre cómo se vive un encuentro exclusivo creado para propiciar conversaciones de alto impacto, intercambio de visión estratégica y networking de primer nivel.
          </p>
        </div>

        {/* Video Frame Container */}
        <div className="relative rounded-2xl p-2 sm:p-3 bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl hover:border-[#64DF65]/30 transition">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/40 shadow-inner group">
            <iframe
              src="https://www.youtube.com/embed/uGOjMFs9Hx0?rel=0&modestbranding=1"
              title="Letmino Table Talks - Resumen del evento y experiencia de líderes"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Video Subbar */}
          <div className="mt-3 px-3 py-2 flex flex-wrap items-center justify-between text-xs text-[#F0F0EE]/60 gap-2 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#64DF65]" />
              <span>Vídeo de resumen oficial de ediciones anteriores de Letmino Table Talks</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#F0F0EE]/50">
              <VolumeX className="w-3.5 h-3.5" />
              <span>Haz clic en reproducir para activar audio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { TableTalksLogo } from './TableTalksLogo';
import { Calendar, MapPin, Clock, Users, ArrowRight, ShieldCheck, Plane } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F0F0EE]">
      {/* Background Decorative Radial Gradients & Dot Matrix Motif in subtle light tones */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(100,223,101,0.12),rgba(240,240,238,0))]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#64DF65]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f08_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Main Table Talks Branding & Co-Branding Card on Light Canvas */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-white border border-[#0F0F0F]/10 backdrop-blur-md shadow-sm inline-flex flex-col items-center max-w-2xl w-full">
              <TableTalksLogo size="lg" variant="light" showSubtitle={true} showCoBrand={true} logoVariant="horizontal" />
            </div>

            {/* Solid #64DF65 Pill with black text */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#64DF65] text-[#0F0F0F] text-xs font-bold uppercase tracking-widest mt-2 font-mono shadow-sm">
              <Plane className="w-3.5 h-3.5 text-[#0F0F0F]" />
              <span>Bogotá, Colombia • 17 de septiembre de 2026</span>
            </div>
          </div>

          {/* Main Title - Single H1 tag with solid green background marker highlight behind "talento" */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F0F0F] leading-[1.15]">
            El futuro del{' '}
            <span className="bg-[#64DF65] text-[#0F0F0F] px-2.5 sm:px-3 py-0.5 rounded-lg inline-block mx-1">
              talento
            </span>{' '}
            se decide en conversaciones como esta
          </h1>

          {/* Subtitle / Concept */}
          <p className="text-base sm:text-lg md:text-xl text-[#484848] max-w-3xl mx-auto font-normal leading-relaxed">
            Un encuentro estratégico exclusivo para líderes de Capital Humano, TI y Transformación Digital de las principales empresas de Colombia.
          </p>

          {/* Key Facts Pills Grid */}
          <div className="pt-2 pb-2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#0F0F0F]/10 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-[#484848] text-xs font-bold uppercase tracking-wider mb-1 font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#0F0F0F]" /> Fecha
              </div>
              <div className="text-sm sm:text-base font-bold text-[#0F0F0F] font-mono">
                17 Sep 2026
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#0F0F0F]/10 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-[#484848] text-xs font-bold uppercase tracking-wider mb-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#0F0F0F]" /> Horario
              </div>
              <div className="text-sm sm:text-base font-bold text-[#0F0F0F] font-mono">
                3:00 a 6:15 PM
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#0F0F0F]/10 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-[#484848] text-xs font-bold uppercase tracking-wider mb-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#0F0F0F]" /> Sede
              </div>
              <div className="text-sm sm:text-base font-bold text-[#0F0F0F] leading-tight font-mono">
                Oficinas AWS,<br />Torre Pacific, P. 14
              </div>
            </div>

            {/* Exclusivity Card - Solid #64DF65 background with black text */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#64DF65] shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-[#0F0F0F]/70 text-xs font-bold uppercase tracking-wider mb-1 font-mono">
                <Users className="w-3.5 h-3.5 text-[#0F0F0F]" /> Exclusividad
              </div>
              <div className="text-sm sm:text-base font-bold text-[#0F0F0F] font-mono">
                25-30 decisores
              </div>
            </div>
          </div>

          {/* Primary Action Button (Black #0F0F0F) & Confirmation note */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onCtaClick}
              id="hero-cta-button"
              className="w-full sm:w-auto px-9 py-4 text-base font-bold text-[#F0F0EE] bg-[#0F0F0F] hover:bg-[#262626] rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer group font-mono"
            >
              <span>Solicitar participación</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#484848] bg-white border border-[#0F0F0F]/10 px-5 py-3.5 rounded-full shadow-sm font-mono">
              <ShieldCheck className="w-4 h-4 text-[#0F0F0F] flex-shrink-0" />
              <span>Encuentro por invitación y confirmación de perfil</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

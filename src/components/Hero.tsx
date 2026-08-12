import React from 'react';
import { TableTalksLogo } from './TableTalksLogo';
import { Calendar, MapPin, Clock, Users, ArrowRight, ShieldCheck, Plane } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0B132B]">
      {/* Background Decorative Radial Gradients & Dot Matrix Motif */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,208,132,0.18),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#00D084]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Main Table Talks Branding & Co-Branding Badge */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-[#00D084]/30 backdrop-blur-md shadow-2xl inline-flex flex-col items-center">
              <TableTalksLogo size="lg" showSubtitle={true} showCoBrand={true} />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/20 text-[#00D084] text-xs font-bold uppercase tracking-widest mt-2">
              <Plane className="w-3.5 h-3.5 text-[#00D084]" />
              <span>Bogotá, Colombia • 17 de septiembre de 2026</span>
            </div>
          </div>

          {/* Main Title - Single H1 tag on the page */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Redefiniendo el futuro del <span className="text-[#00D084]">talento</span> y la inteligencia artificial
          </h1>

          {/* Subtitle / Concept */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-normal leading-relaxed">
            Una cena estratégica exclusiva para líderes de Capital Humano, TI y Transformación Digital de las principales empresas de Colombia.
          </p>

          {/* Key Facts Pills Grid */}
          <div className="pt-2 pb-2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[#00D084] text-xs font-bold uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5" /> Fecha
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                17 Sep 2026
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[#00D084] text-xs font-bold uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5" /> Horario
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                After Office (3:00 PM)
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[#00D084] text-xs font-bold uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" /> Sede
              </div>
              <div className="text-sm sm:text-base font-bold text-white leading-tight">
                Oficinas AWS,<br />Bogotá
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-[#00D084]/40 backdrop-blur-sm flex flex-col justify-center bg-[#00D084]/5">
              <div className="flex items-center gap-2 text-[#00D084] text-xs font-bold uppercase tracking-wider mb-1">
                <Users className="w-3.5 h-3.5" /> Exclusividad
              </div>
              <div className="text-sm sm:text-base font-bold text-[#00D084]">
                20-25 decisores
              </div>
            </div>
          </div>

          {/* Primary Action Button & Confirmation note */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onCtaClick}
              id="hero-cta-button"
              className="w-full sm:w-auto px-9 py-4 text-base font-bold text-[#0B132B] bg-[#00D084] hover:bg-[#00B874] rounded-full shadow-xl shadow-[#00D084]/25 hover:shadow-[#00D084]/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Solicitar participación</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-2 text-xs text-white/60 bg-white/5 border border-white/10 px-4 py-3 rounded-full">
              <ShieldCheck className="w-4 h-4 text-[#00D084] flex-shrink-0" />
              <span>Encuentro por invitación y confirmación de perfil</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


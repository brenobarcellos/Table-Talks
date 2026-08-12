import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface ClosingSectionProps {
  onCtaClick: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-[#0B132B] relative border-t border-white/10 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#00D084]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/25 text-[#00D084] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-[#00D084]" />
          <span>Liderando la Evolución Corporativa</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Asegura tu lugar en la conversación que define el futuro del talento
        </h2>

        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Sé parte de un grupo selecto de ejecutivos que están transformando sus organizaciones a través de la cultura de aprendizaje continuo y la inteligencia artificial.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onCtaClick}
            id="closing-cta-button"
            className="w-full sm:w-auto px-9 py-4 text-base font-bold text-[#0B132B] bg-[#00D084] hover:bg-[#00B874] rounded-full shadow-2xl shadow-[#00D084]/30 hover:shadow-[#00D084]/45 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Solicitar participación</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00D084]" /> Confirmación por perfil corporativo
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline-block" />
          <span>Aforo máximo 20-25 asistentes</span>
          <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline-block" />
          <span>Oficina Amazon, Bogotá</span>
        </div>

      </div>
    </section>
  );
};


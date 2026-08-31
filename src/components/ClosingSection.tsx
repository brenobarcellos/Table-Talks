import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface ClosingSectionProps {
  onCtaClick: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-[#F0F0EE] relative border-t border-[#0F0F0F]/10 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#64DF65]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0F0F0F]/10 text-[#0F0F0F] text-xs font-bold uppercase tracking-widest font-mono shadow-sm">
          <Sparkles className="w-4 h-4 text-[#0F0F0F]" />
          <span>Liderando la Evolución Corporativa</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0F0F0F] tracking-tight max-w-3xl mx-auto leading-tight">
          Asegura tu lugar en la conversación que define el futuro del talento
        </h2>

        <p className="text-[#484848] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Sé parte de un grupo selecto de ejecutivos que están transformando sus organizaciones a través de la cultura de aprendizaje continuo y la inteligencia artificial.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onCtaClick}
            id="closing-cta-button"
            className="w-full sm:w-auto px-9 py-4 text-base font-bold text-[#F0F0EE] bg-[#0F0F0F] hover:bg-[#262626] rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer group font-mono"
          >
            <span>Solicitar participación</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#484848] font-mono">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0F0F0F]" /> Confirmación por perfil corporativo
          </span>
          <span className="w-1 h-1 rounded-full bg-[#0F0F0F]/20 hidden sm:inline-block" />
          <span>Aforo máximo 20-25 asistentes</span>
          <span className="w-1 h-1 rounded-full bg-[#0F0F0F]/20 hidden sm:inline-block" />
          <span>AWS Torre Pacific, Piso 14</span>
        </div>

      </div>
    </section>
  );
};

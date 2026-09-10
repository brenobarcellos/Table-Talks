import React from 'react';
import { MessageSquare, Cpu, Network, TrendingUp, ArrowRight } from 'lucide-react';

interface BenefitsSectionProps {
  onCtaClick: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onCtaClick }) => {
  const benefits = [
    {
      icon: MessageSquare,
      title: 'Conversaciones Estratégicas entre Pares C-Suite',
      description:
        'Intercambia visiones y desafíos reales con altos ejecutivos de Recursos Humanos, TI y Transformación Digital de las principales empresas de Colombia.',
    },
    {
      icon: Cpu,
      title: 'Insights sobre IA y Cultura Aumentada',
      description:
        'Conoce de primera mano cómo la inteligencia artificial está redefiniendo la formación y desarrollo de habilidades con la Plataforma de Aprendizaje Digital de Letmino.',
    },
    {
      icon: Network,
      title: 'Networking Cualificado en Entorno Exclusivo',
      description:
        'Conecta en un espacio íntimo con buffet ligero tipo cóctel, diseñado para construir relaciones duraderas de confianza profesional lejos del ruido comercial habitual.',
    },
    {
      icon: TrendingUp,
      title: 'Soluciones Aplicables a la Competitividad Enterprise',
      description:
        'Accede a aprendizajes y enfoques probados para acelerar la madurez digital y el desarrollo de competencias críticas en sectores como banca, retail y servicios.',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-[#0F0F0F] relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#64DF65]/10 border border-[#64DF65]/25 text-[#64DF65] text-xs font-bold uppercase tracking-widest font-mono">
            <span>Valor para Ejecutivos</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F0F0EE] tracking-tight">
            ¿Por qué asistir a Letmino Table Talks Bogotá?
          </h2>
          <p className="text-[#F0F0EE]/70 text-base sm:text-lg">
            Un encuentro pensado para maximizar el valor del tiempo de los ejecutivos más ocupados a través de contenido estratégico y relaciones de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#64DF65]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#64DF65]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#64DF65]/10 border border-[#64DF65]/30 text-[#64DF65] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#64DF65] group-hover:text-[#0F0F0F] transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F0F0EE] mb-3 group-hover:text-[#64DF65] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-[#F0F0EE]/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-bold text-[#64DF65] opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  <span>Espacio exclusivo para decisores</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-[#0F0F0F] bg-[#64DF65] hover:bg-[#4ECA50] rounded-full transition shadow-lg shadow-[#64DF65]/20 cursor-pointer font-mono"
          >
            <span>Solicitar participación</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

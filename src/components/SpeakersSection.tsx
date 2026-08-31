import React from 'react';
import { UserCheck, Clock, Building2, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

interface SpeakersSectionProps {
  onCtaClick: () => void;
}

export const SpeakersSection: React.FC<SpeakersSectionProps> = ({ onCtaClick }) => {
  const confirmedSpeakers = [
    {
      isConfirmed: true,
      name: 'Marco Politi',
      roleTitle: 'GTM EMEA Lead',
      roleCategory: 'Amazon Web Services GTM & Expansion',
      organization: 'Amazon Web Services (AWS)',
      bio: 'Marco cuenta con más de una década impulsando el crecimiento global de compañías de software. En AWS lidera la estrategia de go-to-market e inteligencia artificial para ISVs de alto crecimiento a escala internacional.',
      tag: 'Ponente Confirmado',
    },
    {
      isConfirmed: false,
      name: 'Liderazgo Letmino Executive',
      roleTitle: 'Executive Leadership',
      roleCategory: 'Estrategia de Cultura Aumentada',
      organization: 'Letmino',
      bio: 'Decisiones humanas y cultura de aprendizaje para una organización impulsada por inteligencia artificial en América Latina a través de la Plataforma de Aprendizaje Digital de Letmino.',
      tag: 'Executive Speaker (A confirmar)',
    },
    {
      isConfirmed: false,
      name: 'Panelistas Invitados C-Level',
      roleTitle: 'CHROs, CTOs & VPs Enterprise',
      roleCategory: 'Panel de Decisores Enterprise',
      organization: 'Líderes de RRHH, TI & Digital (Banca, Retail & Servicios)',
      bio: 'Desafíos reales de talento, reskilling corporativo y adopción de tecnología en grandes organizaciones en Colombia.',
      tag: 'Panelistas Invitados (A confirmar)',
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-[#F0F0EE] relative border-y border-[#0F0F0F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0F0F0F]/10 text-[#0F0F0F] text-xs font-bold uppercase tracking-widest font-mono shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-[#0F0F0F]" />
            <span>Panel de Conferencistas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F] tracking-tight">
            Speakers y Panelistas Destacados
          </h2>
          <p className="text-[#484848] text-base sm:text-lg">
            Reuniendo a líderes de opinión de primer nivel de las organizaciones referentes en tecnología, aprendizaje corporativo y gestión humana.
          </p>
        </div>

        {/* Speakers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {confirmedSpeakers.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 shadow-sm bg-white border ${
                item.isConfirmed
                  ? 'border-[#0F0F0F]/20 hover:border-[#0F0F0F] ring-1 ring-[#0F0F0F]/5'
                  : 'border-[#0F0F0F]/10 hover:border-[#0F0F0F]/30'
              }`}
            >
              <div>
                {/* Header tags in a non-overlapping flex container */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0F0F0F]/5 text-[#0F0F0F] border border-[#0F0F0F]/10 font-mono">
                    <Building2 className="w-3.5 h-3.5 text-[#0F0F0F]" />
                    <span>{item.organization}</span>
                  </span>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                      item.isConfirmed
                        ? 'bg-[#64DF65] text-[#0F0F0F] shadow-sm'
                        : 'bg-[#0F0F0F]/5 text-[#484848] border border-[#0F0F0F]/10'
                    }`}
                  >
                    {item.isConfirmed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F0F0F]" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-[#484848]" />
                    )}
                    <span>{item.tag}</span>
                  </span>
                </div>

                <div className="text-xs font-bold text-[#484848] uppercase tracking-wider mb-1 font-mono">
                  {item.roleCategory}
                </div>

                <h3 className="text-2xl font-bold text-[#0F0F0F] mb-1 font-display">
                  {item.name}
                </h3>

                <p className="text-sm font-semibold text-[#0F0F0F] mb-4 font-mono">
                  {item.roleTitle}
                </p>

                <p className="text-[#484848] text-xs sm:text-sm leading-relaxed border-t border-[#0F0F0F]/10 pt-4">
                  {item.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F0F0F]/10 flex items-center justify-between text-xs text-[#484848] font-mono">
                <span className="flex items-center gap-1.5 text-[#0F0F0F] font-medium">
                  <Shield className="w-3.5 h-3.5 text-[#0F0F0F]" />
                  {item.isConfirmed ? 'Ponente Confirmado AWS' : 'Perfil C-Level / Senior Executive'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Banner */}
        <div className="mt-10 p-4 sm:p-6 rounded-2xl bg-white border border-[#0F0F0F]/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0F0F0F]/5 flex items-center justify-center text-[#0F0F0F] flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0F0F0F]">Ponentes de Alto Impacto para Letmino Table Talks</div>
              <p className="text-xs text-[#484848]">
                Acompaña a Marco Politi (AWS) y otros líderes ejecutivos en esta mesa de discusión privada sobre IA y talento.
              </p>
            </div>
          </div>
          <button
            onClick={onCtaClick}
            className="px-5 py-2.5 text-xs font-bold text-[#F0F0EE] bg-[#0F0F0F] hover:bg-[#262626] rounded-full transition shadow-md whitespace-nowrap cursor-pointer font-mono"
          >
            Solicitar participación
          </button>
        </div>

      </div>
    </section>
  );
};

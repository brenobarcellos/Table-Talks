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
      initials: 'MP',
      bio: 'Marco has spent the last 10 years working with software companies that want to go global — helping them scale and grow revenue. Today he focuses on Strategic ISV AI go-to-market and global expansion for high-growth SaaS at Amazon Web Services.',
      tag: 'Ponente Confirmado',
    },
    {
      isConfirmed: false,
      name: 'Liderazgo ODILO Executive',
      roleTitle: 'Executive Leadership',
      roleCategory: 'Estrategia de Cultura Aumentada',
      organization: 'ODILO',
      initials: null,
      bio: 'Decisiones humanas y cultura de aprendizaje para una organización impulsada por inteligencia artificial en América Latina.',
      tag: 'Executive Speaker (A confirmar)',
    },
    {
      isConfirmed: false,
      name: 'Panelistas Invitados C-Level',
      roleTitle: 'CHROs, CTOs & VPs Enterprise',
      roleCategory: 'Panel de Decisores Enterprise',
      organization: 'Líderes de RRHH, TI & Digital (Banca, Retail & Servicios)',
      initials: null,
      bio: 'Desafíos reales de talento, reskilling corporativo y adopción de tecnología en grandes organizaciones en Colombia.',
      tag: 'Panelistas Invitados (A confirmar)',
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-[#0B132B] relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/25 text-[#00D084] text-xs font-bold uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Panel de Conferencistas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Speakers y Panelistas Destacados
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Reuniendo a líderes de opinión de primer nivel de las organizaciones referentes en tecnología, aprendizaje corporativo y gestión humana.
          </p>
        </div>

        {/* Speakers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {confirmedSpeakers.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-xl ${
                item.isConfirmed
                  ? 'bg-gradient-to-b from-white/10 to-white/5 border border-[#00D084]/40 hover:border-[#00D084] shadow-[#00D084]/5'
                  : 'bg-white/5 border border-white/10 hover:border-[#00D084]/40'
              }`}
            >
              {/* Subtle Status Ribbon */}
              <div
                className={`absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                  item.isConfirmed
                    ? 'bg-[#00D084]/15 border border-[#00D084]/40 text-[#00D084] font-bold'
                    : 'bg-black/40 border border-white/15 text-white/60'
                }`}
              >
                {item.isConfirmed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D084]" />
                ) : (
                  <Clock className="w-3.5 h-3.5 text-white/50" />
                )}
                <span>{item.tag}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00D084]/15 text-[#00D084] border border-[#00D084]/30">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{item.organization}</span>
                  </span>
                </div>

                <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">
                  {item.roleCategory}
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {item.name}
                </h3>

                <p className="text-sm font-semibold text-[#00D084] mb-4">
                  {item.roleTitle}
                </p>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-4">
                  {item.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span className="flex items-center gap-1.5 text-white/80 font-medium">
                  <Shield className="w-3.5 h-3.5 text-[#00D084]" />
                  {item.isConfirmed ? 'Ponente Confirmado AWS' : 'Perfil C-Level / Senior Executive'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Banner */}
        <div className="mt-10 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto backdrop-blur-md hover:border-[#00D084]/30 transition">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00D084]/10 border border-[#00D084]/30 flex items-center justify-center text-[#00D084] flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Ponentes de Alto Impacto para ODILO Table Talks</div>
              <p className="text-xs text-white/70">
                Acompaña a Marco Politi (AWS) y otros líderes ejecutivos en esta mesa de discusión privada sobre IA y talento.
              </p>
            </div>
          </div>
          <button
            onClick={onCtaClick}
            className="px-5 py-2.5 text-xs font-bold text-[#0B132B] bg-[#00D084] hover:bg-[#00B874] rounded-full transition shadow-md whitespace-nowrap cursor-pointer"
          >
            Solicitar participación
          </button>
        </div>

      </div>
    </section>
  );
};


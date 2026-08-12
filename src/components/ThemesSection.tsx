import React from 'react';
import { Cpu, Users2, Brain, Sparkles, Layers } from 'lucide-react';

export const ThemesSection: React.FC = () => {
  const themes = [
    {
      number: '01',
      icon: Cpu,
      title: 'El futuro de la IA en el sector de la educación y la formación',
      speaker: 'Conferencia impartida por AWS',
      description:
        'Un recorrido estratégico por el impacto transformador de la Inteligencia Artificial en los modelos de formación empresarial, acelerando el aprendizaje técnico y directivo.',
      badge: 'Keynote AWS',
    },
    {
      number: '02',
      icon: Brain,
      title: 'Cultura aumentada: decisiones humanas para una organización impulsada por IA',
      speaker: 'Presentación ejecutiva ODILO',
      description:
        'Exploración de la convergencia entre tecnología inteligente y liderazgo humano. Cómo utilizar la IA para potenciar la toma de decisiones y personalizar el desarrollo profesional.',
      badge: 'Estrategia ODILO',
    },
    {
      number: '03',
      icon: Layers,
      title: 'Competencias estratégicas y competitividad corporativa',
      speaker: 'Panel interactivo C-Level',
      description:
        'Debate abierto con la audiencia sobre los retos de capacitar a la fuerza laboral en competencias de alto impacto dentro de los sectores de banca, retail y servicios.',
      badge: 'Mesa Redonda',
    },
    {
      number: '04',
      icon: Users2,
      title: 'Networking cualificado y sinergias entre HR & IT',
      speaker: 'Cóctel & Cena de gala',
      description:
        'La alineación entre las áreas de Gestión Humana y Tecnología como motor fundamental de la transformación digital sostenible en las corporaciones colombianas.',
      badge: 'Cena Exclusiva',
    },
  ];

  return (
    <section id="ejes-tematicos" className="py-20 bg-[#0B132B] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#00D084]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/25 text-[#00D084] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agenda de Discusión</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ejes temáticos y contenidos estratégicos
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Un temario meticulosamente estructurado para abordar las preguntas prioritarias de la agenda ejecutiva actual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {themes.map((theme) => {
            const IconComp = theme.icon;
            return (
              <div
                key={theme.number}
                className="relative rounded-2xl p-6 sm:p-8 bg-white/5 border border-white/10 hover:border-[#00D084]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#00D084]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-extrabold text-[#00D084]/30 group-hover:text-[#00D084] transition-colors">
                      {theme.number}
                    </span>
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#00D084]/10 text-[#00D084] border border-[#00D084]/25">
                      {theme.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-[#00D084]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
                      {theme.speaker}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D084] transition-colors">
                    {theme.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>Sede: Oficina Amazon Bogotá</span>
                  <span className="text-[#00D084] font-bold">C-Level Dialogue</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


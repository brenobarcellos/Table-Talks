import React from 'react';
import { Cpu, Users2, Brain, Sparkles, Layers } from 'lucide-react';

export const ThemesSection: React.FC = () => {
  const themes = [
    {
      number: '01',
      icon: Cpu,
      title: 'El futuro de la IA en el sector de la educación y la formación',
      speaker: 'Conferencia magistral por AWS',
      description:
        'Un recorrido estratégico por el impacto transformador de la Inteligencia Artificial en los modelos de formación empresarial, acelerando el aprendizaje técnico y directivo.',
      badge: 'Keynote AWS',
    },
    {
      number: '02',
      icon: Brain,
      title: 'Cultura aumentada: decisiones humanas para una organización impulsada por IA',
      speaker: 'Presentación ejecutiva Letmino',
      description:
        'Exploración de la convergencia entre tecnología inteligente y liderazgo humano. Cómo utilizar la IA para potenciar la toma de decisiones y acelerar el desarrollo profesional con la Plataforma de Aprendizaje Digital de Letmino.',
      badge: 'Estrategia Letmino',
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
      speaker: 'Cóctel & Networking Ejecutivo',
      description:
        'La alineación entre las áreas de Gestión Humana y Tecnología como motor fundamental de la transformación digital sostenible en las corporaciones colombianas, en un entorno de networking cualificado.',
      badge: 'Networking C-Level',
    },
  ];

  return (
    <section id="ejes-tematicos" className="py-20 bg-[#F0F0EE] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#64DF65]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0F0F0F]/10 text-[#0F0F0F] text-xs font-bold uppercase tracking-widest font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0F0F0F]" />
            <span>Agenda de Discusión</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F] tracking-tight">
            Ejes temáticos y contenidos estratégicos
          </h2>
          <p className="text-[#484848] text-base sm:text-lg">
            Un temario meticulosamente estructurado para abordar las preguntas prioritarias de la agenda ejecutiva actual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {themes.map((theme) => {
            const IconComp = theme.icon;
            return (
              <div
                key={theme.number}
                className="relative rounded-2xl p-6 sm:p-8 bg-white border border-[#0F0F0F]/10 hover:border-[#0F0F0F]/30 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-extrabold text-[#0F0F0F]/20 font-mono">
                      {theme.number}
                    </span>
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#0F0F0F]/5 text-[#0F0F0F] border border-[#0F0F0F]/10 font-mono">
                      {theme.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0F0F0F]/5 flex items-center justify-center text-[#0F0F0F]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#484848] uppercase tracking-wider font-mono">
                      {theme.speaker}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F0F0F] mb-3">
                    {theme.title}
                  </h3>

                  <p className="text-[#484848] text-sm leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0F0F0F]/10 flex items-center justify-between text-xs text-[#484848] font-mono">
                  <span>Sede: AWS Torre Pacific, Piso 14</span>
                  <span className="text-[#0F0F0F] font-bold">C-Level Dialogue</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

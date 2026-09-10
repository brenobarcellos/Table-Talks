import React from 'react';
import { Clock, CalendarCheck, Sparkles, MapPin, Building2, User } from 'lucide-react';

export const AgendaSection: React.FC = () => {
  const agendaItems = [
    {
      time: '3:00 – 3:30 p. m.',
      title: 'Recepción y buffet ligero tipo cóctel',
      description: 'Llegada y acreditación de los ejecutivos con servicio concentrado de pasabocas y bebidas para iniciar el networking.',
      tag: 'Recepción & Cóctel',
      icon: Clock,
    },
    {
      time: '3:30 – 3:45 p. m.',
      title: 'Apertura y bienvenida oficial',
      description: 'Introducción al concepto Letmino Table Talks Bogotá y propósito del encuentro, con servicio discreto de pasabocas.',
      tag: 'Bienvenida',
      icon: CalendarCheck,
    },
    {
      time: '3:45 – 4:30 p. m.',
      title: 'Conferencia AWS: El futuro de la IA en la formación corporativa',
      description: 'Keynote magistral a cargo de Marco Politi (AWS) sobre tecnologías emergentes e IA, con estación fija de bebidas y pasabocas disponible.',
      tag: 'Conferencia AWS',
      icon: Sparkles,
      highlight: true,
    },
    {
      time: '4:30 – 4:45 p. m.',
      title: 'Letmino: Cultura aumentada, decisiones humanas para una organización con IA',
      description: 'Presentación ejecutiva sobre aceleración tecnológica y reskilling continuo con la Plataforma de Aprendizaje Digital de Letmino.',
      tag: 'Letmino Insight',
      icon: Building2,
      highlight: true,
    },
    {
      time: '4:45 – 6:00 p. m.',
      title: 'Panel C-Level: Desafíos de talento e IA en Colombia',
      description: 'Mesa redonda interactiva con Pilar Marulanda Sánchez (Cenit - Grupo Ecopetrol) y María del Pilar Carrasquilla Valbuena (Hamburguesas El Corral - Grupo Nutresa).',
      tag: 'Panel C-Level Confirmado',
      icon: User,
      highlight: true,
    },
    {
      time: '6:00 – 6:15 p. m.',
      title: 'Cóctel de Cierre & Networking Ejecutivo',
      description: 'Conversaciones finales alrededor de la estación de cóctel y pasabocas, junto a la fotografía institucional de cierre.',
      tag: 'Networking',
      icon: Clock,
      highlight: true,
    },
  ];

  return (
    <section id="agenda" className="py-20 bg-[#F0F0EE] relative border-y border-[#0F0F0F]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0F0F0F]/10 text-[#0F0F0F] text-xs font-bold uppercase tracking-widest font-mono shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#0F0F0F]" />
            <span>Cronograma del Encuentro</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F] tracking-tight">
            Agenda preliminar
          </h2>
          <p className="text-[#484848] text-base sm:text-lg font-mono">
            Jueves 17 de septiembre de 2026 • After office en AWS Torre Pacific, Piso 14
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-[#0F0F0F]/10 ml-4 sm:ml-32 space-y-8">
          {agendaItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative pl-6 sm:pl-8 group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    item.highlight
                      ? 'bg-[#64DF65] border-[#0F0F0F]/20 text-[#0F0F0F] shadow-sm'
                      : 'bg-white border-[#0F0F0F]/20 text-[#0F0F0F]'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Time Badge (Desktop Absolute Left) */}
                <div className="hidden sm:block absolute -left-36 top-2 w-28 text-right font-mono text-xs font-bold text-[#0F0F0F]">
                  {item.time}
                </div>

                {/* Agenda Card */}
                <div
                  className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 bg-white border shadow-sm ${
                    item.highlight
                      ? 'border-[#0F0F0F]/20 ring-1 ring-[#0F0F0F]/5'
                      : 'border-[#0F0F0F]/10 opacity-95'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="sm:hidden font-mono text-xs font-bold text-[#0F0F0F] bg-[#0F0F0F]/5 px-2.5 py-1 rounded">
                      {item.time}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#0F0F0F]/5 text-[#0F0F0F] border border-[#0F0F0F]/10 font-mono">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F0F0F] mb-2 font-display">
                    {item.title}
                  </h3>

                  <p className="text-[#484848] text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-4 rounded-xl bg-white border border-[#0F0F0F]/10 text-center text-xs text-[#484848] flex items-center justify-center gap-2 shadow-sm font-mono">
          <MapPin className="w-4 h-4 text-[#0F0F0F] flex-shrink-0" />
          <span>Agenda sujeta a confirmaciones finales junto con el tema oficial del encuentro.</span>
        </div>

      </div>
    </section>
  );
};

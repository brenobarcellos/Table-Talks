import React from 'react';
import { Clock, CalendarCheck, Sparkles, MapPin, Building2, User } from 'lucide-react';

export const AgendaSection: React.FC = () => {
  const agendaItems = [
    {
      time: '3:00 – 3:30 p. m.',
      title: 'Recibimiento y cóctel de bienvenida',
      description: 'Llegada de los ejecutivos, acreditación y cóctel informal para dar inicio al networking.',
      tag: 'Recepción',
      icon: Clock,
    },
    {
      time: '3:30 – 3:45 p. m.',
      title: 'Apertura y bienvenida oficial',
      description: 'Introducción al concepto ODILO Table Talks Bogotá y presentación del propósito del encuentro.',
      tag: 'Bienvenida',
      icon: CalendarCheck,
    },
    {
      time: '3:45 – 4:30 p. m.',
      title: 'Conferencia AWS: El futuro de la IA en el sector de la educación y la formación',
      description: 'Keynote magistral a cargo de expertos de Amazon Web Services sobre tecnologías emergentes e inteligencia artificial.',
      tag: 'Conferencia AWS',
      icon: Sparkles,
      highlight: true,
    },
    {
      time: '4:30 – 4:45 p. m.',
      title: 'ODILO: Cultura aumentada, decisiones humanas para una organización impulsada por IA',
      description: 'Presentación sobre el equilibrio entre la aceleración tecnológica y el desarrollo del talento humano.',
      tag: 'ODILO Insight',
      icon: Building2,
      highlight: true,
    },
    {
      time: '4:45 – 6:00 p. m.',
      title: 'Panel: Conversación con panelistas y audiencia',
      description: 'Mesa redonda participativa entre los ponentes invitados y los líderes asistentes sobre retos reales en Colombia.',
      tag: 'Panel C-Level',
      icon: User,
      highlight: true,
    },
    {
      time: '6:00 – 6:15 p. m.',
      title: 'Foto grupal y cierre del evento',
      description: 'Fotografía institucional de los líderes participantes y despedida formal del encuentro.',
      tag: 'Cierre',
      icon: Clock,
    },
  ];

  return (
    <section id="agenda" className="py-20 bg-[#0B132B] relative border-y border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/25 text-[#00D084] text-xs font-bold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5" />
            <span>Cronograma del Encuentro</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Agenda preliminar
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Jueves 17 de septiembre de 2026 • After office en Sede AWS - Bogotá
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-8">
          {agendaItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative pl-6 sm:pl-8 group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    item.highlight
                      ? 'bg-[#0B132B] border-[#00D084] text-[#00D084] group-hover:scale-110 group-hover:bg-[#00D084] group-hover:text-[#0B132B]'
                      : 'bg-[#0B132B] border-white/20 text-white/40 group-hover:border-[#00D084]/50'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Time Badge (Desktop Absolute Left) */}
                <div className="hidden sm:block absolute -left-36 top-2 w-28 text-right font-mono text-xs font-bold text-[#00D084]">
                  {item.time}
                </div>

                {/* Agenda Card */}
                <div
                  className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                    item.highlight
                      ? 'bg-white/5 border border-white/10 hover:border-[#00D084]/40 shadow-lg'
                      : 'bg-white/5 border border-white/10 opacity-90'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="sm:hidden font-mono text-xs font-bold text-[#00D084] bg-black/40 px-2.5 py-1 rounded">
                      {item.time}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#00D084]/10 text-[#00D084] border border-[#00D084]/25">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D084] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-4 rounded-xl bg-white/5 border border-white/10 text-center text-xs text-white/60 flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4 text-[#00D084] flex-shrink-0" />
          <span>Agenda sujeta a confirmaciones finales junto con el tema oficial del encuentro.</span>
        </div>

      </div>
    </section>
  );
};


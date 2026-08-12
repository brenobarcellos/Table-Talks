import React from 'react';
import { Target, Lightbulb, Users, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-el-encuentro" className="py-20 bg-[#0B132B] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D084]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/25 text-[#00D084] text-xs font-bold uppercase tracking-widest">
              <span>Concepto y Propósito</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Un espacio estratégico diseñado para líderes que transforman organizaciones
            </h2>

            <div className="space-y-4 text-white/70 text-base leading-relaxed">
              <p>
                <strong className="text-white font-semibold">ODILO Table Talks Colombia</strong> es un encuentro exclusivo de alto nivel creado para reunir a decisores de Capital Humano, Tecnología y Transformación Digital de las principales corporaciones del país.
              </p>
              <p>
                En un entorno caracterizado por la rápida aceleración tecnológica y la irrupción de la inteligencia artificial, las organizaciones enfrentan el desafío crítico de evolucionar sus modelos de desarrollo de talento y capacidades estratégicas.
              </p>
              <p>
                A través de un formato de cena exclusiva de cupos limitados, el evento ofrece una plataforma íntima para debatir soluciones reales, compartir aprendizajes sobre cultura de aprendizaje continuo y discutir cómo potenciar la competitividad de las empresas en Colombia.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-[#00D084]/30 transition">
                <Target className="w-5 h-5 text-[#00D084] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-white">Enfoque C-Level</h3>
                  <p className="text-xs text-white/60 mt-1">
                    Dirigido a CHROs, CTOs, CIOs y VP de empresas medianas y grandes en sectores clave como banca, retail y servicios.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-[#00D084]/30 transition">
                <Lightbulb className="w-5 h-5 text-[#00D084] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-white">Visión Práctica e IA</h3>
                  <p className="text-xs text-white/60 mt-1">
                    Análisis de casos de uso reales de IA aplicada a la educación corporativa y decisiones organizacionales impulsadas por datos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards / Visual Block + Video */}
          <div className="lg:col-span-5 relative space-y-6">
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-2xl relative space-y-5 backdrop-blur-md">
              
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#00D084]/10 border border-[#00D084]/30 flex items-center justify-center text-[#00D084]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#00D084] uppercase tracking-wider">Formato Exclusivo</div>
                  <div className="text-lg font-bold text-white">Cena de Gala & Mesa Redonda</div>
                </div>
              </div>

              {/* Embedded Video */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-inner group">
                <iframe
                  src="https://www.youtube.com/embed/8mOUqnPHboc?rel=0&modestbranding=1"
                  title="ODILO Table Talks - Resumen del evento y experiencia de líderes"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="space-y-3 pt-1 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-white/60">Cupos totales</span>
                  <span className="font-bold text-[#00D084]">20 a 25 ejecutivos</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-white/60">Sede oficial</span>
                  <span className="font-semibold text-white">Sede AWS, Bogotá</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-white/60">Ambiente</span>
                  <span className="font-semibold text-[#00D084]">Chatham House / Privado</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#00D084]/10 border border-[#00D084]/30 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#00D084] flex-shrink-0" />
                <p className="text-[11px] text-white/80 leading-snug">
                  Garantizamos una convocatoria filtrada para asegurar discusiones de alto valor entre pares C-Suite.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { Target, Lightbulb, Users, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-el-encuentro" className="py-20 bg-[#F0F0EE] relative overflow-hidden">
      {/* Decorative subtle light glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#64DF65]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0F0F0F]/10 text-[#0F0F0F] text-xs font-bold uppercase tracking-widest font-mono shadow-sm">
              <span>Concepto y Propósito</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F] tracking-tight leading-tight">
              Un espacio estratégico diseñado para líderes que transforman organizaciones
            </h2>

            <div className="space-y-3 text-[#484848] text-base leading-relaxed">
              <p>
                <strong className="text-[#0F0F0F] font-semibold">Letmino Table Talks Colombia</strong> es un encuentro exclusivo para decisores de Capital Humano, TI y Transformación Digital de las principales corporaciones del país.
              </p>
              <p>
                En un formato íntimo con cupos limitados, debatiremos soluciones reales para acelerar el desarrollo del talento, la cultura de aprendizaje continuo y el impacto de la IA estratégica en las organizaciones.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#0F0F0F]/10 flex items-start gap-3 shadow-sm">
                <Target className="w-5 h-5 text-[#0F0F0F] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F0F0F]">Enfoque C-Level</h3>
                  <p className="text-xs text-[#484848] mt-1">
                    Dirigido a CHROs, CTOs, CIOs y VP de empresas medianas y grandes en sectores clave como banca, retail y servicios.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#0F0F0F]/10 flex items-start gap-3 shadow-sm">
                <Lightbulb className="w-5 h-5 text-[#0F0F0F] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F0F0F]">Visión Práctica e IA</h3>
                  <p className="text-xs text-[#484848] mt-1">
                    Análisis de casos de uso reales de IA aplicada a la formación corporativa y decisiones organizacionales impulsadas por datos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards / Visual Block + Video */}
          <div className="lg:col-span-5 relative space-y-6">
            <div className="rounded-2xl p-6 bg-white border border-[#0F0F0F]/10 shadow-sm relative space-y-5">
              
              <div className="flex items-center gap-3 pb-4 border-b border-[#0F0F0F]/10">
                <div className="w-10 h-10 rounded-xl bg-[#0F0F0F]/5 flex items-center justify-center text-[#0F0F0F]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#484848] uppercase tracking-wider font-mono">Formato Exclusivo</div>
                  <div className="text-lg font-bold text-[#0F0F0F]">Buffet Ligero Tipo Cóctel & Mesa Redonda</div>
                </div>
              </div>

              {/* Embedded Video */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/5 border border-[#0F0F0F]/10 shadow-inner group">
                <iframe
                  src="https://www.youtube.com/embed/uGOjMFs9Hx0?rel=0&modestbranding=1"
                  title="Letmino Table Talks - Resumen del evento y experiencia de líderes"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="space-y-3 pt-1 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-[#0F0F0F]/10">
                  <span className="text-[#484848]">Cupos totales</span>
                  <span className="font-bold text-[#0F0F0F] font-mono">25 a 30 ejecutivos</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#0F0F0F]/10">
                  <span className="text-[#484848]">Sede oficial</span>
                  <span className="font-semibold text-[#0F0F0F]">AWS Torre Pacific, Piso 14</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#484848]">Ambiente</span>
                  <span className="font-semibold text-[#0F0F0F]">Regla Chatham House / Privado</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F0F0EE] border border-[#0F0F0F]/10 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0F0F0F] flex-shrink-0" />
                <p className="text-[11px] text-[#484848] leading-snug">
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

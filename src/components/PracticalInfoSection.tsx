import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink, ShieldAlert, Building, Compass } from 'lucide-react';

export const PracticalInfoSection: React.FC = () => {
  const mapsUrl = 'https://maps.google.com/?q=Calle+110+%23+9+-15+Bogota+Colombia';

  return (
    <section id="informacion-practica" className="py-20 bg-[#0B132B] relative overflow-hidden border-t border-b border-[#00D084]/20">
      {/* Glow highlight */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#00D084]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/25 text-[#00D084] text-xs font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4 text-[#00D084]" />
            <span>Coordenadas del Encuentro Executivo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Información práctica y localización
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Detalles clave para planificar tu participación en ODILO Table Talks Bogotá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D084]/40 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#00D084]/10 border border-[#00D084]/30 text-[#00D084] flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#00D084] uppercase tracking-wider mb-1">Fecha confirmada</div>
                <div className="text-xl font-bold text-white">Jueves 17 de septiembre de 2026</div>
              </div>
              <p className="text-xs text-white/50 mt-4 border-t border-white/10 pt-3">
                Identificador: TT1709 • Colombia Corporate
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D084]/40 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#00D084]/10 border border-[#00D084]/30 text-[#00D084] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#00D084] uppercase tracking-wider mb-1">Horario</div>
                <div className="text-xl font-bold text-white">After office (3:00 - 6:15 PM)</div>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  Acreditación desde las 3:00 p. m. seguido de keynote, panel y cena.
                </p>
              </div>
              <p className="text-xs text-white/50 mt-4 border-t border-white/10 pt-3">
                Formato: Cóctel de bienvenida, Debate C-Level y Cena
              </p>
            </div>

            <div className="sm:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D084]/40 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#00D084]/10 border border-[#00D084]/30 text-[#00D084] flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#00D084] uppercase tracking-wider mb-1">Ubicación y Sede Anfitriona</div>
                <div className="text-2xl font-bold text-white">Sede Corporativa AWS - Bogotá</div>
                <p className="text-sm text-white/80 mt-1">
                  Calle 110 # 9 - 15, Bogotá, Cundinamarca, Colombia
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#0B132B] bg-[#00D084] hover:bg-[#00B874] rounded-xl transition cursor-pointer shadow-lg shadow-[#00D084]/20"
                >
                  <span>Abrir ubicación en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <ShieldAlert className="w-4 h-4 text-[#00D084]" />
                  <span>Acceso exclusivo por lista corporativa preconfirmada</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual / Address Card */}
          <div className="lg:col-span-5 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative flex flex-col justify-between p-6 sm:p-8 min-h-[320px] backdrop-blur-md">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,208,132,0.12),transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#00D084]/15 text-[#00D084] border border-[#00D084]/30 mb-3">
                  <Building className="w-3.5 h-3.5 text-[#00D084]" />
                  <span>Sede de Innovación</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Instalaciones de Primer Nivel en Bogotá
              </h3>
              <p className="text-sm text-white/70 leading-relaxed pt-1">
                Ubicadas en el corazón del distrito empresarial de Bogotá, las oficinas de AWS brindan el espacio idóneo para conversaciones privadas de alto nivel directivo.
              </p>
            </div>

            <div className="relative z-10 mt-8 p-5 rounded-xl bg-[#0A1128]/80 border border-white/10">
              <div className="text-xs font-bold text-[#00D084] uppercase tracking-wider mb-1.5">Atención al Invitado</div>
              <p className="text-xs text-white/70 leading-relaxed">
                Si necesitas ayuda con parqueadero o confirmación de acompañante C-Level, contáctanos a través de tu Key Account Manager.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


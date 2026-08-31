import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink, ShieldAlert, Building, Compass } from 'lucide-react';

export const PracticalInfoSection: React.FC = () => {
  const mapsUrl = 'https://maps.google.com/?q=Torre+Empresarial+Pacific+Cl.+110+%23+9-25+Bogota+Colombia';

  return (
    <section id="informacion-practica" className="py-20 bg-[#F0F0EE] relative overflow-hidden border-t border-b border-[#0F0F0F]/10">
      {/* Subtle light glow highlight */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#64DF65]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0F0F0F]/10 text-[#0F0F0F] text-xs font-bold uppercase tracking-widest font-mono shadow-sm">
            <Compass className="w-4 h-4 text-[#0F0F0F]" />
            <span>Coordenadas del Encuentro Ejecutivo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F0F0F] tracking-tight">
            Información práctica y localización
          </h2>
          <p className="text-[#484848] text-base sm:text-lg">
            Detalles clave para planificar tu participación en Letmino Table Talks Bogotá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-6 rounded-2xl bg-white border border-[#0F0F0F]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0F0F0F]/5 text-[#0F0F0F] flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#484848] uppercase tracking-wider mb-1 font-mono">Fecha confirmada</div>
                <div className="text-xl font-bold text-[#0F0F0F]">Jueves 17 de septiembre de 2026</div>
              </div>
              <p className="text-xs text-[#484848] mt-4 border-t border-[#0F0F0F]/10 pt-3 font-mono">
                Identificador: TT1709 • Colombia Corporate
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#0F0F0F]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0F0F0F]/5 text-[#0F0F0F] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#484848] uppercase tracking-wider mb-1 font-mono">Horario</div>
                <div className="text-xl font-bold text-[#0F0F0F]">After office (3:00 - 6:15 PM)</div>
                <p className="text-xs text-[#484848] mt-1 leading-relaxed">
                  Acreditación desde las 3:00 p. m. seguido de keynote, panel y cena.
                </p>
              </div>
              <p className="text-xs text-[#484848] mt-4 border-t border-[#0F0F0F]/10 pt-3 font-mono">
                Formato: Cóctel de bienvenida, Debate C-Level y Cena
              </p>
            </div>

            <div className="sm:col-span-2 p-6 rounded-2xl bg-white border border-[#0F0F0F]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0F0F0F]/5 text-[#0F0F0F] flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#484848] uppercase tracking-wider mb-1 font-mono">Ubicación y Sede Anfitriona</div>
                <div className="text-2xl font-bold text-[#0F0F0F]">Oficinas AWS - Torre Empresarial Pacific</div>
                <p className="text-sm text-[#484848] mt-1 font-mono">
                  Calle 110 # 9-25, Piso 14, Bogotá, Colombia
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0F0F0F]/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#F0F0EE] bg-[#0F0F0F] hover:bg-[#262626] rounded-xl transition cursor-pointer shadow-md font-mono"
                >
                  <span>Abrir ubicación en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-1.5 text-xs text-[#484848] font-mono">
                  <ShieldAlert className="w-4 h-4 text-[#0F0F0F]" />
                  <span>Acceso exclusivo Piso 14 con documento de identidad</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual / Address Card */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-[#0F0F0F]/10 overflow-hidden relative flex flex-col justify-between p-6 sm:p-8 min-h-[320px] shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,223,101,0.08),transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0F0F0F]/5 text-[#0F0F0F] border border-[#0F0F0F]/10 mb-3 font-mono">
                  <Building className="w-3.5 h-3.5 text-[#0F0F0F]" />
                  <span>Sede de Innovación AWS</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F0F0F] font-display">
                Torre Empresarial Pacific, Piso 14
              </h3>
              <p className="text-sm text-[#484848] leading-relaxed pt-1">
                Ubicadas en una de las zonas corporativas y financieras más exclusivas del norte de Bogotá (Cl. 110 #9-25), las instalaciones de AWS ofrecen un entorno de primer nivel diseñado para el diálogo estratégico entre líderes C-Level.
              </p>
            </div>

            <div className="relative z-10 mt-8 p-5 rounded-xl bg-[#F0F0EE] border border-[#0F0F0F]/10">
              <div className="text-xs font-bold text-[#0F0F0F] uppercase tracking-wider mb-1.5 font-mono">Atención al Invitado & Acceso</div>
              <p className="text-xs text-[#484848] leading-relaxed">
                El ingreso al Piso 14 está restringido a la lista de asistentes confirmados. Se dispondrá de servicio de parqueadero en la Torre Pacific.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

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

        {/* Information Cards - Centered & Clean */}
        <div className="max-w-4xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            
          <div className="p-6 rounded-2xl bg-white border border-[#0F0F0F]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0F0F0F]/5 text-[#0F0F0F] flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-[#484848] uppercase tracking-wider mb-1 font-mono">Fecha</div>
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
              <div className="text-xl font-bold text-[#0F0F0F]">3:00 a 6:15 p. m.</div>
              <p className="text-xs text-[#484848] mt-1 leading-relaxed">
                Recepción y pasabocas desde las 3:00 p. m., seguido de apertura oficial, conferencias, panel C-Level y cóctel de networking.
              </p>
            </div>
            <p className="text-xs text-[#484848] mt-4 border-t border-[#0F0F0F]/10 pt-3 font-mono">
              Formato: Buffet ligero tipo cóctel, Keynote AWS, Panel y Networking
            </p>
          </div>

          <div className="sm:col-span-2 p-6 sm:p-7 rounded-2xl bg-white border border-[#0F0F0F]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0F0F0F]/5 text-[#0F0F0F] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-[#484848] uppercase tracking-wider mb-1 font-mono">Ubicación y Sede Anfitriona</div>
              <div className="text-2xl font-bold text-[#0F0F0F]">Oficinas AWS — Torre Empresarial Pacific</div>
              <p className="text-sm text-[#484848] mt-1 font-mono">
                Calle 110 # 9-25, Piso 14, Bogotá, Colombia
              </p>
            </div>

            {/* Buffet details note */}
            <div className="mt-4 p-3.5 rounded-xl bg-[#F0F0EE] border border-[#0F0F0F]/10 text-xs text-[#484848] leading-relaxed">
              <strong className="text-[#0F0F0F]">Formato gastronómico:</strong> Evento vespertino con buffet ligero tipo cóctel. Recepción y pasabocas concentrados entre 3:00 y 3:30 p. m., servicio discreto durante la apertura (hasta las 3:45 p. m.), y estación fija de bebidas y pasabocas en la parte posterior de la sala durante las conferencias y el panel.
            </div>

            <div className="mt-5 pt-4 border-t border-[#0F0F0F]/10 flex flex-wrap items-center justify-between gap-3">
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

      </div>
    </section>
  );
};

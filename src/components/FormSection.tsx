import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Sparkles, CheckCircle, Info, Lock } from 'lucide-react';

export const FormSection: React.FC = () => {
  const formUrl = 'https://share-eu1.hsforms.com/1jGgwSsFFTUK9FbEg9Ul24Q2fia4p';
  const [iframeError, setIframeError] = useState(false);

  return (
    <section id="solicitar-participacion" className="py-20 bg-[#F0F0EE] relative overflow-hidden">
      {/* Subtle Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#64DF65]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0F0F0F]/10 text-[#0F0F0F] text-xs font-bold uppercase tracking-widest font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0F0F0F]" />
            <span>Registro y Solicitud de Plaza</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0F0F0F] tracking-tight">
            Solicitar participación
          </h2>
          <p className="text-[#484848] text-base sm:text-lg">
            Completa el siguiente formulario corporativo para enviar tu solicitud de plaza para la cena exclusiva en Bogotá.
          </p>
        </div>

        {/* Embedded Form Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white border border-[#0F0F0F]/10 shadow-sm relative">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-[#0F0F0F]/10 text-xs sm:text-sm text-[#484848]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0F0F0F] flex-shrink-0" />
              <span><strong className="text-[#0F0F0F]">Encuentro Exclusivo:</strong> Cupos estrictamente limitados a 20-25 decisores C-Level.</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#484848] font-mono">
              <Lock className="w-4 h-4 text-[#0F0F0F]" />
              <span>Conexión cifrada de alta seguridad</span>
            </div>
          </div>

          {/* Form Container / Iframe */}
          <div className="relative min-h-[580px] w-full rounded-2xl bg-[#F0F0EE]/40 border border-[#0F0F0F]/10 overflow-hidden flex flex-col justify-center">
            
            {!iframeError ? (
              <iframe
                src={formUrl}
                title="Formulario de Solicitud de Participación Letmino Table Talks"
                className="w-full h-[620px] border-0 rounded-2xl"
                loading="lazy"
                onError={() => setIframeError(true)}
              />
            ) : (
              <div className="p-8 text-center space-y-4">
                <Info className="w-12 h-12 text-[#0F0F0F] mx-auto" />
                <h3 className="text-xl font-bold text-[#0F0F0F]">Acceso al Formulario Oficial de HubSpot</h3>
                <p className="text-[#484848] text-sm max-w-md mx-auto">
                  Por razones de seguridad del navegador, puedes abrir el formulario seguro de inscripción en un nuevo panel.
                </p>
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-[#F0F0EE] bg-[#0F0F0F] hover:bg-[#262626] rounded-full transition shadow-md font-mono"
                >
                  <span>Abrir formulario en nueva pestaña</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* Direct Link Alternative Bar */}
            <div className="mt-4 p-4 rounded-xl bg-[#F0F0EE] border border-[#0F0F0F]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#484848] font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0F0F0F]" />
                <span>¿Prefieres abrir el formulario en una pestaña independiente?</span>
              </div>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#0F0F0F] hover:underline"
              >
                <span>Formulario directo en HubSpot</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Explicit Spanish Confirmation Notice */}
          <div className="mt-8 p-4 rounded-xl bg-[#F0F0EE] border border-[#0F0F0F]/10 flex items-start gap-3 text-xs sm:text-sm text-[#484848]">
            <Info className="w-5 h-5 text-[#0F0F0F] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#0F0F0F]">Aviso sobre el proceso de selección de participantes</p>
              <p className="mt-1 text-[#484848] text-xs leading-relaxed">
                El envío de este formulario representa una solicitud formal de participación. Debido a que el aforo está restringido a 20-25 asistentes, el equipo de Letmino revisará cada perfil y enviará la confirmación oficial de asistencia a la dirección de correo corporativo proporcionada.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

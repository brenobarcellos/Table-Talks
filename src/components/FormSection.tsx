import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Sparkles, CheckCircle, Info, Lock } from 'lucide-react';

export const FormSection: React.FC = () => {
  const formUrl = 'https://share-eu1.hsforms.com/1jGgwSsFFTUK9FbEg9Ul24Q2fia4p';
  const [iframeError, setIframeError] = useState(false);

  return (
    <section id="solicitar-participacion" className="py-20 bg-[#0B132B] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D084]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/25 text-[#00D084] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#00D084]" />
            <span>Registro y Solicitud de Plaza</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Solicitar participación
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Completa el siguiente formulario corporativo para enviar tu solicitud de plaza para la cena exclusiva en Bogotá.
          </p>
        </div>

        {/* Embedded Form Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white/5 border border-[#00D084]/30 shadow-2xl relative backdrop-blur-md">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00D084] flex-shrink-0" />
              <span><strong className="text-white">Encuentro Exclusivo:</strong> Cupos estrictamente limitados a 20-25 decisores C-Level.</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/60">
              <Lock className="w-4 h-4 text-[#00D084]" />
              <span>Conexión cifrada de alta seguridad</span>
            </div>
          </div>

          {/* Form Container / Iframe */}
          <div className="relative min-h-[580px] w-full rounded-2xl bg-black/40 border border-white/10 overflow-hidden flex flex-col justify-center">
            
            {!iframeError ? (
              <iframe
                src={formUrl}
                title="Formulario de Solicitud de Participación ODILO Table Talks"
                className="w-full h-[620px] border-0 rounded-2xl"
                loading="lazy"
                onError={() => setIframeError(true)}
              />
            ) : (
              <div className="p-8 text-center space-y-4">
                <Info className="w-12 h-12 text-[#00D084] mx-auto" />
                <h3 className="text-xl font-bold text-white">Acceso al Formulario Oficial de HubSpot</h3>
                <p className="text-white/70 text-sm max-w-md mx-auto">
                  Por razones de seguridad del navegador, puedes abrir el formulario seguro de inscripción en un nuevo panel.
                </p>
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-[#0B132B] bg-[#00D084] hover:bg-[#00B874] rounded-full transition shadow-lg shadow-[#00D084]/20"
                >
                  <span>Abrir formulario en nueva pestaña</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* Direct Link Alternative Bar */}
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00D084]" />
                <span>¿Prefieres abrir el formulario en una pestaña independiente?</span>
              </div>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#00D084] hover:underline"
              >
                <span>Formulario directo en HubSpot</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Explicit Spanish Confirmation Notice */}
          <div className="mt-8 p-4 rounded-xl bg-[#00D084]/10 border border-[#00D084]/25 flex items-start gap-3 text-xs sm:text-sm text-white/80">
            <Info className="w-5 h-5 text-[#00D084] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white">Aviso sobre el proceso de selección de participantes</p>
              <p className="mt-1 text-white/70 text-xs leading-relaxed">
                El envío de este formulario representa una solicitud formal de participación. Debido a que el aforo está restringido a 20-25 asistentes, el equipo de ODILO revisará cada perfil y enviará la confirmación oficial de asistencia a la dirección de correo corporativo proporcionada.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

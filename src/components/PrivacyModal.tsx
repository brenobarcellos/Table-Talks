import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0B132B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2 text-[#00D084] font-bold text-base">
            <ShieldCheck className="w-5 h-5" />
            <span>Política de Privacidad y Tratamiento de Datos</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition cursor-pointer"
            aria-label="Cerrar ventana emergente"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed">
          <p>
            <strong>ODILO Corporate</strong> garantiza la protección de los datos personales compartidos en esta landing page para la solicitud de asistencia al evento <strong>ODILO Table Talks Colombia 2026</strong>.
          </p>
          
          <h4 className="font-bold text-white text-sm">1. Finalidad del tratamiento</h4>
          <p>
            Los datos facilitados (nombre, cargo, empresa, correo electrónico corporativo y teléfono) serán utilizados exclusivamente para gestionar la invitación, validar el perfil ejecutivo del participante, enviar las confirmaciones correspondientes y comunicar detalles logísticos del evento.
          </p>

          <h4 className="font-bold text-white text-sm">2. Gestión a través de HubSpot</h4>
          <p>
            Toda la gestión de formularios e información de contacto se realiza en la plataforma HubSpot bajo el código de campaña <code>TT1709</code>, asegurando el cumplimiento de los estándares internacionales de seguridad y protección de datos.
          </p>

          <h4 className="font-bold text-white text-sm">3. Derechos del titular</h4>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición en cualquier momento contactando a nuestro equipo a través de los canales oficiales de ODILO.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-[#0B132B] bg-[#00D084] hover:bg-[#00B874] rounded-full transition cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};


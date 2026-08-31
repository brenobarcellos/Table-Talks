import React, { useState } from 'react';
import { TableTalksLogo } from './TableTalksLogo';
import { PrivacyModal } from './PrivacyModal';
import { ExternalLink, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-white border-t border-[#0F0F0F]/10 text-[#484848] text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#0F0F0F]/10">
          {/* Logo & Tagline */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <TableTalksLogo size="sm" variant="light" showSubtitle={false} />
            </div>
            <p className="text-[#484848] text-xs max-w-md pt-1">
              Plataforma de Aprendizaje Digital de Letmino, con curaduría y soporte para equipos y organizaciones.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#0F0F0F] font-mono">
            <a
              href="https://letmino.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition flex items-center gap-1"
            >
              <span>Sitio oficial Letmino</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:opacity-75 transition cursor-pointer flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5 text-[#0F0F0F]" />
              <span>Política de privacidad</span>
            </button>
            <a
              href="#solicitar-participacion"
              className="hover:opacity-75 transition"
            >
              Solicitar participación
            </a>
          </div>
        </div>

        {/* Legal & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#484848] text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Letmino. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span>Campaña: TT1709</span>
            <span>•</span>
            <span>Tag: IN_Event_Letmino_Table_Talks_Q4_COL_2026Bogota</span>
            <span>•</span>
            <span>Bogotá, Colombia</span>
          </div>
        </div>

      </div>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
};

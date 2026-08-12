import React, { useState } from 'react';
import { OdiloLogo } from './OdiloLogo';
import { TableTalksLogo } from './TableTalksLogo';
import { PrivacyModal } from './PrivacyModal';
import { ExternalLink, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#0B132B] border-t border-white/10 text-white/60 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <TableTalksLogo size="sm" />
              <div className="h-5 w-px bg-white/20" />
              <OdiloLogo size="sm" showSubtitle={false} />
            </div>
            <p className="text-white/60 text-xs max-w-md pt-1">
              Plataforma líder en ecosistemas de aprendizaje ilimitado y gestión inteligente de contenidos corporativos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-white/80">
            <a
              href="https://www.odilo.us"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00D084] transition flex items-center gap-1"
            >
              <span>Sitio oficial ODILO</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-[#00D084] transition cursor-pointer flex items-center gap-1"
            >
              <Shield className="w-3 h-3 text-[#00D084]" />
              <span>Política de privacidad</span>
            </button>
            <a
              href="#solicitar-participacion"
              className="hover:text-[#00D084] transition"
            >
              Solicitar participación
            </a>
          </div>
        </div>

        {/* Legal & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-[11px]">
          <div>
            © {new Date().getFullYear()} ODILO. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span>Campaña: TT1709</span>
            <span>•</span>
            <span>Tag: IN_Event_Odilo_Table_Talks_Q4_COL_2026Bogota</span>
            <span>•</span>
            <span>Bogotá, Colombia</span>
          </div>
        </div>

      </div>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
};


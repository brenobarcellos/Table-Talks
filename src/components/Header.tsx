import React, { useState, useEffect } from 'react';
import { OdiloLogo } from './OdiloLogo';
import { Menu, X, ArrowRight, Calendar, MapPin } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Info Práctica', href: '#informacion-practica' },
    { name: 'Sobre el encuentro', href: '#sobre-el-encuentro' },
    { name: 'Ejes temáticos', href: '#ejes-tematicos' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Agenda', href: '#agenda' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B132B]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0B132B] via-[#0B132B]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group focus:outline-none focus:ring-2 focus:ring-[#00D084] rounded-lg p-1 transition"
            aria-label="ODILO Table Talks Inicio"
          >
            <OdiloLogo showSubtitle={false} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-[#00D084] transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-[#00D084] rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 text-xs text-[#00D084] bg-[#00D084]/10 border border-[#00D084]/30 px-3.5 py-1.5 rounded-full font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
              <span>Bogotá • 17 Sep 2026</span>
            </div>

            <button
              onClick={onCtaClick}
              id="header-cta-button"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-[#0B132B] bg-[#00D084] hover:bg-[#00B874] rounded-full shadow-lg shadow-[#00D084]/20 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#00D084] cursor-pointer"
            >
              <span>Solicitar participación</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onCtaClick}
              className="px-3 py-1.5 text-xs font-bold text-[#0B132B] bg-[#00D084] hover:bg-[#00B874] rounded-full transition shadow-sm"
            >
              Participar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/70 hover:text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D084]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B132B]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-2 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#00D084]" /> 17 de septiembre de 2026
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00D084]" /> Bogotá, Colombia
            </span>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-[#00D084] hover:bg-white/5 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#0B132B] bg-[#00D084] hover:bg-[#00B874] rounded-xl shadow-lg shadow-[#00D084]/20"
            >
              <span>Solicitar participación</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


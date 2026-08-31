import React, { useState, useEffect } from 'react';
import { LetminoLogo } from './LetminoLogo';
import { Menu, X, ArrowRight, Calendar, MapPin } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
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
          ? 'bg-[#F0F0EE]/92 backdrop-blur-md border-b border-[#0F0F0F]/8 shadow-sm py-3'
          : 'bg-[#F0F0EE]/92 backdrop-blur-md border-b border-[#0F0F0F]/8 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Compact single-line lockup with black text */}
          <a
            href="#"
            className="group focus:outline-none focus:ring-2 focus:ring-[#0F0F0F] rounded-lg p-1 transition"
            aria-label="Letmino Table Talks Inicio"
          >
            <LetminoLogo variant="horizontal" theme="light" size="sm" showSubtitle={false} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#484848] hover:text-[#0F0F0F] transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-[#0F0F0F] rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Solid #64DF65 badge with black text as per brandbook */}
            <div className="hidden xl:flex items-center gap-2 text-xs text-[#0F0F0F] bg-[#64DF65] px-3.5 py-1.5 rounded-full font-bold font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0F0F0F]" />
              <span>Bogotá • 17 Sep 2026</span>
            </div>

            {/* Primary Black CTA Button */}
            <button
              onClick={onCtaClick}
              id="header-cta-button"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-[#F0F0EE] bg-[#0F0F0F] hover:bg-[#262626] rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0F0F0F] cursor-pointer font-mono"
            >
              <span>Solicitar participación</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onCtaClick}
              className="px-3.5 py-1.5 text-xs font-bold text-[#F0F0EE] bg-[#0F0F0F] hover:bg-[#262626] rounded-full transition shadow-sm cursor-pointer font-mono"
            >
              Participar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#484848] hover:text-[#0F0F0F] bg-white border border-[#0F0F0F]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F0F0F] cursor-pointer shadow-sm"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F0F0EE]/98 backdrop-blur-xl border-b border-[#0F0F0F]/10 px-4 pt-4 pb-6 mt-2 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-[#0F0F0F]/10 text-xs text-[#484848] font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0F0F0F]" /> 17 de septiembre de 2026
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0F0F0F]" /> Torre Pacific, Bogotá
            </span>
          </div>

          <nav className="flex flex-col gap-2 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#484848] hover:text-[#0F0F0F] hover:bg-white rounded-lg transition"
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
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#F0F0EE] bg-[#0F0F0F] hover:bg-[#262626] rounded-xl shadow-md cursor-pointer font-mono"
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

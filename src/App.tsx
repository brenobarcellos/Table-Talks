/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PracticalInfoSection } from './components/PracticalInfoSection';
import { AboutSection } from './components/AboutSection';
import { ThemesSection } from './components/ThemesSection';
import { SpeakersSection } from './components/SpeakersSection';
import { AgendaSection } from './components/AgendaSection';
import { ClosingSection } from './components/ClosingSection';
import { FormSection } from './components/FormSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToForm = () => {
    const formElement = document.getElementById('solicitar-participacion');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'solicitar-participacion';
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F0EE] text-[#0F0F0F] flex flex-col font-mono selection:bg-[#64DF65] selection:text-[#0F0F0F]">
      {/* Sticky Executive Navigation */}
      <Header onCtaClick={handleScrollToForm} />

      {/* Main Content Sections - Streamlined Executive Flow */}
      <main className="flex-grow">
        <Hero onCtaClick={handleScrollToForm} />
        <PracticalInfoSection />
        <AboutSection />
        <ThemesSection />
        <SpeakersSection onCtaClick={handleScrollToForm} />
        <AgendaSection />
        <ClosingSection onCtaClick={handleScrollToForm} />
        <FormSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

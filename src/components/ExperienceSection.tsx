import React, { useState } from 'react';
import { GlassWater, Utensils, MessageSquare, Award, Camera, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'networking' | 'dinner' | 'keynote'>('all');

  const galleryItems = [
    {
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      title: 'Networking C-Suite de Alto Nivel',
      category: 'networking',
      caption: 'Espacio de intercambio exclusivo entre ejecutivos de grandes empresas.',
    },
    {
      url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
      title: 'Mesa Redonda & Debate Directo',
      category: 'keynote',
      caption: 'Discusión guiada sobre cultura de aprendizaje e inteligencia artificial.',
    },
    {
      url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      title: 'Cena de Gala Exclusiva',
      category: 'dinner',
      caption: 'Ambiente distinguido diseñado para fortalecer alianzas estratégicas.',
    },
    {
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
      title: 'Conferencias & Casos de Éxito',
      category: 'keynote',
      caption: 'Ponencias magistrales sobre tecnologías emergentes en educación corporativa.',
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-[#0B132B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/25 text-[#00D084] text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Formato de Alto Valor</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiencia ODILO Table Talks
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Combinamos contenido de vanguardia con la calidez de una cena privada para asegurar interacciones memorables y constructivas.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#00D084]/40 transition">
            <div className="w-10 h-10 rounded-xl bg-[#00D084]/10 border border-[#00D084]/30 text-[#00D084] flex items-center justify-center">
              <GlassWater className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">1. Cóctel de Bienvenida</h3>
            <p className="text-white/70 text-xs leading-relaxed">
              Recibimiento informal para romper el hielo y entablar las primeras conversaciones entre los ejecutivos invitados.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#00D084]/40 transition">
            <div className="w-10 h-10 rounded-xl bg-[#00D084]/10 border border-[#00D084]/30 text-[#00D084] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">2. Keynotes & Panel</h3>
            <p className="text-white/70 text-xs leading-relaxed">
              Intervenciones de AWS y ODILO seguidas de una mesa redonda interactiva con preguntas directas del público.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#00D084]/40 transition">
            <div className="w-10 h-10 rounded-xl bg-[#00D084]/10 border border-[#00D084]/30 text-[#00D084] flex items-center justify-center">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">3. Cena de Gala Privada</h3>
            <p className="text-white/70 text-xs leading-relaxed">
              Una experiencia gastronómica de primer nivel diseñada para propiciar el diálogo pausado e inspirador.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#00D084]/40 transition">
            <div className="w-10 h-10 rounded-xl bg-[#00D084]/10 border border-[#00D084]/30 text-[#00D084] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">4. Relaciones Duraderas</h3>
            <p className="text-white/70 text-xs leading-relaxed">
              Consolidación de una red de contactos directos entre decisores de RRHH, TI y Transformación Digital.
            </p>
          </div>
        </div>

        {/* Gallery Filter & Grid */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Camera className="w-4 h-4 text-[#00D084]" />
              <span>Galería de Atmósfera ODILO Table Talks</span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-full transition cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#00D084] text-[#0B132B] font-bold'
                    : 'bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setSelectedCategory('networking')}
                className={`px-3 py-1.5 rounded-full transition cursor-pointer ${
                  selectedCategory === 'networking'
                    ? 'bg-[#00D084] text-[#0B132B] font-bold'
                    : 'bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                Networking
              </button>
              <button
                onClick={() => setSelectedCategory('keynote')}
                className={`px-3 py-1.5 rounded-full transition cursor-pointer ${
                  selectedCategory === 'keynote'
                    ? 'bg-[#00D084] text-[#0B132B] font-bold'
                    : 'bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                Ponencias
              </button>
              <button
                onClick={() => setSelectedCategory('dinner')}
                className={`px-3 py-1.5 rounded-full transition cursor-pointer ${
                  selectedCategory === 'dinner'
                    ? 'bg-[#00D084] text-[#0B132B] font-bold'
                    : 'bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                Cena
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 aspect-[4/3] shadow-lg hover:border-[#00D084]/40 transition"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-[#00D084] uppercase tracking-widest mb-0.5">
                    ODILO Table Talks
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug">{item.title}</h4>
                  <p className="text-[11px] text-white/70 line-clamp-1 mt-1 opacity-90">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PoemCard } from './components/PoemCard';
import { PoemModal } from './components/PoemModal';
import { POEMS } from './constants';
import { Poem } from './types';
import { motion } from 'motion/react';

export default function App() {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);

  return (
    <div className="min-h-screen bg-mesh selection:bg-white/20">
      <Hero />
      
      <main id="poems" className="container mx-auto px-4 py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            The Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {POEMS.map((poem, index) => (
            <PoemCard 
              key={poem.id} 
              poem={poem} 
              onClick={setSelectedPoem} 
            />
          ))}
        </div>
      </main>

      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 serif italic">Paulah's Poems</h3>
          <p className="text-zinc-500 text-sm max-w-md mx-auto leading-relaxed">
            A sanctuary for the soul, where every word is a heartbeat and every verse a breath of life.
          </p>
          <div className="mt-10 text-zinc-600 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Paulah. All rights reserved.
          </div>
        </div>
      </footer>

      <PoemModal 
        poem={selectedPoem} 
        onClose={() => setSelectedPoem(null)} 
      />
    </div>
  );
}

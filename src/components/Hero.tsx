import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPoems = () => {
    const element = document.getElementById('poems');
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-mesh hero-photo">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass p-12 md:p-20 rounded-[40px] relative overflow-hidden group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl pointer-events-none" />

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-glow"
            >
              Paulah's Poems
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-zinc-400 font-light italic mb-10 leading-relaxed"
            >
              "Where words flow like rivers of meaning, painting emotions in verses."
            </motion.p>

            <motion.a
              href="#poems"
              onClick={(event) => {
                event.preventDefault();
                scrollToPoems();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-zinc-950 rounded-full font-medium transition-all hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-flex items-center justify-center pointer-events-auto"
            >
              Read Poems
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#poems"
        onClick={(event) => {
          event.preventDefault();
          scrollToPoems();
        }}
        aria-label="Scroll to collection"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 cursor-pointer pointer-events-auto"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Poem } from '../types';
import { ArrowRight } from 'lucide-react';

interface PoemCardProps {
  poem: Poem;
  onClick: (poem: Poem) => void;
}

export const PoemCard: React.FC<PoemCardProps> = ({ poem, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={poem.imageUrl} 
          alt={poem.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-6">
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
            {poem.date}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
          {poem.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-6 line-clamp-2 italic font-light">
          {poem.description}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <button 
            onClick={() => onClick(poem)}
            className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors group/btn"
          >
            Read More
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

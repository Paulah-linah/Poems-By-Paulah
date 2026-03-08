import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Poem } from '../types';

interface PoemModalProps {
  poem: Poem | null;
  onClose: () => void;
}

export const PoemModal: React.FC<PoemModalProps> = ({ poem, onClose }) => {
  if (!poem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass rounded-[40px] overflow-hidden flex flex-col md:flex-row"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>

          {/* Image Side */}
          <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
            <img 
              src={poem.imageUrl} 
              alt={poem.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-3/5 p-8 md:p-16 overflow-y-auto custom-scrollbar">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-2 block">
                {poem.date}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
                {poem.title}
              </h2>
              <p className="text-zinc-400 italic font-light border-l-2 border-white/10 pl-4 py-1">
                {poem.description}
              </p>
            </div>

            <div className="poem-content whitespace-pre-line text-lg md:text-xl leading-relaxed text-zinc-200 font-serif italic">
              {poem.content}
            </div>

            <div className="mt-16 pt-8 border-top border-white/5 text-center">
              <p className="text-zinc-500 text-sm italic">— Paulah</p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, X } from 'lucide-react';

interface WarningBannerProps {
  taskName: string;
}

const WarningBanner: React.FC<WarningBannerProps> = ({ taskName }) => {
  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      className="bg-amber-50 border-b border-amber-200 px-8 py-3 flex items-center gap-3 shrink-0"
    >
      <span className="flex-shrink-0 bg-amber-400 text-amber-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse font-ui">!</span>
      <p className="text-sm text-amber-900 font-medium font-ui">
        <span className="font-bold uppercase">Action Required:</span> Project schedule is currently slipping by 1 day every 24 hours until <span className="underline decoration-amber-400 decoration-2 underline-offset-4">{taskName}</span> is completed.
      </p>
      <button className="ml-auto text-[10px] font-bold uppercase tracking-widest text-amber-900 hover:underline font-ui">Review Timeline</button>
    </motion.div>
  );
};

export default WarningBanner;

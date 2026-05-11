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
      className="bg-s16-accent text-white overflow-hidden"
    >
      <div className="px-8 py-3 flex items-center gap-4 shrink-0">
        <span className="flex-shrink-0 bg-white text-s16-accent rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse font-ui">!</span>
        <p className="font-ui text-[11px] md:text-[13px] font-semibold uppercase tracking-wider">
           Action Required: Project schedule is currently slipping by 1 day every 24 hours until <span className="underline decoration-2 underline-offset-4">{taskName}</span> is completed.
        </p>
      </div>
    </motion.div>
  );
};

export default WarningBanner;

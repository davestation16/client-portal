import React from 'react';
import { motion } from 'motion/react';

interface ProjectHealthProps {
  progress: number;
  delayDays: number;
}

const ProjectHealth: React.FC<ProjectHealthProps> = ({ progress, delayDays }) => {
  return (
    <section className="bg-s16-bg-surface p-8 border border-s16-border flex flex-col h-full shadow-sm">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="s16-eyebrow text-s16-text-muted mb-2">Project Velocity</h2>
          <div className="font-display text-5xl text-s16-text">{progress}% <span className="text-xl font-body italic text-s16-text-muted capitalize">complete</span></div>
        </div>
        <div className="text-right">
          <p className="font-ui text-[9px] font-bold text-s16-accent uppercase tracking-widest">Total Client Delay</p>
          <p className="font-display text-3xl text-s16-text">+{delayDays} Days</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between py-2">
        <div className="space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-ui text-[10px] font-semibold text-s16-text-muted uppercase tracking-widest">Phase: Production Prep</span>
              <span className="font-ui text-[10px] font-semibold text-s16-text-muted uppercase tracking-widest">40% done</span>
            </div>
            <div className="h-1 w-full bg-s16-border overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full bg-s16-text"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-[1px] bg-s16-border border border-s16-border">
            {['Discovery', 'Concept', 'Prep', 'Install'].map((phase, i) => (
              <div key={phase} className={`h-16 flex items-center justify-center text-[10px] font-ui font-bold uppercase tracking-widest ${i < 2 ? 'bg-s16-text text-s16-bg' : i === 2 ? 'bg-s16-bg text-s16-text border-2 border-s16-text' : 'bg-s16-bg-warm text-s16-text-muted'}`}>
                {phase}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-s16-border pt-4 flex justify-between">
          <div className="flex gap-8">
            <div>
              <p className="font-ui text-[9px] text-s16-text-muted font-bold uppercase tracking-widest mb-1">Kickoff</p>
              <p className="font-display text-xl">Sep 12</p>
            </div>
            <div>
              <p className="font-ui text-[9px] text-s16-text-muted font-bold uppercase tracking-widest mb-1">Projected</p>
              <p className="font-display text-xl">Nov 30</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-ui text-[9px] text-s16-text-muted font-bold uppercase tracking-widest mb-1">Status</p>
            <p className="font-display text-xl text-s16-accent italic">At Risk</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHealth;

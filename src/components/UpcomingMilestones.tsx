import React from 'react';
import { Milestone } from '../types';
import { Check, Circle } from 'lucide-react';
import { motion } from 'motion/react';

interface UpcomingMilestonesProps {
  milestones: Milestone[];
}

const UpcomingMilestones: React.FC<UpcomingMilestonesProps> = ({ milestones }) => {
  // Sort milestones by date
  const sortedMilestones = [...milestones].sort((a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime());
  
  // Determine index of the current phase (first non-completed milestone)
  const currentPhaseIndex = sortedMilestones.findIndex(m => !m.completed);
  
  return (
    <section className="bg-s16-bg border border-s16-border flex flex-col h-full shadow-sm overflow-hidden">
      <div className="p-6 border-b border-s16-border">
        <h2 className="s16-eyebrow text-s16-text-muted">Project Roadmap</h2>
      </div>
      
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="relative pl-10">
          {/* Vertical Track Base */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-s16-border" />
          
          {/* Filled Progress Track */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ 
              height: currentPhaseIndex === -1 
                ? '100%' 
                : `${(currentPhaseIndex / (sortedMilestones.length - 1)) * 100}%` 
            }}
            className="absolute left-[7px] top-2 w-[2px] bg-black origin-top z-10"
          />

          <div className="flex flex-col gap-16">
            {sortedMilestones.map((milestone, index) => {
              const isToday = index === currentPhaseIndex;
              const isCompleted = milestone.completed;

              return (
                <div key={milestone.id} className="relative group">
                  {/* Today Indicator Badge */}
                  {isToday && (
                    <div className="absolute -left-10 -top-8 mb-2">
                       <span className="font-ui text-[8px] font-black uppercase tracking-[0.3em] text-s16-bg bg-s16-text px-2 py-1 flex items-center gap-1 shadow-sm">
                         <motion.span 
                           animate={{ opacity: [1, 0, 1] }}
                           transition={{ duration: 1.5, repeat: Infinity }}
                           className="w-1.5 h-1.5 bg-s16-accent rounded-full"
                         />
                         Today
                       </span>
                    </div>
                  )}

                  {/* Milestone Intersection Point */}
                  <div className={`absolute -left-[39.5px] top-1.5 w-4 h-4 rotate-45 border-2 z-20 transition-all duration-500 ${
                    isCompleted 
                      ? 'bg-black border-black' 
                      : isToday
                        ? 'bg-s16-bg border-black'
                        : 'bg-s16-bg border-s16-border'
                  }`}>
                    {isCompleted && (
                      <div className="flex items-center justify-center -rotate-45 h-full w-full">
                        <Check size={8} className="text-white" strokeWidth={4} />
                      </div>
                    )}
                  </div>

                  {/* Milestone Text Content */}
                  <div className="flex flex-col gap-1">
                    <span className={`font-ui text-[10px] font-bold uppercase tracking-[0.2em] mb-1 ${
                      isCompleted ? 'text-s16-text-muted' : 'text-s16-text'
                    }`}>
                      {new Date(milestone.due_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                    </span>
                    <h3 className={`font-display text-2xl leading-tight transition-colors ${
                      isCompleted ? 'text-s16-text-muted' : 'text-s16-text'
                    }`}>
                      {milestone.title}
                    </h3>
                    <p className={`font-body text-xs italic mt-1 transition-colors ${
                      isCompleted ? 'text-s16-text-muted/60' : 'text-s16-text-muted'
                    }`}>
                      {isCompleted ? 'Phase successfully finalized' : 'Target delivery window active'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMilestones;

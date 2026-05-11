import React from 'react';
import { motion } from 'motion/react';

interface ProjectHealthProps {
  progress: number;
  delayDays: number;
}

const ProjectHealth: React.FC<ProjectHealthProps> = ({ progress, delayDays }) => {
  return (
    <section className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm flex flex-col h-full">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-xs font-ui font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Project Velocity</h2>
          <div className="text-3xl font-display font-bold text-slate-900">{progress}% <span className="text-sm font-ui font-medium text-slate-400 lowercase">complete</span></div>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-ui font-bold text-rose-500 uppercase tracking-tighter">Total Client Delay</p>
          <p className="text-xl font-display font-bold">+{delayDays} Days</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between py-2">
        <div className="space-y-4">
          <div className="relative pt-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-ui font-semibold text-slate-500 uppercase">Current Phase: Production Prep</span>
              <span className="text-[10px] font-ui font-semibold text-slate-500 uppercase">Phase Completion: 40%</span>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded-full bg-slate-100">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1">
            <div className="h-12 bg-slate-900 rounded flex items-center justify-center text-[8px] text-white font-ui font-bold uppercase">Discovery</div>
            <div className="h-12 bg-slate-900 rounded flex items-center justify-center text-[8px] text-white font-ui font-bold uppercase">Concept</div>
            <div className="h-12 bg-slate-100 border-2 border-black rounded flex items-center justify-center text-[8px] text-black font-ui font-bold uppercase">Prep</div>
            <div className="h-12 bg-slate-50 rounded flex items-center justify-center text-[8px] text-slate-300 font-ui font-bold uppercase">Install</div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-4 flex justify-between">
          <div className="flex gap-4">
            <div>
              <p className="text-[10px] font-ui text-slate-400 font-bold uppercase">Kickoff</p>
              <p className="text-xs font-ui font-bold">Sep 12</p>
            </div>
            <div>
              <p className="text-[10px] font-ui text-slate-400 font-bold uppercase">Projected End</p>
              <p className="text-xs font-ui font-bold">Nov 30</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-ui text-slate-400 font-bold uppercase">Status</p>
            <p className="text-xs font-ui font-bold text-amber-600">At Risk</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHealth;

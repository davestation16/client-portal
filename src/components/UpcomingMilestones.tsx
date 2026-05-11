import React from 'react';
import { Milestone } from '../types';
import { Check } from 'lucide-react';

interface UpcomingMilestonesProps {
  milestones: Milestone[];
}

const UpcomingMilestones: React.FC<UpcomingMilestonesProps> = ({ milestones }) => {
  return (
    <section className="bg-s16-bg border border-s16-border flex flex-col h-full shadow-sm overflow-hidden">
      <div className="p-6 border-b border-s16-border">
        <h2 className="s16-eyebrow text-s16-text-muted">Upcoming Milestones</h2>
      </div>
      <div className="flex-1 overflow-hidden">
        <table className="w-full text-left order-collapse">
          <thead>
            <tr className="bg-s16-bg-warm">
              <th className="px-6 py-4 font-ui text-[9px] font-bold text-s16-text-muted uppercase tracking-widest border-b border-s16-border">Deliverable</th>
              <th className="px-6 py-4 font-ui text-[9px] font-bold text-s16-text-muted uppercase tracking-widest border-b border-s16-border">Due Date</th>
              <th className="px-6 py-4 font-ui text-[9px] font-bold text-s16-text-muted uppercase tracking-widest border-b border-s16-border">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-s16-border">
            {milestones.map((milestone) => (
              <tr key={milestone.id} className="hover:bg-s16-bg-warm/50 transition-colors">
                <td className="px-6 py-6 text-sm font-ui font-bold text-s16-text leading-tight">
                  {milestone.title}
                </td>
                <td className="px-6 py-6 text-xs font-body text-s16-text-muted italic">
                  {new Date(milestone.due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </td>
                <td className="px-6 py-6">
                  <span className={`text-[9px] px-2 py-1 rounded font-ui font-bold uppercase tracking-widest ${
                    milestone.completed 
                      ? 'bg-s16-bg-surface text-s16-text-muted' 
                      : 'bg-s16-accent/10 text-s16-accent border border-s16-accent/20'
                  }`}>
                    {milestone.completed ? 'Completed' : 'Scheduled'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-s16-bg-surface border-t border-s16-border text-center">
        <a href="#" className="font-ui text-[10px] font-bold uppercase tracking-[0.22em] text-s16-text-muted hover:text-s16-text transition-colors">View Full Document Library</a>
      </div>
    </section>
  );
};

export default UpcomingMilestones;

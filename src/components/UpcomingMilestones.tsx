import React from 'react';
import { Milestone } from '../types';
import { Check } from 'lucide-react';

interface UpcomingMilestonesProps {
  milestones: Milestone[];
}

const UpcomingMilestones: React.FC<UpcomingMilestonesProps> = ({ milestones }) => {
  return (
    <section className="bg-white border border-slate-200 rounded-lg flex flex-col h-full shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-100">
        <h2 className="text-xs font-ui font-black uppercase tracking-[0.2em] text-slate-400">Upcoming Milestones</h2>
      </div>
      <div className="flex-1 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-4 py-3 text-[10px] font-ui font-bold text-slate-500 uppercase">Deliverable</th>
              <th className="px-4 py-3 text-[10px] font-ui font-bold text-slate-500 uppercase">Due Date</th>
              <th className="px-4 py-3 text-[10px] font-ui font-bold text-slate-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {milestones.map((milestone) => (
              <tr key={milestone.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-4 text-sm font-ui font-bold text-slate-900 leading-tight">
                  {milestone.title}
                </td>
                <td className="px-4 py-4 text-xs font-body text-slate-500">
                  {new Date(milestone.due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </td>
                <td className="px-4 py-4">
                  <span className={`text-[10px] px-2 py-0.5 rounded font-ui font-bold uppercase ${
                    milestone.completed 
                      ? 'bg-slate-100 text-slate-400' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {milestone.completed ? 'Completed' : 'Scheduled'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
        <a href="#" className="text-[10px] font-ui font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-black transition-colors">View Full Document Library</a>
      </div>
    </section>
  );
};

export default UpcomingMilestones;

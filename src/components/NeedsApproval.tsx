import React from 'react';
import { Task } from '../types';
import { motion } from 'motion/react';
import { CheckCircle2, Clock } from 'lucide-react';

interface NeedsApprovalProps {
  tasks: Task[];
  onApprove: (id: string) => void;
}

const NeedsApproval: React.FC<NeedsApprovalProps> = ({ tasks, onApprove }) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-ui font-black uppercase tracking-[0.2em] text-slate-400">Pending Approvals</h2>
        <span className="px-2 py-0.5 bg-rose-100 text-rose-600 text-[10px] font-ui font-bold rounded uppercase">{tasks.length} Items Urgent</span>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        {tasks.map((task) => (
          <motion.div 
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-slate-200 p-4 rounded-lg flex justify-between items-center shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <h3 className="font-ui font-bold text-slate-900 text-sm">{task.title}</h3>
              </div>
              <p className="text-xs font-body text-slate-500">Due: {new Date(task.due_date).toLocaleDateString()} (Project Impacting)</p>
            </div>
            <button 
              onClick={() => onApprove(task.id)}
              className="bg-black text-white text-[10px] font-ui font-bold uppercase tracking-widest px-4 py-2 hover:bg-slate-800 transition-colors"
            >
              Approve & Complete
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NeedsApproval;

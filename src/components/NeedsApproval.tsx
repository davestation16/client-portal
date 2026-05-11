import React, { useState } from 'react';
import { Task, Deliverable } from '../types';
import { motion } from 'motion/react';
import { 
  FileText, 
  ExternalLink, 
  Clock, 
  Monitor,
  Video,
  FileCode
} from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger
} from './ui/sheet';

interface NeedsApprovalProps {
  tasks: Task[];
  onApprove: (id: string) => void;
}

const NeedsApproval: React.FC<NeedsApprovalProps> = ({ tasks, onApprove }) => {
  const [, setSelectedTask] = useState<Task | null>(null);

  const getPlatformIcon = (platform: Deliverable['platform']) => {
    switch (platform) {
      case 'google_docs': return <FileText size={18} className="text-s16-accent" />;
      case 'dropbox': return <Monitor size={18} className="text-s16-accent" />;
      case 'frame_io': return <Video size={18} className="text-s16-accent" />;
      default: return <FileCode size={18} className="text-s16-accent" />;
    }
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="s16-eyebrow text-s16-text-muted">Pending Approvals</h2>
        <span className="font-ui text-[9px] px-2 py-1 bg-s16-accent text-white font-bold rounded uppercase tracking-widest">{tasks.length} Action Items</span>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <motion.div 
            key={task.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-s16-bg-warm border border-s16-border p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 bg-s16-accent rounded-full" />
                <h3 className="font-display text-2xl md:text-3xl text-s16-text">{task.title}</h3>
              </div>
              <p className="font-body text-sm text-s16-text-muted italic">
                Awaiting client sign-off. Due: {new Date(task.due_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
              </p>
            </div>

            <Sheet
              onOpenChange={(open) => {
                if (!open) {
                  setSelectedTask(null);
                } else {
                  setSelectedTask(task);
                }
              }}
            >
              <SheetTrigger asChild>
                <button 
                  className="bg-s16-text text-s16-bg px-8 py-3 font-ui text-[10px] uppercase font-bold tracking-[0.2em] transition-all hover:bg-s16-accent hover:text-white"
                >
                  ↳ Review Deliverables
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-xl bg-s16-bg border-l border-s16-border p-0 flex flex-col focus:outline-none">
                <SheetHeader className="p-8 md:px-12 md:pt-12 md:pb-6 border-b border-s16-border">
                  <div className="flex justify-between items-start">
                    <span className="s16-eyebrow">Review Mode</span>
                    <div className="font-ui text-[9px] px-2 py-1 bg-s16-bg-warm border border-s16-border text-s16-text font-bold uppercase tracking-widest">
                      Due {new Date(task.due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                  <SheetTitle className="font-display text-2xl text-s16-text mt-4 leading-tight">
                    {task.title}
                  </SheetTitle>
                  <div className="flex items-center gap-2 mt-4 text-s16-accent font-ui text-[10px] uppercase font-bold tracking-widest">
                    <Clock size={14} />
                    <span>Daily Delay Path Active</span>
                  </div>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-8 md:px-12 py-6">
                  <div className="p-4 bg-s16-bg-warm border-l-2 border-s16-accent mb-8">
                    <p className="font-body text-sm text-s16-text-muted leading-relaxed italic">
                      "Please review the deliverables below. Leave any specific comments directly within the linked files, then return here to log your final decision."
                    </p>
                  </div>

                  {task.deliverables && (
                    <div>
                      <h4 className="font-ui text-[10px] font-bold uppercase tracking-widest text-s16-text-muted mb-4">Deliverables</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {task.deliverables.map((d, i) => (
                          <a 
                            key={i}
                            href={d.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-3 bg-s16-bg-surface border border-s16-border hover:border-s16-text transition-all duration-300"
                          >
                            <div className="flex items-center gap-4">
                              <div className="p-2 bg-s16-bg border border-s16-border group-hover:border-s16-text transition-colors">
                                {getPlatformIcon(d.platform)}
                              </div>
                              <div>
                                <span className="font-ui text-sm font-bold text-s16-text tracking-normal block">{d.title}</span>
                                <span className="font-ui text-[9px] uppercase tracking-widest text-s16-text-muted">{d.platform.replace('_', ' ')}</span>
                              </div>
                            </div>
                            <ExternalLink size={14} className="text-s16-text-muted group-hover:text-s16-text transition-colors" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8 md:px-12 md:py-8 bg-s16-bg border-t border-s16-border flex flex-col sm:flex-row gap-4 sm:justify-between items-center mt-auto">
                  <button 
                    className="w-full sm:w-auto px-6 py-3 border border-s16-border text-s16-text font-ui text-[10px] uppercase font-bold tracking-widest hover:bg-s16-bg-warm transition-all"
                  >
                    Request Revisions
                  </button>
                  <button 
                    onClick={() => onApprove(task.id)}
                    className="w-full sm:w-auto bg-black text-white px-8 py-3 font-ui text-[10px] uppercase font-bold tracking-[0.2em] transition-all hover:bg-s16-accent flex items-center justify-center gap-2"
                  >
                    ↳ Approve & Complete
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NeedsApproval;

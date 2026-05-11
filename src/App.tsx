/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import WarningBanner from './components/WarningBanner';
import NeedsApproval from './components/NeedsApproval';
import ProjectHealth from './components/ProjectHealth';
import UpcomingMilestones from './components/UpcomingMilestones';
import { MOCK_PROJECT, MOCK_TASKS, MOCK_MILESTONES } from './mockData';
import { motion } from 'motion/react';

export default function App() {
  const [tasks, setTasks] = useState(MOCK_TASKS);
  
  const handleApprove = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: 'completed' as const, client_responsibility: false } : t));
  };

  const pendingApprovals = tasks.filter(t => t.client_responsibility);
  const criticalTask = pendingApprovals[0]?.title || "Concept Finalization Approval";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-ui overflow-x-hidden">
      <Header />
      
      {pendingApprovals.length > 0 && (
        <WarningBanner taskName={criticalTask} />
      )}

      <main className="flex-grow p-6">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-6">
          
          {/* Left Column: Tasks and Health */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
            <NeedsApproval 
              tasks={pendingApprovals} 
              onApprove={handleApprove} 
            />
            
            <ProjectHealth 
              progress={64} 
              delayDays={MOCK_PROJECT.total_client_delay_days} 
            />
          </div>

          {/* Right Column: Milestones */}
          <div className="col-span-12 lg:col-span-5 flex flex-col">
            <UpcomingMilestones 
              milestones={[
                ...MOCK_MILESTONES,
                { id: 'm5', title: 'Quality Assurance', due_date: '2026-06-25', completed: false }
              ]} 
            />
          </div>
        </div>
      </main>

      <footer className="h-10 bg-white border-t border-slate-200 flex items-center justify-between px-8 shrink-0">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-ui">
          &copy; 2026 Station 16. Professional Urban Art Consultancy.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-black font-ui">Support</a>
          <a href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-black font-ui">Privacy</a>
        </div>
      </footer>
    </div>
  );
}


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
import Footer from './components/Footer';
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
    <div className="min-h-screen bg-s16-bg flex flex-col font-body selection:bg-s16-accent selection:text-white overflow-x-hidden">
      <Header />
      
      {pendingApprovals.length > 0 && (
        <WarningBanner taskName={criticalTask} />
      )}

      <main className="flex-grow py-12">
        <div className="s16-container grid grid-cols-12 gap-8">
          
          <div className="col-span-12 mb-12">
            <span className="s16-eyebrow text-s16-text-muted">Project View</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-4 tracking-tighter text-s16-text leading-[0.95]">
              {MOCK_PROJECT.name}
            </h1>
          </div>

          {/* Left Column: Tasks and Health */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-12">
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

      <Footer />
    </div>
  );
}


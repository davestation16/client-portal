import { Task, Project, Milestone } from './types';

export const MOCK_PROJECT: Project = {
  name: "Piedmont Jets Rebrand",
  slug: "piedmont-jets",
  total_client_delay_days: 1
};

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Brand Identity Final Approval',
    due_date: '2026-05-15',
    status: 'pending',
    client_responsibility: true
  },
  {
    id: '2',
    title: 'Website Content Feedback',
    due_date: '2026-05-18',
    status: 'in-progress',
    client_responsibility: true
  },
  {
    id: '3',
    title: 'Design System Documentation',
    due_date: '2026-05-20',
    status: 'in-progress',
    client_responsibility: false
  },
  {
    id: '4',
    title: 'Print Collateral Mockups',
    due_date: '2026-05-22',
    status: 'pending',
    client_responsibility: false
  }
];

export const MOCK_MILESTONES: Milestone[] = [
  { id: 'm1', title: 'Strategy Phase', due_date: '2026-04-10', completed: true },
  { id: 'm2', title: 'Creative Concepts', due_date: '2026-05-01', completed: true },
  { id: 'm3', title: 'Design Production', due_date: '2026-06-15', completed: false },
  { id: 'm4', title: 'Launch & Handoff', due_date: '2026-07-01', completed: false }
];

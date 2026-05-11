export interface Deliverable {
  title: string;
  url: string;
  platform: 'google_docs' | 'dropbox' | 'frame_io' | 'other';
}

export interface Task {
  id: string;
  title: string;
  due_date: string;
  status: 'pending' | 'in-progress' | 'completed' | 'on-hold';
  client_responsibility: boolean;
  deliverables?: Deliverable[];
}

export interface Project {
  name: string;
  slug: string;
  total_client_delay_days: number;
}

export interface Milestone {
  id: string;
  title: string;
  due_date: string;
  completed: boolean;
}

export type TimeHorizon =
  | 'Next Hour'
  | 'Morning'
  | 'Afternoon'
  | 'Evening'
  | 'Today'
  | 'Later';

export type TaskStatus = 'active' | 'completed';

export interface Task {
  id: string;
  title: string;
  description?: string;
  timeHorizon: TimeHorizon;
  estimatedDuration?: number;
  status: TaskStatus;
  position: number;
  createdAt: string;
}

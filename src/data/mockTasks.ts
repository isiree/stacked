import type { Task } from '../types/task';

export const mockTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Finish Linux exercises',
    timeHorizon: 'Next Hour',
    estimatedDuration: 45,
    status: 'active',
    position: 0,
    createdAt: '2026-08-14T08:00:00.000Z',
  },
  {
    id: 'task-2',
    title: 'Apply for DevOps Engineer role',
    timeHorizon: 'Afternoon',
    estimatedDuration: 30,
    status: 'active',
    position: 1,
    createdAt: '2026-08-14T08:05:00.000Z',
  },
  {
    id: 'task-3',
    title: 'Update CV',
    timeHorizon: 'Afternoon',
    estimatedDuration: 30,
    status: 'active',
    position: 2,
    createdAt: '2026-08-14T08:10:00.000Z',
  },
  {
    id: 'task-4',
    title: 'Read Kubernetes documentation',
    timeHorizon: 'Evening',
    estimatedDuration: 25,
    status: 'active',
    position: 3,
    createdAt: '2026-08-14T08:15:00.000Z',
  },
];

import type { Task } from '../types/task';
import { TaskCard } from './TaskCard';

interface TaskStackProps {
  tasks: Task[];
}

export function TaskStack({ tasks }: TaskStackProps) {
  return (
    <section className="task-stack" aria-label="Task stack">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </section>
  );
}

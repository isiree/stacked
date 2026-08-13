import type { Task } from '../types/task';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="task-card">
      <h2>{task.title}</h2>
      <div className="task-card__details">
        <span>{task.timeHorizon}</span>
        {task.estimatedDuration !== undefined && (
          <span>{task.estimatedDuration} min</span>
        )}
      </div>
    </article>
  );
}

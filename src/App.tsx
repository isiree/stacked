import { TaskStack } from './components/TaskStack';
import { mockTasks } from './data/mockTasks';

export function App() {
  const remainingTasks = mockTasks.filter((task) => task.status === 'active');

  return (
    <main className="app">
      <header className="app__header">
        <h1>Stacked</h1>
        <p>
          {remainingTasks.length}{' '}
          {remainingTasks.length === 1 ? 'task' : 'tasks'} remaining
        </p>
      </header>
      <TaskStack tasks={remainingTasks} />
    </main>
  );
}

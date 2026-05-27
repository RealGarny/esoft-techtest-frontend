import UsernameFormatter from '@/src/services/helpers/usernameFormatter';
import { Task, TaskStatus } from '@/src/types/entities/Task';
import { PriorityBadge } from './PriorityBadge';
import { StatusBadge } from './StatusBadge';

interface Props {
  task: Task;
  onClick: (task: Task) => void;
}

const getTaskColor = (task: Task) => {
  if (task.status === TaskStatus.done) return 'text-green';
  if (task.dueDate && new Date() > new Date(task.dueDate)) return 'text-error';
  return 'text-neutral';
};

export function TaskCard({ task, onClick }: Props) {
  return (
    <button
      type='button'
      onClick={() => onClick(task)}
      className='w-full text-left rounded-xl p-4 transition-all group cursor-pointer bg-panel'
    >
      <div className='flex items-start justify-between gap-3 mb-3'>
        <div>
          <h3
            className={`font-medium text-sm leading-snug flex-1 ${getTaskColor(task)}`}
          >
            {task.title}
          </h3>
          <p className='opacity-70 t13'>{task.description}</p>
        </div>
        {task.dueDate && (
          <span className='text-xs'>
            {new Date(task.dueDate).toLocaleDateString('ru-RU')}
          </span>
        )}
      </div>

      <div className='flex items-center justify-between gap-2 flex-wrap'>
        <div className='flex items-center gap-2'>
          <StatusBadge status={task.status} />
          <PriorityBadge priority={task.priority} />
        </div>
        <span className='text-xs' style={{ color: 'var(--color-text-muted)' }}>
          {UsernameFormatter.short(task.assignee)}
        </span>
      </div>
    </button>
  );
}

import { Badge } from '@/src/components/ui/Badge/Badge';
import cn from '@/src/services/helpers/cn';
import { TaskPriority } from '@/src/types/entities/Task';
import { PRIORITY_LABELS } from '../consts';

interface Props {
  priority: TaskPriority;
  size?: 'sm' | 'md';
}

const STYLE_BY_PRIORITY = {
  [TaskPriority.high]: {
    component: 'text-error bg-error/20',
    dot: 'bg-error',
  },
  [TaskPriority.medium]: {
    component: 'text-alert bg-alert/20',
    dot: 'bg-alert',
  },
  [TaskPriority.low]: {
    component: 'text-neutral bg-neutral/20',
    dot: 'bg-neutral',
  },
};

export function PriorityBadge({ priority, size = 'sm' }: Props) {
  const content = STYLE_BY_PRIORITY[priority];
  return (
    <Badge className={content.component}>
      <div className='flex gap-1 items-center'>
        <span className={cn('rounded-full size-2', content.dot)} />
        {PRIORITY_LABELS[priority]} приоритет
      </div>
    </Badge>
  );
}

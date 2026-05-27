import { Badge } from '@/src/components/ui/Badge/Badge';
import { TaskStatus } from '@/src/types/entities/Task';
import { STATUS_LABELS } from '../consts';

interface Props {
  status: TaskStatus;
  size?: 'sm' | 'md';
}

const STYLE_BY_STATUS = {
  [TaskStatus.todo]: 'text-neutral bg-neutral/20',
  [TaskStatus.inProgress]: 'text-neutral bg-neutral/20',
  [TaskStatus.done]: 'text-success bg-success/20',
  [TaskStatus.cancelled]: 'text-error bg-error/20',
};

export function StatusBadge({ status }: Props) {
  const style = STYLE_BY_STATUS[status];
  return <Badge className={style}>{STATUS_LABELS[status]}</Badge>;
}

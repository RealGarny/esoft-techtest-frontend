import { TaskPriority, TaskStatus } from '@/src/types/entities/Task';

const PRIORITY_LABELS = {
  [TaskPriority.high]: 'высокий',
  [TaskPriority.medium]: 'средний',
  [TaskPriority.low]: 'низкий',
};

const STATUS_LABELS = {
  [TaskStatus.todo]: 'к выполнению',
  [TaskStatus.inProgress]: 'выполняется',
  [TaskStatus.done]: 'выполнена',
  [TaskStatus.cancelled]: 'отменена',
};

export { PRIORITY_LABELS, STATUS_LABELS };

import { User } from './User';

enum TaskPriority {
  high = 'HIGH',
  medium = 'MEDIUM',
  low = 'LOW',
}
enum TaskStatus {
  todo = 'TODO',
  inProgress = 'IN_PROGRESS',
  done = 'DONE',
  cancelled = 'CANCELLED',
}

interface Task {
  id: number;
  title: string;
  description: string | null;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  priority: TaskPriority;
  status: TaskStatus;
  creator: User;
  assignee: User;
}

type TaskDto = {
  assingeeId: User['id'];
  description?: string;
  dueDate: string;
  priority: `${TaskPriority}`;
  title: string;
};

export type { Task, TaskDto };
export { TaskPriority, TaskStatus };

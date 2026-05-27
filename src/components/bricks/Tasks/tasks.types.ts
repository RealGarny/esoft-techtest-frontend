import { Task, TaskDto } from '@/src/types/entities/Task';

enum TasksGroupMode {
  None = 'none',
  DueDate = 'dueDate',
  Assignee = 'assignee',
}

export type GroupItem = { title: string; cond: (task: Task) => boolean };

type TasksGroupLayoutVariantProps = {
  tasks: Task[];
};
type TasksGroupLayoutProps = {
  groups: GroupItem[];
  tasks: Task[];
};
type TasksContextType = {
  isLoading: boolean;
  tasks: Task[];
  groupMode: TasksGroupMode;
  setGroupMode: (groupMode: TasksGroupMode) => void;
  taskToEdit: Task | null;
  editTaskByIndex: (taskIndex: number) => void;
  createTask: (payload: TaskDto) => void;
  editTask: (payload: TaskDto) => void;
  endTaskEdit: () => void;
};

export type {
  TasksContextType,
  TasksGroupLayoutProps,
  TasksGroupLayoutVariantProps,
};
export { TasksGroupMode };

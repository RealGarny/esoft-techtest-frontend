import { FC } from 'react';
import { GroupItem, TasksGroupLayoutVariantProps } from '../../tasks.types';
import { TasksGroupLayout } from './TasksGroupLayout';

const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
};

const isThisWeek = (date: Date) => {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  return date >= startOfWeek && date <= endOfWeek;
};

const isOverdue = (date: Date) => {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  weekAgo.setHours(0, 0, 0, 0);

  return date < weekAgo;
};

const GROUPS: GroupItem[] = [
  { title: 'Сегодня', cond: (task) => isToday(new Date(task.dueDate)) },
  { title: 'На неделю', cond: (task) => isThisWeek(new Date(task.dueDate)) },
  { title: 'На будущее', cond: (task) => isOverdue(new Date(task.dueDate)) },
];

export const TasksGroupByDueDateLayout: FC<TasksGroupLayoutVariantProps> = ({
  tasks,
}) => {
  return <TasksGroupLayout groups={GROUPS} tasks={tasks} />;
};

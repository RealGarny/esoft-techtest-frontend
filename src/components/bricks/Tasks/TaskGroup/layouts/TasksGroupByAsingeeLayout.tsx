import { FC, useMemo } from 'react';
import UsernameFormatter from '@/src/services/helpers/usernameFormatter';
import { Task } from '@/src/types/entities/Task';
import { GroupItem, TasksGroupLayoutVariantProps } from '../../tasks.types';
import { TasksGroupLayout } from './TasksGroupLayout';

const buildAssigneeGroups = (tasks: Task[]): GroupItem[] => {
  const names = new Set(
    tasks.map((task) => UsernameFormatter.normal(task.assignee))
  );
  return [...names].map<GroupItem>((name) => ({
    title: name,
    cond: (task) => UsernameFormatter.normal(task.assignee) === name,
  }));
};

export const TasksGroupByAsingeeLayout: FC<TasksGroupLayoutVariantProps> = ({
  tasks,
}) => {
  const groups = useMemo(() => buildAssigneeGroups(tasks), [tasks]);
  return <TasksGroupLayout groups={groups} tasks={tasks} />;
};

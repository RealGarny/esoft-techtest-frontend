import { FC, useMemo } from 'react';
import { Task } from '@/src/types/entities/Task';
import { TasksList } from '../../TasksList/TasksList';
import { TasksGroupLayoutProps } from '../../tasks.types';

export const TasksGroupLayout: FC<TasksGroupLayoutProps> = ({
  groups,
  tasks,
}) => {
  const transformedTasks = useMemo(() => {
    const result: { title: string; tasks: Task[] }[] = [];

    tasks.forEach((task) => {
      groups.forEach((group, groupId) => {
        if (!group.cond(task)) return;
        if (!result[groupId]) {
          result[groupId] = { title: group.title, tasks: [task] };
          return;
        }
        result[groupId].tasks.push(task);
      });
    });

    return result.filter(Boolean);
  }, [tasks]);

  return transformedTasks.map((group, id) => (
    <div key={id} className='flex flex-col gap-4'>
      <h2 className='px-10'>{group.title}</h2>
      <TasksList tasks={group.tasks} />
    </div>
  ));
};

import { FC } from 'react';
import { TaskCard } from '../TaskCard/TaskCard';
import { useTasks } from '../TasksProvider/useTasks';
import { TasksGroupLayoutVariantProps } from '../tasks.types';

export const TasksList: FC<TasksGroupLayoutVariantProps> = ({ tasks }) => {
  const { editTaskByIndex } = useTasks();
  return (
    <div className='flex flex-col gap-4 overflow-y-auto pb-2 px-3'>
      {tasks.map((task, id) => (
        <TaskCard key={id} task={task} onClick={() => editTaskByIndex(id)} />
      ))}
    </div>
  );
};

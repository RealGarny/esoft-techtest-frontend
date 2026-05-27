import { Calendar } from 'lucide-react';
import { TasksGroupMode } from '../tasks.types';
import { TasksGroupModeButton } from './TasksGroupModeButton';

export const TasksGroupByDueDateButton = () => {
  return (
    <TasksGroupModeButton groupMode={TasksGroupMode.DueDate}>
      <Calendar className='size-4' /> <p>по дате завершения</p>
    </TasksGroupModeButton>
  );
};

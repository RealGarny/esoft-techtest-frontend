import { User } from 'lucide-react';
import { TasksGroupMode } from '../tasks.types';
import { TasksGroupModeButton } from './TasksGroupModeButton';

export const TasksGroupByAsigneeButton = () => {
  return (
    <TasksGroupModeButton groupMode={TasksGroupMode.Assignee}>
      <User className='size-4' /> <p>по исполнителю</p>
    </TasksGroupModeButton>
  );
};

import { FC } from 'react';
import cn from '@/src/services/helpers/cn';
import { useTasks } from '../TasksProvider/useTasks';
import { TasksGroupModeButtonProps } from './TasksToolbar.types';

export const TasksGroupModeButton: FC<TasksGroupModeButtonProps> = ({
  groupMode,
  children,
}) => {
  const { setGroupMode, groupMode: currentGroupMode } = useTasks();
  return (
    <button
      className={cn(
        'rounded-full bg-panel px-3 py-1 flex gap-1 transition-colors items-center',
        currentGroupMode === groupMode
          ? 'bg-primary text-white'
          : 'bg-panel text-primaryText'
      )}
      onClick={() => {
        setGroupMode(groupMode);
      }}
    >
      {children}
    </button>
  );
};

import { PropsWithChildren } from 'react';
import { TasksGroupMode } from '../tasks.types';

type TasksGroupModeButtonProps = PropsWithChildren & {
  groupMode: TasksGroupMode;
};

export type { TasksGroupModeButtonProps };

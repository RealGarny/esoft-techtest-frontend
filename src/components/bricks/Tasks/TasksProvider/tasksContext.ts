import { createContext } from 'react';
import { TasksContextType } from '../tasks.types';

const TasksContext = createContext<TasksContextType | null>(null);

export default TasksContext;

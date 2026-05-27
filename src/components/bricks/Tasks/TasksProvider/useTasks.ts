import { useContext } from 'react';
import TasksContext from './tasksContext';

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks cannot be used outside its provider');
  }
  return context;
};

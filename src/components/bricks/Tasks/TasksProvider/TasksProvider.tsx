import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useLoading } from '@/src/hooks/useLoading';
import ApiClient from '@/src/services/api/apiClient';
import { TaskDto } from '@/src/types/entities/Task';
import { TasksContextType, TasksGroupMode } from '../tasks.types';
import TasksContext from './tasksContext';

const TasksProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, withLoading } = useLoading();
  const [tasks, setTasks] = useState<TasksContextType['tasks']>([]);
  const [groupMode, _setGroupMode] = useState<TasksContextType['groupMode']>(
    TasksGroupMode.None
  );

  const [taskToEdit, setTaskToEdit] =
    useState<TasksContextType['taskToEdit']>(null);

  const setGroupMode = (newGroupMode: TasksContextType['groupMode']) => {
    if (groupMode === newGroupMode) {
      _setGroupMode(TasksGroupMode.None);
      return;
    }
    _setGroupMode(newGroupMode);
  };
  const editTaskByIndex = (taskIndex: number) => {
    setTaskToEdit(tasks[taskIndex]);
  };

  const editTask = (payload: TaskDto) => {
    if (payload.dueDate)
      payload.dueDate = new Date(payload.dueDate).toISOString();
    ApiClient.tasks.edit(taskToEdit!.id, payload);
  };
  const endTaskEdit = () => {
    setTaskToEdit(null);
  };
  const createTask = (payload: TaskDto) => {
    ApiClient.tasks.create(payload);
  };

  useEffect(() => {
    withLoading(async () => {
      const tasks = await ApiClient.tasks.getAll();
      setTasks(tasks);
    });
  }, []);

  const value: TasksContextType = {
    isLoading,
    tasks,
    groupMode,
    setGroupMode,
    taskToEdit,
    editTaskByIndex,
    editTask,
    createTask,
    endTaskEdit,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default TasksProvider;

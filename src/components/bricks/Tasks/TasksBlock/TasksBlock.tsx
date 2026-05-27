'use client';

import { useMemo } from 'react';
import { Task, TaskDto } from '@/src/types/entities/Task';
import { FormSchema } from '../../Form/Form.types';
import { taskSchema } from '../../Form/schemas/taskSchema';
import TasksLayoutResolver from '../TaskGroup/TasksLayoutResolver';
import { TasksModal } from '../TasksModal/TasksModal';
import TasksProvider from '../TasksProvider/TasksProvider';
import { useTasks } from '../TasksProvider/useTasks';
import { TasksToolbar } from '../TasksToolbar/TasksToolbar';

const toInputValue = (date: string) =>
  new Date(date).toISOString().slice(0, 16);

//да, гаденько, но лучше за оставшееся время не сделаю
const fillEditTaskSchema = (task: Task) => {
  const schema = {
    ...taskSchema,
    fields: taskSchema.fields.map((field) => {
      switch (field.name) {
        case 'title':
          return { ...field, value: task.title };
        case 'description':
          return { ...field, value: task.description ?? '' };
        case 'priority':
          return { ...field, value: task.priority };
        case 'status':
          return { ...field, value: task.status };
        case 'dueDate':
          return { ...field, value: toInputValue(task.dueDate) ?? '' };
        case 'assigneeId':
          return { ...field, value: task.assignee.id };
        default:
          return { ...field };
      }
    }),
  };
  return schema;
};

const TasksBlockInner = () => {
  const { taskToEdit, editTask, endTaskEdit } = useTasks();
  const editSchema = useMemo<FormSchema | null>(
    () => taskToEdit && fillEditTaskSchema(taskToEdit),
    [taskToEdit]
  );
  return (
    <>
      <TasksToolbar />
      <TasksLayoutResolver />
      <TasksModal
        title='Редактирование задачи'
        open={!!taskToEdit}
        onClose={endTaskEdit}
        schema={editSchema ?? taskSchema}
        requestHandler={(payload) => editTask(payload as TaskDto)} //TODO: fix typing
      />
    </>
  );
};

export const TasksBlock = () => {
  return (
    <TasksProvider>
      <TasksBlockInner />
    </TasksProvider>
  );
};

import { TaskPriority, TaskStatus } from '@/src/types/entities/Task';
import { PRIORITY_LABELS, STATUS_LABELS } from '../../Tasks/consts';
import { FormSchema } from '../Form.types';

const priorityToOptions = () => {
  return Object.entries(PRIORITY_LABELS).map(([key, value]) => {
    return {
      title: value,
      value: key,
    };
  });
};

const statusToOptions = () => {
  return Object.entries(STATUS_LABELS).map(([key, value]) => {
    return {
      title: value,
      value: key,
    };
  });
};

export const taskSchema: FormSchema = {
  fields: [
    {
      title: 'Заголовок',
      type: 'text',
      name: 'title',
      required: true,
    },
    {
      title: 'Описание',
      type: 'text',
      name: 'description',
    },
    {
      title: 'Приоритет',
      type: 'select',
      name: 'priority',
      value: TaskPriority.low,
      options: priorityToOptions(),
    },
    {
      title: 'Статус',
      type: 'select',
      name: 'status',
      value: TaskStatus.todo,
      options: statusToOptions(),
    },
    {
      title: 'Дата окончания',
      type: 'dateTime',
      name: 'dueDate',
      required: true,
    },
    {
      title: 'Ответственный',
      type: 'subordinateSelect',
      name: 'assigneeId',
      required: true,
    },
  ],
};

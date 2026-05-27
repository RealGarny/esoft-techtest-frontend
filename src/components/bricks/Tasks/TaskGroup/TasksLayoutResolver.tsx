import { TasksList } from '../TasksList/TasksList';
import { useTasks } from '../TasksProvider/useTasks';
import { TasksGroupMode } from '../tasks.types';
import { TasksGroupByAsingeeLayout } from './layouts/TasksGroupByAsingeeLayout';
import { TasksGroupByDueDateLayout } from './layouts/TasksGroupByDueDateLayout';

const GROUP_MODE_TO_LAYOUT = {
  [TasksGroupMode.Assignee]: TasksGroupByAsingeeLayout,
  [TasksGroupMode.None]: TasksList,
  [TasksGroupMode.DueDate]: TasksGroupByDueDateLayout,
};

const TasksLayoutResolver = () => {
  const { isLoading, tasks, groupMode } = useTasks();

  if (isLoading) return <p>Загрузка задач</p>;

  const Component = GROUP_MODE_TO_LAYOUT[groupMode];

  return <Component tasks={tasks} />;
};

export default TasksLayoutResolver;

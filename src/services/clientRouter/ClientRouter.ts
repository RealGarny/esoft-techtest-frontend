import LoginRoute from './groups/LoginRoute';
import TasksRoute from './groups/TasksRoute';

export const ClientRouter = {
  login: new LoginRoute(),
  tasks: new TasksRoute(),
};

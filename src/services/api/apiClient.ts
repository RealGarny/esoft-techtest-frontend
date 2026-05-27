import TasksApi from './patches/tasks';
import UserApi from './patches/user';

const ApiClient = {
  user: new UserApi(),
  tasks: new TasksApi(),
};

export default ApiClient;

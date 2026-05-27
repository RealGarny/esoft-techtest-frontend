import { TaskPriority } from '@/src/types/entities/Task';
import { User } from '@/src/types/entities/User';

type UserLoginRequest = {
  login: string;
  password: string;
};
type UserLoginResponse = User;

type TasksCreateRequest = {
  assigneeId: string;
  title: string;
  description?: string;
  dueDate: string;
  priority?: TaskPriority;
};

type TasksCreateResponse = boolean;

export type {
  TasksCreateRequest,
  TasksCreateResponse,
  UserLoginRequest,
  UserLoginResponse,
};

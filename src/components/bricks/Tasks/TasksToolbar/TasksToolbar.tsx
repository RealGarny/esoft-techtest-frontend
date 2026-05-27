import { useUserStore } from '@/src/store/userStore';
import { UserRole } from '@/src/types/entities/User';
import CreateNewTask from './CreateNewTask';
import { TasksGroupByAsigneeButton } from './TasksGroupByAsigneeButton';
import { TasksGroupByDueDateButton } from './TasksGroupByDueDateButton';

export const TasksToolbar = () => {
  const { user } = useUserStore();
  return (
    <div className='flex items-center justify-between mb-4 gap-2 px-4'>
      <div>
        <h3>Группировка</h3>
        <div className='flex gap-2'>
          <TasksGroupByDueDateButton />
          {user?.employee && user.employee.role === UserRole.manager && (
            <TasksGroupByAsigneeButton />
          )}
        </div>
      </div>
      <CreateNewTask />
    </div>
  );
};

import { useState } from 'react';
import { Button } from '@/src/components/ui/Button';
import { ButtonColorVariants } from '@/src/components/ui/Button/styles/color';
import cn from '@/src/services/helpers/cn';
import { TaskDto } from '@/src/types/entities/Task';
import { taskSchema } from '../../Form/schemas/taskSchema';
import { TasksModal } from '../TasksModal/TasksModal';
import { useTasks } from '../TasksProvider/useTasks';

const CreateNewTask = () => {
  const { createTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className={cn(ButtonColorVariants.submit)}
      >
        Новая задача
      </Button>
      <TasksModal
        onClose={() => {
          setIsModalOpen(false);
        }}
        title='Новая задача'
        requestHandler={(payload) => createTask(payload as TaskDto)} //TODO: fix typing
        open={isModalOpen}
        schema={taskSchema}
      />
    </>
  );
};

export default CreateNewTask;

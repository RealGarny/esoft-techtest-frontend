import { FC } from 'react';
import { DefaultModal } from '@/src/components/ui/Modal/variants/DefaultModal';
import { Form } from '../../Form/Form';
import { TasksModalProps } from './TasksModal.types';

export const TasksModal: FC<TasksModalProps> = ({
  open,
  title,
  schema,
  requestHandler,
  onClose,
}) => {
  return (
    <DefaultModal title={title} onOpenChange={onClose} open={open}>
      <Form schema={schema} requestHandler={requestHandler} />
    </DefaultModal>
  );
};

import { DefaultModalProps } from '@/src/components/ui/Modal';
import { FormProps } from '../../Form/Form.types';

type TasksModalProps = FormProps &
  Omit<DefaultModalProps, 'onOpenChange'> & {
    onClose: DefaultModalProps['onOpenChange'];
  };

export type { TasksModalProps };

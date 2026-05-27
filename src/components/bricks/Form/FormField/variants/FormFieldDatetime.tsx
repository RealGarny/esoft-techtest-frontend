import { FC } from 'react';
import { Input } from '@/src/components/ui/Input';
import { FormFieldProps } from '../../Form.types';

export const FormFieldDatetime: FC<FormFieldProps> = ({ props }) => {
  return <Input {...props} type='datetime-local' />;
};

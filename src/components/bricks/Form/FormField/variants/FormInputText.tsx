import { FC } from 'react';
import { Input } from '@/src/components/ui/Input';
import { FormFieldProps } from '../../Form.types';

export const FormInputText: FC<FormFieldProps> = ({ props }) => {
  return <Input {...props} />;
};

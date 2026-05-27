import { FC } from 'react';
import { FormFieldWrapperProps } from '../Form.types';

export const FormFieldWrapper: FC<FormFieldWrapperProps> = ({
  field,
  error,
  children,
}) => {
  return (
    <div>
      {field.title && <p>{field.title}</p>}
      {children}
      {error && <p className='text-roseRed'>{error}</p>}
    </div>
  );
};

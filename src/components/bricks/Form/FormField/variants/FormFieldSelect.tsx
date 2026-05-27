import { FC } from 'react';
import { Input } from '@/src/components/ui/Input';
import { FormFieldProps } from '../../Form.types';

export const FormFieldSelect: FC<FormFieldProps> = ({
  setValue,
  field,
  props,
}) => {
  return (
    //@ts-expect-error Тип долго выводить. надеюсь, потом будет на это время
    <Input.Select
      {...props}
      onValueChange={(v) => {
        if (setValue) {
          setValue(props.name, v);
        }
      }}
      //@ts-expect-error Тип долго выводить. надеюсь, потом будет на это время
      options={field.options ?? []}
      defaultValue={field.value}
    />
  );
};

import { FC, useEffect, useState } from 'react';
import { Input } from '@/src/components/ui/Input';
import UsernameFormatter from '@/src/services/helpers/usernameFormatter';
import { useUserStore } from '@/src/store/userStore';
import { User } from '@/src/types/entities/User';
import { FormFieldProps } from '../../Form.types';

const FormFieldSubordinateSelect: FC<FormFieldProps> = ({
  props,
  setValue,
  field,
}) => {
  const [subordinates, setSubordinates] = useState<User[]>([]);
  const user = useUserStore();

  useEffect(() => {
    const getSubordinates = async () => {
      setSubordinates(await user.getSubordinates());
    };
    getSubordinates();
  }, []);
  return (
    //@ts-expect-error Тип долго выводить. надеюсь, потом будет на это время
    <Input.Select
      {...props}
      options={subordinates.map((subordinate) => ({
        title: UsernameFormatter.normal(subordinate),
        value: subordinate.id,
      }))}
      onValueChange={(v) => {
        setValue(props.name, v);
      }}
      defaultValue={field.value}
    />
  );
};

export default FormFieldSubordinateSelect;

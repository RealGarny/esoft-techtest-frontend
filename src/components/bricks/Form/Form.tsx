import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import cn from '@/src/services/helpers/cn';
import { Button } from '../../ui/Button';
import { ButtonColorVariants } from '../../ui/Button/styles/color';
import { FormProps, FormSchema } from './Form.types';
import { WithFormError } from './FormField/FormField';

const handleDefaultValues = <T extends FormSchema>(schema: T) =>
  schema.fields.reduce<FieldValues>((prev, cur) => {
    if (!cur.value) return prev;
    prev[cur.name] = cur.value;
    return prev;
  }, {});

const DEFAULT_SUBMIT = {
  text: 'Отправить',
};

export const Form = <T extends FormSchema>({
  schema,
  requestHandler,
  submit = DEFAULT_SUBMIT,
}: FormProps<T>) => {
  const { register, formState, handleSubmit, setValue } = useForm({
    defaultValues: handleDefaultValues(schema),
  });
  return (
    <form
      className='flex flex-col gap-2.5'
      onSubmit={handleSubmit(requestHandler as SubmitHandler<FieldValues>)}
    >
      {schema.fields.map((field, index) => (
        <WithFormError
          key={index}
          field={field}
          formState={formState}
          register={register}
          setValue={setValue}
        />
      ))}
      <Button
        {...submit.props}
        className={cn(ButtonColorVariants.submit, submit.props?.className)}
        type='submit'
      >
        {submit.text}
      </Button>
    </form>
  );
};

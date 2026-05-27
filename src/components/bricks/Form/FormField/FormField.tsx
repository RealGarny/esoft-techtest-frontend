import { FC } from 'react';
import { WithFormErrorProps } from '../Form.types';
import { FormFieldWrapper } from './FormFieldWrapper';
import formInputStore from './formInputStore';

const handleError = (
  formState: WithFormErrorProps['formState'],
  field: WithFormErrorProps['field']
) => {
  const errorObject = formState.errors[field.name];
  if (!errorObject || typeof errorObject.message !== 'string') return;

  return errorObject.message.length ? errorObject.message : 'Обязательное поле';
};

export const WithFormError: FC<WithFormErrorProps> = ({
  field,
  register,
  formState,
  setValue,
}) => {
  const Component = formInputStore[field.type];
  if (!Component) {
    console.error(`unknown field type "${field.type}"`);
    return null;
  }
  //TODO: если в будущем появится время, можно сделать изменения стилей поля при ошибке
  return (
    <FormFieldWrapper error={handleError(formState, field)} field={field}>
      <Component
        props={{
          ...register(field.name, {
            required: field.required,
            validate: field.validate,
          }),
        }}
        setValue={setValue}
        field={field}
      />
    </FormFieldWrapper>
  );
};

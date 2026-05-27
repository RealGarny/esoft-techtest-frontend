import { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import {
  FieldValues,
  FormState,
  SetFieldValue,
  UseFormRegister,
  Validate,
} from 'react-hook-form';
import { InputSelectOption } from '../../ui/Input/variants/Select/InputSelect.types';

type FormSchemaField<Type extends string, Value, T = {}> = {
  name: string;
  type: Type;
  title?: string;
  value?: Value;
  required?: string | boolean;
  validate?: Validate<Value, FieldValues>;
} & T;

type FormTextField = FormSchemaField<'text', string>;
type FormPasswordField = FormSchemaField<'password', string>;
type FormDateTimeField = FormSchemaField<'dateTime', string>;
type FormSelectField = FormSchemaField<
  'select',
  string,
  { options: InputSelectOption[] }
>;
type FormSubordinateSelectField = FormSchemaField<'subordinateSelect', string>;

type FormFieldCollection =
  | FormTextField
  | FormPasswordField
  | FormDateTimeField
  | FormSelectField
  | FormSubordinateSelectField;

type FormFieldProps = {
  props: ComponentProps<'input'>;
  setValue: SetFieldValue<FieldValues>;
  field: FormFieldCollection;
};

type WithFormErrorProps = Pick<FormFieldProps, 'field' | 'setValue'> & {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
};

type FormFieldWrapperProps = PropsWithChildren & {
  field: FormFieldCollection;
  error?: string;
  children: ReactNode;
};

type FieldStore = Record<FormFieldCollection['type'], FC<FormFieldProps>>;

type FormSchema = {
  fields: FormFieldCollection[];
};

type FieldUnion<T extends FormSchema> = T['fields'][number];
type FormRequestHandler<T extends FormSchema> = (
  result: { [F in FieldUnion<T> as F['name']]: F['value'] }
) => void;

type FormProps<T extends FormSchema = FormSchema> = {
  schema: T;
  requestHandler: FormRequestHandler<T>;
  submit?: {
    text?: string;
    props?: ComponentProps<'button'>;
  };
};

export type {
  FieldStore,
  FormFieldProps,
  FormFieldWrapperProps,
  FormProps,
  FormSchema,
  WithFormErrorProps,
};

import { FieldStore } from '../Form.types';
import { FormFieldDatetime } from './variants/FormFieldDatetime';
import { FormFieldPassword } from './variants/FormFieldPassword';
import { FormFieldSelect } from './variants/FormFieldSelect';
import FormFieldSubordinateSelect from './variants/FormFieldSubordinateSelect';
import { FormInputText } from './variants/FormInputText';

const formInputStore: FieldStore = {
  text: FormInputText,
  password: FormFieldPassword,
  dateTime: FormFieldDatetime,
  select: FormFieldSelect,
  subordinateSelect: FormFieldSubordinateSelect,
};

export default formInputStore;

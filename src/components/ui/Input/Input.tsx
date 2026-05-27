import { InputType } from './Input.types';
import { InputSelect } from './variants/Select/InputSelect';
import { InputText } from './variants/Text/InputText';

const Input: InputType = (p) => {
  return <InputText {...p} />;
};
Input.Select = InputSelect;

export default Input;

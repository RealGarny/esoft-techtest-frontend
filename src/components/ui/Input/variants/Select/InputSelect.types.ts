import { SelectPrimitiveProps } from './SelectPrimitives.types';

type InputSelectOption = {
  title: string;
  value: string;
};

type InputSelectProps = SelectPrimitiveProps & {
  options: InputSelectOption[];
};

export type { InputSelectOption, InputSelectProps };

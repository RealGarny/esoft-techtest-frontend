import { FC } from 'react';
import { InputSelectProps } from './variants/Select/InputSelect.types';
import { InputTextProps } from './variants/Text/InputText.types';

type InputType = FC<InputTextProps> & { Select: FC<InputSelectProps> };

export type { InputType };

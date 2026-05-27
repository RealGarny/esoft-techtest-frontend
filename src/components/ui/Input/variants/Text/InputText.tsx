import { FC } from 'react';
import cn from '@/src/services/helpers/cn';
import { InputTextProps } from './InputText.types';

export const InputText: FC<InputTextProps> = ({ className, ...other }) => (
  <input className={cn(className, 'inputContainer')} {...other}></input>
);

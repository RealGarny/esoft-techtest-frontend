import { FC } from 'react';
import { InputSelectProps } from './InputSelect.types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './SelectPrimitives';

export const InputSelect: FC<InputSelectProps> = ({
  options,
  defaultValue,
  ...props
}) => (
  <Select {...props} defaultValue={defaultValue}>
    <SelectTrigger className='inputContainer flex items-center justify-between'>
      <SelectValue />
    </SelectTrigger>
    <SelectContent
      position='popper'
      sideOffset={8}
      className='bg-background border border-border rounded-md w-(--radix-select-trigger-width) z-50'
    >
      {options.map((option) => (
        <SelectItem
          className='px-3 py-2 transition-colors hover:bg-panel data-[state=checked]:bg-panel'
          key={option.value}
          value={option.value}
        >
          {option.title}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

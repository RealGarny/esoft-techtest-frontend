'use client';

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';
import * as React from 'react';
import cn from '@/src/services/helpers/cn';
import {
  SelectPrimitiveContentProps,
  SelectPrimitiveProps,
  SelectPrimitiveTriggerProps,
  SelectPrimitiveValueProps,
} from './SelectPrimitives.types';

function Select({ ...props }: SelectPrimitiveProps) {
  return <SelectPrimitive.Root data-slot='select' {...props} />;
}

function SelectValue({ ...props }: SelectPrimitiveValueProps) {
  return <SelectPrimitive.Value data-slot='select-value' {...props} />;
}

function SelectTrigger({ children, ...props }: SelectPrimitiveTriggerProps) {
  return (
    <SelectPrimitive.Trigger data-slot='select-trigger' {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className='pointer-events-none size-4' />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({ children, ...props }: SelectPrimitiveContentProps) {
  return (
    <SelectPrimitive.Content data-slot='select-content' {...props}>
      {children}
    </SelectPrimitive.Content>
  );
}

function SelectItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot='select-item'
      className={cn('cursor-pointer', className)}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot='select-scroll-up-button'
      className={cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot='select-scroll-down-button'
      className={cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectItem,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
};

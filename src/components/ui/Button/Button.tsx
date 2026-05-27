import { ComponentProps, FC } from 'react';
import cn from '@/src/services/helpers/cn';

export const Button: FC<ComponentProps<'button'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn('px-3 py-2 rounded-md cursor-pointer', className)}
    >
      {children}
    </button>
  );
};

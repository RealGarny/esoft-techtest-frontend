import { ComponentProps, FC } from 'react';
import cn from '@/src/services/helpers/cn';

export const Badge: FC<ComponentProps<'span'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <span
      {...props}
      className={cn(
        'inline-flex items-center rounded-full px-2 py-1 t11',
        className
      )}
    >
      {children}
    </span>
  );
};

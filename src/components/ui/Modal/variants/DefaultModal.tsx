import { XIcon } from 'lucide-react';
import { FC } from 'react';
import { Button } from '@/src/components/ui/Button';
import cn from '@/src/services/helpers/cn';
import { DefaultModalProps } from '../Modal.types';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '../ModalPrimitives';

export const DefaultModal: FC<DefaultModalProps> = ({
  className,
  children,
  showCloseButton = true,
  open,
  onOpenChange,
  title,
  ...props
}) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent
          data-slot='dialog-content'
          aria-describedby={undefined}
          className={cn(
            'fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-panel border border-border p-4 text-sm duration-100 outline-none sm:max-w-sm',
            className
          )}
          {...props}
        >
          <DialogTitle asChild>
            <h3>{title}</h3>
          </DialogTitle>
          {children}
          {showCloseButton && (
            <DialogClose data-slot='dialog-close' asChild>
              <Button className='absolute top-2 right-2 px-1! py-1! hover:bg-background'>
                <XIcon />
                <span className='sr-only'>Close</span>
              </Button>
            </DialogClose>
          )}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

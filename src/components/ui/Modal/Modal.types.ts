import { DialogContent } from './ModalPrimitives';

type DefaultModalProps = React.ComponentProps<typeof DialogContent> & {
  showCloseButton?: boolean;
  open?: boolean;
  onOpenChange: (v: boolean) => void;
};

export type { DefaultModalProps };

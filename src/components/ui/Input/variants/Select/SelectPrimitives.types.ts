import { Select as SelectPrimitive } from 'radix-ui';

type SelectPrimitiveProps = React.ComponentProps<typeof SelectPrimitive.Root>;

type SelectPrimitiveValueProps = React.ComponentProps<
  typeof SelectPrimitive.Value
>;

type SelectPrimitiveTriggerProps = React.ComponentProps<
  typeof SelectPrimitive.Trigger
> & {
  size?: 'sm' | 'default';
};

type SelectPrimitiveContentProps = React.ComponentProps<
  typeof SelectPrimitive.Content
>;

type SelectPrimitiveItemProps = React.ComponentProps<
  typeof SelectPrimitive.Item
>;

type SelectPrimitiveScrollUpButtonProps = React.ComponentProps<
  typeof SelectPrimitive.ScrollUpButton
>;

type SelectPrimitiveScrollDownButtonProps = React.ComponentProps<
  typeof SelectPrimitive.ScrollDownButton
>;

export type {
  SelectPrimitiveContentProps,
  SelectPrimitiveItemProps,
  SelectPrimitiveProps,
  SelectPrimitiveScrollDownButtonProps,
  SelectPrimitiveScrollUpButtonProps,
  SelectPrimitiveTriggerProps,
  SelectPrimitiveValueProps,
};

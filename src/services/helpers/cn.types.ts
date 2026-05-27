type ConditionalTypes = boolean | undefined | null;

type ClassnamesConditionObject = Record<string, ConditionalTypes>;

type ClassnamesValidEntries =
  | ClassnamesConditionObject
  | string
  | ConditionalTypes;

export type { ClassnamesConditionObject, ClassnamesValidEntries };

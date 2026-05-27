import { ClassnamesConditionObject, ClassnamesValidEntries } from './cn.types';

const mergeObject = (entry: ClassnamesConditionObject) => {
  return Object.keys(entry)
    .reduce((prev, cur) => {
      if (entry[cur]) {
        prev.push(cur.trim());
      }
      return prev;
    }, [] as string[])
    .join(' ');
};

const cn = (...entries: ClassnamesValidEntries[]) => {
  return entries
    .map((entry) => {
      if (typeof entry === 'object' && entry !== null) {
        return mergeObject(entry);
      }
      if (typeof entry === 'string') {
        return entry.trim();
      }
      return '';
    })
    .join(' ');
};

export default cn;

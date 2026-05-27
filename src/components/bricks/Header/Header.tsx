'use client';

import { useUserStore } from '@/src/store/userStore';

export const Header = () => {
  const { user } = useUserStore();

  return (
    <>
      <div className='invisible min-h-20' />
      <div className='flex absolute justify-between w-full top-0 left-0 py-4 bg-panel px-2'>
        <p>Todo-app</p>
        <div>{user && <div>{user.firstName}</div>}</div>
      </div>
    </>
  );
};

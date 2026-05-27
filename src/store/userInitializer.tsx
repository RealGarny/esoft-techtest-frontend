'use client';

import { useEffect } from 'react';
import { User } from '../types/entities/User';
import { useUserStore } from './userStore';

export default function UserInitializer({ user }: { user: User }) {
  const userStore = useUserStore();

  useEffect(() => {
    userStore.login(user);
  }, [user]);

  return null;
}

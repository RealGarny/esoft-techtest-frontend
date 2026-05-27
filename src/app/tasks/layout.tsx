import axios from 'axios';
import { cookies } from 'next/headers';
import { PropsWithChildren } from 'react';
import UserInitializer from '@/src/store/userInitializer';

export default async function TasksLayout({ children }: PropsWithChildren) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  //TODO: задвоение в proxy;
  const { data: user } = await axios.get(
    `${process.env.NEXT_API_URL}/auth/me`,
    {
      headers: {
        Cookie: `token=${token}`,
      },
    }
  );

  return (
    <>
      <UserInitializer user={user} />
      {children}
    </>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { Form } from '@/src/components/bricks/Form/Form';
import loginSchema from '@/src/components/bricks/Form/schemas/loginSchema';
import { useLoading } from '@/src/hooks/useLoading';
import { useUserState } from '@/src/hooks/useUser';
import { ClientRouter } from '@/src/services/clientRouter/ClientRouter';
import { UserDto } from '@/src/types/entities/User';

const LOGIN_SUBMIT = {
  text: 'Войти',
};

const LOGIN_CONFIG = {
  title: 'Добро пожаловать!',
  subtitle: 'Войдите в систему',
};

const Page = () => {
  const router = useRouter();
  const { isLoading, withLoading } = useLoading();
  const user = useUserState();

  const requestHandler = (res: UserDto) => {
    withLoading(() => user.tryToLogin(res));
    router.push(ClientRouter.tasks.get());
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-sm px-4 bg-panel rounded-2xl p-7 shadow-xl'>
        <div className='flex flex-col gap-0.5 items-center mb-5 text-center'>
          <h2 className='font-medium text-primary'>{LOGIN_CONFIG.title}</h2>
          <p className='opacity-80 t17'>{LOGIN_CONFIG.subtitle}</p>
        </div>
        <Form
          schema={loginSchema}
          requestHandler={(payload) => requestHandler(payload as UserDto)} //TODO: fix typing
          submit={{
            ...LOGIN_SUBMIT,
            text: isLoading ? 'Загрузка...' : LOGIN_SUBMIT.text,
          }}
        />
      </div>
    </div>
  );
};

export default Page;

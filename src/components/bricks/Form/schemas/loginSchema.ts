import { FormSchema } from '../Form.types';

const loginSchema: FormSchema = {
  fields: [
    {
      type: 'text',
      title: 'Логин',
      name: 'login',
      required: true,
    },
    {
      type: 'password',
      title: 'Пароль',
      name: 'password',
      required: true,
    },
  ],
};

export default loginSchema;

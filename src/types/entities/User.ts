enum UserRole {
  employee = 'EMPLOYEE',
  manager = 'MANAGER',
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string | null;
  employee: {
    role: UserRole;
  } | null;
  login: string;
}

type UserDto = Pick<User, 'login'> & {
  password: string;
};

export type { User, UserDto };
export { UserRole };

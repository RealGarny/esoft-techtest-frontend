import ApiClient from '../services/api/apiClient';
import { useUserStore } from '../store/userStore';
import { UserDto } from '../types/entities/User';

export const useUserState = () => {
  const userStore = useUserStore();

  const tryToLogin = async (userDto: UserDto) => {
    const response = await ApiClient.user.login(userDto);
    userStore.login(response);
  };
  const logout = async () => {
    const response = await ApiClient.user.logout();
    if (!response.ok) {
      console.error('failed to logout');
      return;
    }
    userStore.logout();
  };

  return { tryToLogin, logout, user: userStore.user };
};

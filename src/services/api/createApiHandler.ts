import axios from 'axios';
import { redirect } from 'next/navigation';
import { ClientRouter } from '../clientRouter/ClientRouter';

const createApiHandler = () => {
  const apiHandler = axios.create({
    baseURL: process.env.NEXT_API_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });

  apiHandler.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401 && typeof window !== 'undefined') {
        redirect(ClientRouter.login.get());
      }
      return Promise.reject(error);
    }
  );

  return apiHandler;
};

export default createApiHandler;

import { AxiosError } from 'axios';
import { axiosInstance } from './config';

const signIn = async (userInfo: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post('/auth/signin', userInfo);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.error(error);
  }
};

export const authAPI = { signIn };

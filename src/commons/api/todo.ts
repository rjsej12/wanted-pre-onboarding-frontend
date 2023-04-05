import { AxiosError } from 'axios';
import { axiosInstance } from './config';

const createTodo = async (todo: string) => {
  try {
    const response = await axiosInstance.post('/todos', { todo });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.error(error);
  }
};

const getTodos = async () => {
  try {
    const { data } = await axiosInstance.get('/todos');

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.error(error);
  }
};

const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
  try {
    const response = await axiosInstance.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.error(error);
  }
};

const deleteTodo = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/todos/${id}`);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.error(error);
  }
};

export const todoAPI = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};

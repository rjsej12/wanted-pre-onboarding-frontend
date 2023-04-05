import { useCallback, useState } from 'react';
import { todoAPI } from '../../../commons/api/todo';
import { Todo } from '../types/todo.types';

export default function useGetTodos(): [Todo[], () => Promise<void>] {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = useCallback(async () => {
    const res = await todoAPI.getTodos();
    setTodos(res);
  }, []);

  return [todos, getTodos];
}

import styled from '@emotion/styled';
import { createContext, useEffect } from 'react';
import useGetTodos from '../../commons/hooks/useGetTodos';
import { Todo } from '../../commons/types/todo.types';
import TodoHeader from './TodoHeader/TodoHeader.container';
import TodoList from './TodoList/TodoList.container';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 200px;
  width: 400px;
  gap: 20px;
`;

interface Props {
  todos: Todo[];
  getTodos: () => Promise<void> | void;
}

export const ToDoContext = createContext<Props>({
  todos: [],
  getTodos: () => {
    return;
  },
});

export default function Todos() {
  const [todos, getTodos] = useGetTodos();

  const value = { todos, getTodos };

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <Wrapper>
      <ToDoContext.Provider value={value}>
        <TodoHeader />
        <TodoList />
      </ToDoContext.Provider>
    </Wrapper>
  );
}

import { useContext } from 'react';
import { ToDoContext } from '../Todos';
import TodoListUI from './TodoList.presenter';

export default function TodoList() {
  const { todos } = useContext(ToDoContext);
  return <TodoListUI todos={todos} />;
}

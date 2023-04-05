import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { todoAPI } from '../../../../commons/api/todo';
import { ToDoContext } from '../Todos';
import TodoHeaderUI from './TodoHeader.presenter';

export default function TodoHeader() {
  const [newTodo, setNewTodo] = useState('');
  const { getTodos } = useContext(ToDoContext);

  const handleChangeNewTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTodo) return alert('할일을 입력해 주세요');

    await todoAPI.createTodo(newTodo);
    getTodos();
    setNewTodo('');
  };

  return <TodoHeaderUI handleChangeNewTodo={handleChangeNewTodo} handleSubmit={handleSubmit} newTodo={newTodo} />;
}

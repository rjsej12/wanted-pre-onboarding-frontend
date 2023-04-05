import { ChangeEvent, useContext, useState } from 'react';
import { todoAPI } from '../../../../commons/api/todo';
import { ToDoContext } from '../Todos';
import TodoItemUI from './TodoItem.presenter';
import { ITodoItemProps } from './TodoItem.types';

export default function TodoItem(props: ITodoItemProps) {
  const { id, isCompleted, todo } = props.todo;
  const { getTodos } = useContext(ToDoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(todo);

  const handleClickCheckbox = async () => {
    await todoAPI.updateTodo(id, todo, !isCompleted);
    getTodos();
  };

  const handleChangeModifyInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateTodo(e.target.value);
  };

  const toggleIsEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const handleClickModifyButton = () => {
    toggleIsEditing();
  };

  const handleClickDeleteButton = async () => {
    await todoAPI.deleteTodo(id);
    getTodos();
  };

  const handleClickSubmitButton = async () => {
    if (todo === updateTodo) return alert('할일을 수정해주세요');

    await todoAPI.updateTodo(id, updateTodo, isCompleted);
    toggleIsEditing();
    getTodos();
  };

  const handleClickCancelButton = () => {
    toggleIsEditing();
  };

  return (
    <TodoItemUI
      todo={props.todo}
      updateTodo={updateTodo}
      isEditing={isEditing}
      handleClickCheckbox={handleClickCheckbox}
      handleClickModifyButton={handleClickModifyButton}
      handleClickDeleteButton={handleClickDeleteButton}
      handleClickSubmitButton={handleClickSubmitButton}
      handleClickCancelButton={handleClickCancelButton}
      handleChangeModifyInput={handleChangeModifyInput}
    />
  );
}

import { ChangeEvent } from 'react';
import { Todo } from '../../../commons/types/todo.types';

export interface ITodoItemProps {
  todo: Todo;
}

export interface ITodoItemUIProps {
  todo: Todo;
  updateTodo: string;
  isEditing: boolean;
  handleClickCheckbox: () => Promise<void>;
  handleClickModifyButton: () => void;
  handleClickDeleteButton: () => Promise<void>;
  handleClickSubmitButton: () => Promise<void>;
  handleClickCancelButton: () => void;
  handleChangeModifyInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICheckCircleProps {
  checked: boolean;
}

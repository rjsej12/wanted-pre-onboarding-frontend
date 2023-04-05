import { Todo } from '../../../commons/types/todo.types';
import TodoItem from '../TodoItem/TodoItem.container';
import { List } from './TodoList.style';

export default function TodoListUI(props: any) {
  return (
    <List>
      {props.todos?.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
}

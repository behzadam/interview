import { Todo } from "../types/todo";
import { TodoDelete } from "./todo-delete";

type Props = {
  todo: Todo;
};
export const TodoListItem = ({ todo }: Props): JSX.Element => {
  return (
    <tr>
      <td>{todo.text}</td>
      <td width={100}>
        <TodoDelete id={todo.id} />
      </td>
    </tr>
  );
};

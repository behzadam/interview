import { Todo } from "../types/todo";
import { TodoDelete } from "./todo-delete";
import { TodoEdit } from "./todo-edit";

type Props = {
  todo: Todo;
};
export const TodoListItem = ({ todo }: Props): JSX.Element => {
  return (
    <tr>
      <td>{todo.text}</td>
      <td width={300}>
        <div className="flex gap-1">
          <TodoDelete id={todo.id} />
          <TodoEdit todo={todo} />
        </div>
      </td>
    </tr>
  );
};

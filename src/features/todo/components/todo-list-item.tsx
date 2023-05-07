import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
};
export const TodoListItem = ({ todo }: Props): JSX.Element => {
  return (
    <tr>
      <td>{todo.text}</td>
    </tr>
  );
};

import { PlaceholderNoData } from "@/components/placeholder";
import { Todo } from "../types/todo";
import { TodoListItem } from "./todo-list-item";

type Props = {
  todos?: Todo[];
};
export const TodoList = ({ todos }: Props): JSX.Element => {
  if (!todos) return <PlaceholderNoData />;
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => {
            return <TodoListItem todo={todo} key={todo.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

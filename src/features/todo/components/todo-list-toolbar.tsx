import { TodoAdd } from "./todo-add";

export const TodoListToolbar = ({ ...rest }): JSX.Element => {
  return (
    <div className="flex items-center justify-between w-full" {...rest}>
      <h1 className="mb-4 font-mono">Todos</h1>
      <TodoAdd />
    </div>
  );
};

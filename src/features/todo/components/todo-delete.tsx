import { Show } from "@/components/show";
import { useState } from "react";
import { useDeleteTask } from "../api/delete-task";

type Props = {
  id: string;
};
export const TodoDelete = ({ id }: Props): JSX.Element => {
  const { onDelete } = useDeleteTask();
  const [confirm, setConfirm] = useState<boolean>(false);
  const onToggleConfirm = () => {
    setConfirm((confirm) => !confirm);
  };
  return (
    <section className="flex">
      <Show when={!confirm}>
        <button className="btn btn-xs" onClick={onToggleConfirm}>
          Delete
        </button>
      </Show>
      <Show when={confirm}>
        <div className="flex gap-1">
          <button className="btn btn-xs btn-error" onClick={() => onDelete(id)}>
            Delete
          </button>
          <button className="btn btn-xs" onClick={onToggleConfirm}>
            Cancel
          </button>
        </div>
      </Show>
    </section>
  );
};

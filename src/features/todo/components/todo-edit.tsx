import { Modal } from "@/components/modal";
import { FormEventHandler, useState } from "react";
import { useEditTask } from "../api/edit-task";
import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
};
export const TodoEdit = ({ todo }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [text, setText] = useState<string>(todo.text);
  const { submit } = useEditTask({
    onSuccess: () => setOpenModal(false),
  });
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!text) return;
    submit({
      id: todo.id,
      text,
    });
  };
  return (
    <>
      <button className="btn btn-xs" onClick={() => setOpenModal(true)}>
        Edit
      </button>
      <Modal show={openModal} showModal={setOpenModal}>
        <form onSubmit={handleSubmit}>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Edit Task</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="w-full input input-bordered"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <label className="label">
              <span className="label-text-alt">
                HINT: Without any from validation!
              </span>
            </label>
          </div>
          <button className="w-full btn" type="submit">
            Save
          </button>
        </form>
      </Modal>
    </>
  );
};

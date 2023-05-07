import { Modal } from "@/components/modal";
import { FormEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAddTask } from "../api/add-task";

export const TodoAdd = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const { submit, isSuccess } = useAddTask({
    onSuccess: () => setOpenModal(false),
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!text) return;
    submit({
      data: {
        id: uuidv4(),
        text,
      },
    });
  };

  return (
    <>
      <button
        className="btn btn-accent btn-sm"
        onClick={() => setOpenModal(true)}
      >
        Add
      </button>
      <Modal show={openModal} showModal={setOpenModal}>
        <form onSubmit={handleSubmit}>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Task</span>
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

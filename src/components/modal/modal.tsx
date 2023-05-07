type Props = {
  show: boolean;
  showModal: (isShow: boolean) => void | boolean;
  children: React.ReactNode;
};

export const Modal = ({ show, showModal, children }: Props): JSX.Element => {
  return (
    <div className={`modal ${show ? "modal-open" : ""}`}>
      <div className="relative modal-box">
        <label
          htmlFor="my-modal-3"
          className="absolute btn btn-sm btn-circle right-4 top-4"
          onClick={() => showModal(false)}
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
};

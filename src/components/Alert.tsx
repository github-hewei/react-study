import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  visible: Boolean;
  onClose: () => void;
}

const Alert = ({ children, visible, onClose }: Props) => {
  if (!visible) {
    return <></>;
  }

  return (
    <div className="alert alert-primary alert-dismissible fade show">
      <button
        type="button"
        className="btn-close"
        // data-bs-dismiss="alert"
        onClick={onClose}
        aria-label="Close"
      ></button>
      {children}
    </div>
  );
};

export default Alert;

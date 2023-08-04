import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

function Modal({ variant = "modal", closeModal, children }) {
  return createPortal(
    <div className={styles.backDrop} onClick={() => closeModal(false)}>
      <div className={styles[variant]} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}

Modal.propTypes = {
  variant: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;

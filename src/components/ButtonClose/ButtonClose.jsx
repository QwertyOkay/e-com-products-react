import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PropTypes from "prop-types";
import styles from "./ButtonClose.module.scss";

function ButtonClose({ variant = "closeBtn", type = "button", onClick }) {
  return (
    <button type={type} className={styles[variant]} onClick={onClick}>
      <CloseOutlinedIcon fontSize="large" />
    </button>
  );
}

ButtonClose.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonClose;

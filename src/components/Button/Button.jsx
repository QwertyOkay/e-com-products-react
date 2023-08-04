import PropTypes from "prop-types";
import styles from "./Button.module.scss";

function Button({
  variant = "btn",
  ariaLabel,
  title,
  type = "button",
  onClick,
  component,
}) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={styles[variant]}
      onClick={onClick}
    >
      {component} {title}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  ariaLabel: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  component: PropTypes.object,
};

export default Button;

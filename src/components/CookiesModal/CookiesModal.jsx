import { SetCookies } from "hooks/Cookies";
import Button from "components/Button";
import styles from "./CookiesModal.module.scss";

const CookiesModal = ({ showCookies }) => {
  function checkCookie() {
    showCookies(false);
    SetCookies("leprechaunoti", JSON.stringify(true));
  }

  return (
    <>
      <div className={styles.cookieBar}>
        <p className={styles.cookieText}>
          We kindly seek your consent to use cookies as per our policies,
          allowing you to proceed with accessing and exploring our website.
        </p>
        <Button
          variant="btnCookies"
          title={"Accept"}
          onClick={() => checkCookie()}
        />
      </div>
    </>
  );
};

export default CookiesModal;

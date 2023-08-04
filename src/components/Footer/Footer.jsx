import { useState } from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BeInTouch from "components/BeInTouch/BeInTouch";
import GDPR from "components/FooterModals/GDPR";
import Terms from "components/FooterModals/Terms";
import Privacy from "components/FooterModals/Privacy";
import About from "components/FooterModals/AboutUs";
import Contact from "components/FooterModals/ContactUs";
import Return from "components/FooterModals/Return";
import Delivery from "components/FooterModals/Delivery";
import Warranty from "components/FooterModals/Warranty";
import Logo from "../../images/logo.svg";
import styles from "./Footer.module.scss";

function Footer() {
  const [isOpenGDPR, setIsOpenGDPR] = useState(false);
  const [isOpenTerms, setIsOpenTerms] = useState(false);
  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenReturn, setIsOpenReturn] = useState(false);
  const [isOpenDelivery, setIsOpenDelivery] = useState(false);
  const [isOpenWarranty, setIsOpenWarranty] = useState(false);

  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.top}>
          <li className={styles.beintouch}>
            <BeInTouch />
          </li>
          <li className={styles.item}>
            <h2 className={styles.title}>Customer Service</h2>
            <button type="button" onClick={() => setIsOpenPrivacy(true)}>
              GDPR
            </button>
            <button type="button" onClick={() => setIsOpenTerms(true)}>
              Terms & Conditions
            </button>
            <button type="button" onClick={() => setIsOpenPrivacy(true)}>
              Privacy Policy
            </button>
            <NavLink to="/products" className={styles.link}>
              Products
            </NavLink>
          </li>
          <li className={styles.item}>
            <h2 className={styles.title}>Links</h2>
            <button type="button" onClick={() => setIsOpenAbout(true)}>
              About us
            </button>
            <button type="button" onClick={() => setIsOpenContact(true)}>
              Contact us
            </button>
          </li>
          <li className={styles.item}>
            <h2 className={styles.title}>Orders</h2>
            <button type="button" onClick={() => setIsOpenReturn(true)}>
              Free 30 Day Returns
            </button>
            <button type="button" onClick={() => setIsOpenDelivery(true)}>
              Delivery info
            </button>
            <button type="button" onClick={() => setIsOpenWarranty(true)}>
              Warranty info
            </button>
          </li>
        </ul>
        <ul className={styles.bottom}>
          <li className={styles.left}>
            <NavLink className={styles.logo} to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
            <span className={styles.copyright}>
              Playsmode&copy; 2023 All rights reserved
            </span>
          </li>
          <li className={styles.right}>
            <div className={styles.iconList}>
              <LinkedInIcon
                className={styles.icon}
                onClick={() =>
                  window.open("https://www.linkedin.com", "_blank")
                }
              />
              <FacebookIcon
                className={styles.icon}
                onClick={() =>
                  window.open("https://www.facebook.com", "_blank")
                }
              />
              <InstagramIcon
                className={styles.icon}
                onClick={() =>
                  window.open("https://www.instagram.com", "_blank")
                }
              />
              <TwitterIcon
                className={styles.icon}
                onClick={() => window.open("https://www.twitter.com", "_blank")}
              />
            </div>
          </li>
        </ul>
      </footer>
      {isOpenGDPR && <GDPR showGDPR={setIsOpenGDPR} />}
      {isOpenTerms && <Terms showTerms={setIsOpenTerms} />}
      {isOpenPrivacy && <Privacy showPrivacy={setIsOpenPrivacy} />}
      {isOpenAbout && <About showAbout={setIsOpenAbout} />}
      {isOpenContact && <Contact showContact={setIsOpenContact} />}
      {isOpenReturn && <Return showReturn={setIsOpenReturn} />}
      {isOpenDelivery && <Delivery showDelivery={setIsOpenDelivery} />}
      {isOpenWarranty && <Warranty showWarranty={setIsOpenWarranty} />}
    </>
  );
}

export default Footer;

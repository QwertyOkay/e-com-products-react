import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Cart from "components/Cart";
import ExpandableSearchIcon from "components/ExpandableSearchIcon/ExpandableSearchIcon";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    document.body.style.overflow = "unset";
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [isCartOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <Logo className={styles.svg} />
          </NavLink>
        </div>
        <div className={styles.menuIcon} onClick={handleShowNavbar}>
          {showNavbar ? (
            <CloseIcon
              sx={{
                width: "50px",
                height: "50px",
                color: "black",
                transition: "color 0.9s",
              }}
            />
          ) : (
            <MenuIcon
              sx={{
                width: "50px",
                height: "50px",
                color: "black",
                transition: "color 0.9s",
              }}
            />
          )}
        </div>
        <div
          className={`${styles.navElements}  ${
            showNavbar && `${styles.active}`
          }`}
        >
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <li className={styles.icons}>
          <ExpandableSearchIcon />
          <div
            className={styles.icon}
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <ShoppingCartOutlinedIcon
              sx={{
                borderRadius: "4px",
                transition: "opacity 0.9s",
                color: products.length > 0 ? "#733a2d" : "rgba(0, 0, 0, 0.54)",
              }}
            />
            <span className={styles.amount}>{products.length}</span>
          </div>
        </li>
      </div>
      {isCartOpen && <Cart close={setIsCartOpen} />}
    </header>
  );
}

export default Header;

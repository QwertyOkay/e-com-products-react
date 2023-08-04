import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import styles from "./Categories.module.scss";
import categories from "../../data/categories.json";
import Container from "components/Container/Container";
import Section from "components/Section/Section";

function Categories() {
  const hidden = useMediaQuery("(min-width:720px)");

  return (
    <Section>
      <Container>
        <h2 className={styles.title}>Categories</h2>
        <ul className={styles.categories}>
          {categories?.map((item) => (
            <li
              className={`${styles.item} ${styles[`item-${item.id}`]}`}
              key={item.id}
            >
              <NavLink to={`/products/${item.title}`} className={styles.link}>
                <img
                  src={item.image}
                  alt={item.image}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <span className={styles.itemName}>
                    {item.title.replaceAll("_", " ")}
                  </span>
                  {hidden ? null : (
                    <ArrowCircleRightOutlinedIcon
                      fontSize="large"
                      display={hidden ? "none" : "block"}
                    />
                  )}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default Categories;

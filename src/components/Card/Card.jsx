import { Link } from "react-router-dom";
import reduceTitle from "helpers/reduceTitle";
import styles from "./Card.module.scss";

function Card({ item }) {
  const maxChars = 55;
  const reducedTitle = reduceTitle(item?.title, maxChars);

  return (
    <Link to={`/product/${item?.id}`} className={styles.card}>
      <ul className={styles.cardImage}>
        {item?.isNew && <span className={styles.option}>New</span>}
        <li>
          <img src={item?.image} alt={item?.title} className={styles.image} />
        </li>
      </ul>
      <div className={styles.desc}>
        <h2 className={styles.title}>{reducedTitle}</h2>
        <ul className={styles.priceList}>
          {item?.oldPrice && (
            <li className={styles.oldPrice}>{item?.oldPrice}€</li>
          )}
          <li className={styles.price}>
            <span>Price:</span> {item?.price}€
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default Card;

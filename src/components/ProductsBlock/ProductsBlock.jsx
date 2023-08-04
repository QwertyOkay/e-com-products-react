import Container from "components/Container";
import Card from "components/Card";
import products from "data/products.json";
import styles from "./ProductsBlock.module.scss";

function ProductsBlock({ type }) {
  return (
    <Container>
      <div className={styles.top}>
        <h2 className={styles.title}>{type}</h2>
      </div>
      <div className={styles.bottom}>
        {products?.map((item) =>
          item.type === type ? <Card item={item} key={item.id} /> : null
        )}
      </div>
    </Container>
  );
}

export default ProductsBlock;

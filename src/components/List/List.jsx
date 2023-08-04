import { useEffect, useState } from "react";
import products from "../../data/products.json";
import Card from "components/Card";
import "./List.scss";

function List({ cat, maxPrice, sort }) {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    let items = [...products];

    if (cat) {
      items = items.filter(
        (item) => item.category === cat && item.price <= maxPrice
      );
    } else {
      items = items.filter((item) => item.price <= maxPrice);
    }

    if (sort === "asc") {
      items = items.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      items = items.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(items);
  }, [cat, maxPrice, sort]);

  return (
    <div className="list">
      {filteredItems.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;

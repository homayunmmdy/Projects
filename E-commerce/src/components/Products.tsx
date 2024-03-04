import styles from "@/styles/components/Products.module.css";
import { popularProducts } from "@/backend/data";
import Product from "./Product";

const Products = () => {
  return (
    <div className={styles.Container}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;

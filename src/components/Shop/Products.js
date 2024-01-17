import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DummyProducts = [
  {
    id: 1,
    title: "Chocolates",
    price: 300,
    description: "Its a Dairy Milk",
  },
  {
    id: 2,
    title: "Chips",
    price: 50,
    description: "Its a potato chips",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Products = [
  {
    id: "p1",
    price: 6,
    name: 'First Book'
  },
  {
    id: "p2",
    price: 12,
    name: 'Second Book'
  },
  {
    id: "p3",
    price: 18,
    name: 'Third Book'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description='This is a first product - amazing!'
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

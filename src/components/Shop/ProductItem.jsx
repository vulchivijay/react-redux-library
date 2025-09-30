import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import { CartActions } from "./../../store/CartSlice.jsx";

const ProductItem = (props) => {
  const { id, name, price, description } = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(CartActions.addItemToCart({
      id,
      name,
      price,
    }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

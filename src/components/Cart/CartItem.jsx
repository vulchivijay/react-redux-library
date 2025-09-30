import classes from './CartItem.module.css';

import { useDispatch } from 'react-redux';
import { CartActions } from '../../store/CartSlice.jsx';

const CartItem = (props) => {
  const { id, name, price, quantity, total } = props.item;
  const addDispatch = useDispatch();
  const removeDispatch = useDispatch();

  const handleDecrement = () => {
    removeDispatch(CartActions.removeItemFromCart({
      id,
      quantity,
    }));
  }

  const handleIncrement = () => {
    addDispatch(CartActions.addItemToCart({
      id,
      name,
      price,
    }));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

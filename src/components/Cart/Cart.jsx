import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = (props) => {
  const items = useSelector(state => state.Cart.items);
  let total = 0;
  const totalAmount = items.map(state => {
    total += state.totalPrice;
  });

  return (
    <Card className={classes.cart}>
      <h2 className="flex justify-between">
        <span>Your Shopping Cart</span>
        <b>Total: ${total.toFixed(2)}</b>
      </h2>
      <ul>
        {items.map(item => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              total: item.totalPrice,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;

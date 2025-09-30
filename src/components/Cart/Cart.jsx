import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useDispatch } from 'react-redux';
import { sendCartData } from '../../store/CartActions';

const Cart = (props) => {
  const dispatch = useDispatch();
  const items = props.cart.items;
  const totalAmount = props.cart.totalAmount;

  const handleCheckout = () => {
    dispatch(sendCartData({
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
    }));
  }

  return (
    <Card className={classes.cart}>
      <h2 className="flex justify-between">
        <span>Your Shopping Cart</span>
        <b>Total: $ {totalAmount}</b>
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
      <div className="flex justify-end">
        <button onClick={handleCheckout}>Check out</button>
      </div>
    </Card>
  );
};

export default Cart;

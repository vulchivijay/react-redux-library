import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = props.cart.items;
  const totalAmount = props.cart.totalAmount;

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
    </Card>
  );
};

export default Cart;

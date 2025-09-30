import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { UIActions } from "./../../store/UISlice.jsx";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.Cart.totalQuantity);

  const handleCartBtn = () => {
    dispatch(UIActions.toggle());
  }

  return (
    <button className={classes.button} onClick={handleCartBtn}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

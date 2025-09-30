import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/UI/Notifications';
import { sendCartData } from './store/CartActions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const toggleCart = useSelector(state => state.UI.cartIsVisible);
  const cart = useSelector(state => state.Cart);
  const notifications = useSelector(state => state.UI.notifications);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notifications && <Notification
        status={notifications.status}
        title={notifications.title}
        message={notifications.message}
      />}
      <Layout>
        {toggleCart && <Cart cart={cart} />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

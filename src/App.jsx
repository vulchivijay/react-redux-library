import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector } from 'react-redux';

function App() {
  const toggleCart = useSelector(state => state.UI.cartIsVisible);
  const cart = useSelector(state => state.Cart);

  useEffect(() => {
    fetch("https://sample-d3264-default-rtdb.firebaseio.com/cart.json", {
      method: 'PUT',
      body: JSON.stringify(cart),
    })
  }, [cart]);

  return (
    <Layout>
      {toggleCart && <Cart cart={cart} />}
      <Products />
    </Layout>
  );
}

export default App;

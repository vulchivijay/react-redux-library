import { UIActions } from "./UISlice";
import { CartActions } from "./CartSlice";

export const getCartData = () => {
  return async (dispatch) => {
    dispatch(
      UIActions.showNotifications({
        status: 'Retriving',
        title: 'Retriving...',
        message: 'Retriving data to Firebase is in progress...',
      })
    );

    const getRequest = async () => {
      const response = await fetch("https://sample-d3264-default-rtdb.firebaseio.com/cart.json");
      if (!response.ok) {
        throw new Error("API connection failed!");
      }
      let totalAmount = 0;
      const cartData = await response.json();
      cartData?.items?.map(item => {
        totalAmount += item.totalPrice;
      });
      cartData.totalAmount = totalAmount;

      return cartData;
    };

    try {
      const cartData = await getRequest();
      dispatch(
        UIActions.showNotifications({
          status: 'success',
          title: 'Success:',
          message: 'Retriving from Firebase successfully!',
        })
      );
      dispatch(CartActions.replaceCart(cartData));
    }
    catch (error) {
      dispatch(
        UIActions.showNotifications({
          status: 'error',
          title: 'Error',
          message: 'Retriving data from Firebase progress failed!',
        })
      );
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UIActions.showNotifications({
        status: 'sending',
        title: 'Sending...',
        message: 'Sending data to Firebase is in progress...',
      })
    );

    const sendRequest = async () => {
      const response = await fetch("https://sample-d3264-default-rtdb.firebaseio.com/cart.json", {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("API connection failed!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        UIActions.showNotifications({
          status: 'success',
          title: 'Success:',
          message: 'Sent to Firebase successfully!',
        })
      );
    }
    catch (error) {
      dispatch(
        UIActions.showNotifications({
          status: 'error',
          title: 'Error',
          message: 'Sending data to Firebase progress failed!',
        })
      );
    }
  }
}
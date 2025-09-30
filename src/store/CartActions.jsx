import { UIActions } from "./UISlice";

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
        throw new Error("API connection failed!!!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        UIActions.showNotifications({
          status: 'success',
          title: 'Success:',
          message: 'Sent to Firebase successfully!!!',
        })
      );
    }
    catch (error) {
      dispatch(
        UIActions.showNotifications({
          status: 'error',
          title: 'Error',
          message: 'Sending data to Firebase progress failed!!!',
        })
      );
    }
  }
}
import {
  RECEIVE_CART_PRODUCT,
  RECEIVE_CART_PRODUCTS,
  REMOVE_CART_PRODUCT,
} from "../actions/cart_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CART_PRODUCT:
      newState[action.cartProduct.id] = action.cartProduct;
      return newState;
    case RECEIVE_CART_PRODUCTS:
      return action.cartProducts;
    case REMOVE_CART_PRODUCT:
      delete newState[action.cartProductId];
      return newState;

    default:
      return state;
  }
};

export default cartReducer;

import {
  RECEIVE_CART_ITEM,
  RECEIVE_CART_ITEMS,
  REMOVE_CART_ITEM,
} from "../actions/cart_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CART_ITEM:
      newState[action.cartItem.id] = action.cartItem;
      return newState;
    case RECEIVE_CART_ITEMS:
      return action.cartItems;
    case REMOVE_CART_ITEM:
      delete newState[action.cartItemId];
      return newState;

    default:
      return state;
  }
};

export default cartReducer;

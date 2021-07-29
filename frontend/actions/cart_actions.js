import * as CartAPIUtil from "../utils/cart_api_util";

export const RECEIVE_CART_PRODUCT = "RECEIVE_CART_PRODUCT";
export const RECEIVE_CART_PRODUCTS = "RECEIVE_CART_PRODUCTS";
export const REMOVE_CART_PRODUCT = "REMOVE_CART_PRODUCT";

const receiveCartProducts = (cartProducts) => {
  return {
    type: RECEIVE_CART_PRODUCTS,
    cartProducts,
  };
};

const recieveCartProduct = (cartProduct) => {
  return {
    type: RECEIVE_CART_PRODUCT,
    cartProduct,
  };
};

const removeCartProduct = (cartProductId) => {
  return {
    type: REMOVE_CART_PRODUCT,
    cartProductId: cartProductId.id,
  };
};

export const fetchCartProducts = () => (dispatch) => {
  return CartAPIUtil.fetchCartProducts().then((cartProducts) =>
    dispatch(receiveCartProducts(cartProducts))
  );
};

export const fetchCartProduct = (cartProductId) => (dispatch) => {
  return CartAPIUtil.fetchCartProduct(cartProductId).then((cartProduct) =>
    dispatch(receiveCartProduct(cartProduct))
  );
};

export const createCartProduct = (cartProduct) => (dispatch) => {
  return CartAPIUtil.createCartProduct(cartProduct).then((cartProduct) =>
    dispatch(recieveCartProduct(cartProduct))
  );
};

export const deleteCartProduct = (cartProductId) => (dispatch) => {
  return CartAPIUtil.deleteCartProduct(cartProductId).then((cartProductId) =>
    dispatch(removeCartProduct(cartProductId))
  );
};

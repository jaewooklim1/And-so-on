export const fetchCartProducts = () => {
  return $.ajax({
    method: "GET",
    url: `/api/carts`,
  });
};

export const fetchCartProduct = (cartProductId) => {
  return $.ajax({
    method: "GET",
    url: `/api/carts/${cartProductId}`,
  });
};

export const createCartProduct = (cartProduct) => {
  return $.ajax({
    method: "POST",
    url: `/api/carts`,
    data: { cartProduct },
  });
};

export const deleteCartProduct = (cartProductId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/carts/${cartProductId}`,
  });
};

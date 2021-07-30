import { connect } from "react-redux";
import CartProducts from "./cart_products";
import {
  fetchCartProduct,
  fetchCartProducts,
  deleteCartProduct,
  createCartProduct,
} from "../../actions/cart_actions";

const mapStateToProps = (state) => {
  return {
    userCartProducts: state.entities.cartProducts,
    curentUserId: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCartProducts: () => dispatch(fetchCartProducts()),
    fetchCartProduct: (cartProduct) => dispatch(fetchCartProduct(cartProduct)),
    createCartProduct: (cartProduct) =>
      dispatch(createCartProduct(cartProduct)),
    deleteCartProduct: (cartProductId) =>
      dispatch(deleteCartProduct(cartProductId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);

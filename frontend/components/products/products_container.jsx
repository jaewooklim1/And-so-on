import { connect } from "react-redux";
import Products from "./products";
import { selectProducts } from "../../reducers/selectors";
import { fetchProduct, fetchProducts } from "../../actions/product_actions";
import {
  fetchCartProduct,
  createCartProduct,
} from "../../actions/cart_actions";

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  matchedId: ownProps.match.params.productId,
  userCartProducts: state.entities.cartProducts,
  sessionId: state.session.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchProduct: (matchedId) => dispatch(fetchProducts(matchedId)),
  createCartProduct: (currentProduct) =>
    dispatch(createCartProduct(currentProduct)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

import { connect } from "react-redux";
import Products from "./products";
import { selectProducts } from "../../reducers/selectors";
import { fetchProduct, fetchProducts } from "../../actions/product_actions";
import {
  fetchCartProduct,
  createCartProduct,
} from "../../actions/cart_actions";
import { fetchReviews } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  matchedId: ownProps.match.params.productId,
  userCartProducts: state.entities.cartProducts,
  userReviews: state.entities.reviews,
  sessionId: state.session.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchProduct: (matchedId) => dispatch(fetchProducts(matchedId)),
  fetchReviews: (matchedId) => dispatch(fetchReviews(matchedId)),
  createCartProduct: (currentProduct) =>
    dispatch(createCartProduct(currentProduct)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

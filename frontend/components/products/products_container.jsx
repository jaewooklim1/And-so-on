import {connect} from 'react-redux';
import Products from './products';
import {selectProducts} from '../../reducers/selectors';
import {fetchProduct, fetchProducts} from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  matchedId: ownProps.match.params.productId,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchProduct: (matchedId) => dispatch(fetchProducts(matchedId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

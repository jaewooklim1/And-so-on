import { connect } from 'react-redux';
import ProductsIndex from './products_index';
import { fetchProducts } from '../../actions/product_actions';
import { selectProducts } from '../../reducers/selectors';

const mapStateToProps = state => ({
    products: selectProducts(state)
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);
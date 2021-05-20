import { connect } from 'react-redux';
import Products from './products';
import { selectProducts } from '../../reducers/selectors';

const mapStateToProps = state => ({
    products: selectProducts(state)
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
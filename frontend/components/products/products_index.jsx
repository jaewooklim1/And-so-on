import React from 'react';
import ProductIndexSingle from './product_index_single';

class ProductsIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products } = this.props;
    
        return (
            <div className='product-index'>
                <span className='all-products-head'>Products</span>
                <ul className='product-listing'>
                    {products.map(product => <ProductIndexSingle key={product.id} product={product}/>)}
                </ul>
            </div>
        );
        }
    }


export default ProductsIndex;

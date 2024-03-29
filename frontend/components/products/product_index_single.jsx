import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexSingle = ({ product }) => {
    
    return (
        <li className='product-index'>
            <Link className='product-body' to={`/products/${product.id}`}>
                
                <span className='index-product-title'>{product.title}</span>
                <span className='free-ship-text'>FREE Shipping by And-So-On</span>
            </Link>
                <img src={product.photoUrl}/>
        </li>
    )
};

export default ProductIndexSingle;
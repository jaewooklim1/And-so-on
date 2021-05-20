import * as ProductAPIUtil from '../utils/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

const receiveProducts = (products) => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products
    }
};

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
});

export const fetchProducts = (data) => dispatch => {
    return (
        ProductAPIUtil.fetchProducts(data).then(products => dispatch(receiveProducts(products)))
    )
};

export const fetchProduct = (productId) => dispatch => (
    ProductAPIUtil.fetchProduct(productId).then(product => dispatch(receiveProduct(product)))
);

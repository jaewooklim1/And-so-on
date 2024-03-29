import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions';

const productsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product;
            return nextState;

        default:
            return oldState;
    }
};

export default productsReducer;
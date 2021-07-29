import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer";
import cartReducer from "./cart_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  cartProducts: cartReducer,
});

export default entitiesReducer;

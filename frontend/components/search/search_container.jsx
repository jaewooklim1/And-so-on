import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Search from "./search";
import { fetchProducts } from "../../actions/product_actions";

const mapStateToProps = (state) => {
  return {
    items: state.entities.items,
    allProducts: state.entities.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (data) => dispatch(fetchProducts(data)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

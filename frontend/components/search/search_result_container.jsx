import { connect } from "react-redux";
import SearchResult from "./search_result";
import { fetchProducts } from "../../actions/product_actions";
import { withRouter } from "react-router-dom";

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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchResult)
);

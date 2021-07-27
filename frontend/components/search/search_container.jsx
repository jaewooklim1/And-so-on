import { connect } from "react-redux";
import Search from "./search";
import { fetchProducts } from "../../actions/product_actions";

const mapStateToProps = (state) => {
  return {
    items: state.entities.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (data) => dispatch(fetchProducts(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

import { connect } from "react-redux";
import UpdateReviewForm from "./review_form";
import { createReview } from "../../actions/review_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    formType: "Create Review",
    review: {
      user_id: state.session.id,
      title: "",
      body: " ",
      product_id: ownProps.productId,
      rating: 0,
    },
    product: state.entities.products[ownProps.location.productId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (review, productId) => dispatch(createReview(review, productId)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UpdateReviewForm)
);

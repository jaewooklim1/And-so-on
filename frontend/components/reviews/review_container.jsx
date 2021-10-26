import { connect } from "react-redux";
import UpdateReviewForm from "./review_form";
import { fetchReview, updateReview } from "../../actions/review_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    formType: "Update Review",
    review: state.entities.reviews[ownProps.match.params.reviewId],
    user_id: state.session.id,
    product_id: ownProps.match.params.productId,

    product: state.entities.products[ownProps.location.productId],
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    fetchReview: (reviewId, productId) =>
      dispatch(fetchReview(reviewId, productId)),
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UpdateReviewForm)
);

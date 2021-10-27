import { connect } from "react-redux";
import UpdateReviewForm from "./review_form";
import { fetchReview, updateReview } from "../../actions/review_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const review = state.entities.reviews[ownProps.match.params.reviewId];
  // debugger;

  return {
    formType: "Update Review",
    review: review,
    user_id: state.session.id,
    product_id: review.productId,
    product: state.entities.products[review.product_id],
  };
};

const mapDispatchToProps = (dispatch) => {
  // debugger;
  return {
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UpdateReviewForm)
);

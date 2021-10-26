import { connect } from "react-redux";
import UpdateReviewForm from "./review_form";
import { fetchReviews, updateReview } from "../../actions/review_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    formType: "Update Review",
    review: state.entities.reviews[ownProps.match.params.reviewId],
    productId: ownProps.match.params.productId,
    currentUser: state.session.id,
    product: state.entities.products[ownProps.location.productId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UpdateReviewForm)
);

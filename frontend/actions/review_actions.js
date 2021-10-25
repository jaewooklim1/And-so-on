import * as ReviewAPIUtil from "../utils/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const fetchReviews = (productId) => (dispatch) => {
  return ReviewAPIUtil.fetchReviews(productId).then((reviews) =>
    dispatch(receiveReviews(reviews))
  );
};

export const createReview = (review, productId) => (dispatch) => {
  debugger;
  return ReviewAPIUtil.createReview(review, productId).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const updateReview = (review) => (dispatch) => {
  return ReviewAPIUtil.updateReview(review).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const destroyReview = (reviewId) => (dispatch) => {
  return ReviewAPIUtil.destroyReview(reviewId).then((reviewId) =>
    dispatch(removeReview(reviewId))
  );
};

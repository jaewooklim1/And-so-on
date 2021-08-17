import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from "../actions/review_actions";
import merge from "lodash/merge";

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      debugger;
      return Object.assign({}, state, action.review);
    case REMOVE_REVIEW:
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;

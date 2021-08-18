export const fetchReviews = (productId) => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${productId}/reviews`,
  });
};

export const createReview = (review, productId) => {
  return $.ajax({
    method: "POST",
    url: `/api/products/${productId}/reviews`,
    data: { review },
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review: review },
  });
};

export const destroyReview = (reviewId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${reviewId}`,
  });
};

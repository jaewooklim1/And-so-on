import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import empty_star from "../../../app/assets/images/empty_star.svg";
import full_star from "../../../app/assets/images/full_star.svg";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteReview = this.handleDeleteReview.bind(this);
    this.handleEditReview = this.handleEditReview.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.productId);
    // debugger;
  }

  handleEditReview() {
    return () => {
      this.props.history.push("/reviews/edit-review");
    };
  }

  handleDeleteReview(reviewId) {
    // e.preventDefault();
    return () =>
      this.props.destroyReview(reviewId).then(() => window.location.reload());
  }

  // componentDidUpdate() {
  //     // this.componentDidMount();
  // }

  render() {
    const { reviews } = this.props;

    const currentProductId = this.props.match.params.productId;
    // reviews.filter((ele) => {
    //   debugger;
    //   return currentProductId === ele.product_id.toString();
    // });
    // console.log(reviews);

    // debugger;

    const full = <img className="rating-star" src={full_star} />;

    const empty = <img className="rating-star" src={empty_star} />;

    const randInt = Math.floor(Math.random() * 22);
    const yesReviews = this.props.reviews ? (
      <div className="r-container">
        <h2 className="review-header">Top Reviews in the United States</h2>
        <ul className="review-ul">
          {reviews
            .filter((ele) => {
              return currentProductId === ele.product_id.toString();
            })
            .map((review) => {
              const reviewDate = new Date(review.updated_at).toDateString();
              // debugger
              const dataLink = {
                pathname: "/review/edit-review",
                // productId: `${this.props.product.id}`,
                // product: `${this.props.product}`,
                review: `${review}`,
              };

              const reviewButton = this.props.isLoggedIn ? (
                <Link to={dataLink}>
                  <button className="review-buttonz">Edit</button>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <button className="review-buttonz">Edit</button>
                </Link>
              );

              return (
                <div key={review.id} className="review-item">
                  <div className="review-user">
                    <div className="review-username">{review.userName}</div>
                  </div>

                  <div className="review-top">
                    <div className="review-rating">
                      <Rating
                        className="ratingz"
                        initialRating={review.rating}
                        emptySymbol={empty}
                        fullSymbol={full}
                        readonly={true}
                      />
                    </div>

                    <div className="review-title">{review.title}</div>
                  </div>

                  <div className="review-verified">Verified Purchase</div>

                  <div className="review-body">{review.body}</div>

                  {/* <div className="review-helpful-text">
                    {Math.floor(Math.random() * 22)} people found this helpful
                  </div> */}

                  <div className="review-bottom">
                    {/* <div className="review-helpful-button-cont">
                      <button className="review-helpful">Helpful</button>
                    </div> */}
                    {/* <div className="review-abuse">Report abuse</div> */}

                    <div>
                      {this.props.authorId === review.user_id ? (
                        <div className="review-buttons-cont">
                          {/* <button onClick={this.handleEditReview}>Edit</button> */}
                          <button
                            className="review-delete-buttons"
                            onClick={this.handleDeleteReview(review.id)}
                          >
                            Delete
                          </button>
                        </div>
                      ) : null}
                      {/* <button onClick={this.handleDeleteReview(review.id)}>Delete</button> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    ) : (
      "test"
    );

    return yesReviews;
  }
}

export default ReviewIndex;

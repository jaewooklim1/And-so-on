import React from "react";
import Rating from "react-rating";
import empty_star from "../../../app/assets/images/empty_star.svg";
import full_star from "../../../app/assets/images/full_star.svg";

class UpdateReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.review;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    this.props
      .action(this.state)
      .then(() =>
        this.props.history.push(`/products/${this.props.product.id}`)
      );
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const full = <img className="rating-star" src={full_star} />;

    const empty = <img className="rating-star" src={empty_star} />;

    return (
      <div>
        <form
          className="review-form-cont"
          action=""
          onSubmit={this.handleSubmit}
        >
          <h2 className="review-form-title">{this.props.formType}</h2>
          <div className="review-form-product-cont">
            {/* <img src={this.props.product.photos[0]} alt="product-photo" /> */}
            <div className="review-form-product-name">
              {/* {this.props.product.name} */}
            </div>
          </div>

          <div className="review-form-rating-cont">
            <h3 className="review-rating-title">Overall rating</h3>
            <Rating
              initialRating={this.state.rating}
              emptySymbol={empty}
              fullSymbol={full}
              //   onChange={this.updateReview("rating")}
            />
          </div>

          <div className="review-form-review-cont">
            <h3>Add a headline</h3>
            <input
              className="review-form-headline-input"
              type="text"
              onChange={this.update("title")}
              value={this.state.title}
              placeholder="What's most important to know?"
            />

            <h3>Add a written review</h3>
            <textarea
              className="review-form-review-text"
              onChange={this.update("body")}
              value={this.state.body}
              placeholder="What did you like or dislike? What did you use this product for?"
            ></textarea>
          </div>

          <div className="review-form-btn-cont">
            <button className="review-form-btn">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateReviewForm;

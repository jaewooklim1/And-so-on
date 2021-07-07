import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
    // debugger;
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.productId !== this.props.match.params.productId
    ) {
      this.props.fetchProduct();
    }
  }

  render() {
    let product;
    if (this.props.product === undefined) {
      return null;
    } else {
      product = this.props.product;
    }

    return (
      <div className="show">
        <div className="product-show">
          <div className="product-img-container">
            <span className="product-img">
              <img className="product-photo" src={product.photoUrl}></img>
            </span>
          </div>
          <div className="product-text-container">
            <div className="product-title-header">
              <h1 className="product-title">{product.title}</h1>
            </div>
            <div className="product-properties">
              <label className="price">
                Price:
                <span className="Price and Shipping">
                  {' '}
                  ${product.price} & FREE Shipping.
                </span>
              </label>
              <div className="product-show-container">
                <label className="product-show">
                  Year:<span> {product.year}</span>
                </label>
                <br></br>
                <label className="product-show">
                  Category:<span> {product.style}</span>
                </label>
                <br></br>
                <label className="product-show" id="about">
                  About this product
                  <br></br>
                  <span id="description">{product.description}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

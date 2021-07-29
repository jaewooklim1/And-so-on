import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
    this.props.fetchProducts();
    // debugger;
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.productId !== this.props.match.params.productId
    ) {
      this.props.fetchProduct();
    }
  }

  addProduct(currentProduct) {
    this.props.createCartProduct({
      user_id: this.props.sessionId,
      product_id: currentProduct.id,
    });
  }

  addToCart(e) {
    e.preventDefault();

    if (this.props.sessionId) {
      debugger;
      let { product, userCartProducts } = this.props;
      let cartproducts = Object.values(userCartProducts);
      let productsArr = [];
      for (let i = 0; i < cartproducts.length; i++) {
        productsArr.push(cartproducts[i]);
      }
      if (productsArr.includes(product)) {
        return (
          <div>
            <span className="already-added-message">
              already added to your cart
            </span>
          </div>
        );
      } else {
        this.addProduct(product);
      }
    } else {
      this.props.history.push("/login");
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
      <div className="product-page">
        <div className="product-category">
          And-So-On <span id="description">{product.category}</span>
        </div>
        <div className="product-show">
          <div className="split left-product-column">
            <div className="product-img-container">
              <span className="product-img">
                <img className="product-photo" src={product.photoUrl}></img>
              </span>
            </div>
          </div>
          <div className="split center-product-column">
            <div className="product-text-container">
              <div className="product-title-header">
                <h1 className="product-title">{product.title}</h1>
              </div>
              <div className="product-show-container">
                <br></br>
                <div className="product-description">
                  <label className="product-label" id="about">
                    {/* About this product */}
                    <br></br>
                    <span id="description">{product.info}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="split right-product-column">
            <div className="buybox">
              <div className="inner-buybox">
                <label className="price">
                  <div className="price-label">
                    Price:
                    <span className="Price and Shipping">
                      {" "}
                      ${product.price}
                      <br></br>
                    </span>
                  </div>
                  <div className="Free-shipping-tag">
                    <p>
                      Get <strong>Fast, Free Shipping</strong> with
                    </p>

                    <h4>And-So-On Prime</h4>
                    <h5>& Free Returns</h5>
                  </div>
                  <div className="in-stock">
                    <p>In Stock.</p>
                    <div className="in-stock-button">
                      <span
                        class="a-button-text a-declarative"
                        data-action="a-dropdown-button"
                        aria-hidden="true"
                        id="a-autoid-0-announce"
                      >
                        <span class="a-dropdown-label">Qty:</span>
                        <span class="a-dropdown-prompt">1</span>
                      </span>
                    </div>
                  </div>
                  <div className="buybox-button">
                    <button className="add-to-cart" onClick={this.addToCart}>
                      {/* <img
                        className="cart-logo"
                        src="https://i.imgur.com/9pUQTdZ.png"
                      ></img>{" "} */}
                      Add to Cart
                      <div className="product-added">
                        <span className="check-mark">✓</span> Added to Cart
                      </div>
                    </button>
                    <div className="buybox-info">
                      <ul>Secure transaction</ul>
                      <br></br>
                      <ul>Ships from And-So-On</ul>
                      <br></br>
                      <ul>Sold by And-So-On</ul>
                    </div>
                  </div>
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

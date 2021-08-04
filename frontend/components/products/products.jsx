import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  overlay: {
    background: "rgb(0, 0, 0, 0.5)",
    // opacity: "0.5",
    filter: "Alpha(Opacity=50)",
  },

  content: {
    top: "13%",
    left: "88%",
    right: "auto",
    bottom: "auto",
    marginRight: "-60%",
    transform: "translate(-50%, -50%)",
    width: "150px",
    height: "100px",
    background: "white",
    position: "relative",
    opacity: "1 !important",
  },
};

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setIsOpen: false,
      modalIsOpen: false,
    };

    this.addToCart = this.addToCart.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    // debugger
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
          <div className="split-center-product-column">
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
                    <ul className="product-label-description">
                      {product.info}
                    </ul>
                    <br></br>

                    <ul className="product-label-price">
                      Price : {product.price}
                    </ul>
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
                        <span class="a-dropdown-label">Qty: </span>
                        <span class="a-dropdown-prompt">1</span>
                      </span>
                    </div>
                  </div>
                  <div className="buybox-button">
                    <div
                      className="cart-purchase"
                      onMouseClick={this.openModal}
                    >
                      <button className="add-to-cart" onClick={this.addToCart}>
                        {/* <img
                        className="cart-logo"
                        src="https://i.imgur.com/9pUQTdZ.png"
                      ></img>{" "} */}
                        Add to Cart
                        {/* <div className="product-added">
                        <span className="check-mark">✓</span> Added to Cart
                      </div> */}
                      </button>
                      <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        ariaHideApp={false}
                      >
                        {" "}
                      </Modal>
                    </div>

                    <div className="buybox-info">
                      <br></br>
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

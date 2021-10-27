import React, { useEffect, useState, setShow } from "react";
import { Link } from "react-router-dom";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import Modal from "react-bootstrap/Modal";

class CartProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      purchased: false,
    };

    this.emptyCart = this.emptyCart.bind(this);
    this.filledCart = this.filledCart.bind(this);
    this.deleteCartProduct = this.props.deleteCartProduct.bind(this);
    // this.updatedSubtotal = this.updatedSubtotal.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartProducts();
    // debugger;
  }

  componentDidUpdate(prevProps) {
    const prev = Object.values(prevProps.userCartProducts);
    const current = Object.values(this.props.userCartProducts);

    if (prev.length !== current.length) {
      this.props.fetchCartProducts();
    }
  }

  handleCheckout(e) {
    e.preventDefault();
    let userProducts = Object.keys(this.props.userCartProducts);
    debugger;
    console.log(userProducts);

    userProducts.forEach((product) => {
      this.props.deleteCartProduct(product);
    });

    // this.setState({ purchased: true });
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  calculateTotal() {
    let total = 0;
    let userProducts = Object.values(this.props.userCartProducts);
    console.log(userProducts);
    debugger;
    userProducts.forEach((product) => {
      total += product.price;
    });
    return total;
  }

  filledCart() {
    let numProducts = Object.values(this.props.userCartProducts).length;
    let cartProductsArr = Object.keys(this.props.userCartProducts);
    let actualProductsArr = Object.values(this.props.userCartProducts);

    return (
      <div className="cart-container">
        <div className="inner-cart-container">
          <div className="cart-header">Shopping Cart</div>

          <div className="left-side-cart">
            <ul className="cart_items">
              {cartProductsArr.map((cartProductId) => (
                <li className="cart-index-item" key={cartProductId}>
                  <div className="main-cont">
                    <div className="cart-product-details">
                      <img
                        class="column"
                        className="cart-product-photo"
                        src={
                          this.props.userCartProducts[cartProductId].photoUrl
                        }
                      ></img>
                    </div>
                    <br></br>

                    <div className="mid-side-specific-info">
                      <Link
                        className="item-body"
                        to={`/products/${this.props.userCartProducts[cartProductId].id}`}
                      >
                        <div class="column" className="cart-item-title">
                          {this.props.userCartProducts[cartProductId].title}
                        </div>
                      </Link>
                      <br></br>

                      <div class="column" className="cart-product-price">
                        {this.props.userCartProducts[cartProductId].price}
                      </div>
                      <br></br>
                      <span className="in-stock-cart">In Stock</span>
                      <br></br>

                      <div className="qty-delete-row" class="column">
                        <button
                          className="delete-cart-item"
                          onClick={() =>
                            this.props.deleteCartProduct(cartProductId)
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="total-price-container">
          <div className="total-price">
            Subtotal: <span>({this.props.userCartProducts.length}Items) </span>
            <span style={{ fontWeight: "bold" }}>
              ${this.calculateTotal().toFixed(2)}
            </span>
          </div>
          <div className="checkout-button-container"></div>
          <button
            className="checkout-button"
            onClick={(e) => this.handleCheckout(e)}
          >
            Proceed to checkout
            <div className="checkout-message">
              Thank you for your purchase! Your order has been received and is
              being processed.
            </div>
          </button>
        </div>
      </div>
    );
  }

  emptyCart() {
    return (
      <div className="cart-container">
        <div className="inner-cart-container">
          <img
            className="empty-cart-gif"
            src="https://i.imgur.com/NsdZfIP.gif"
          ></img>

          <br></br>
          <div className="empty-cart-message">
            Your And-So-On Shopping Cart is empty.
          </div>
        </div>
        <div className="total-price-container">
          <div className="total-price">
            Subtotal: <span>({this.props.userCartProducts.length}Items) </span>
            <span style={{ fontWeight: "bold" }}>
              ${this.calculateTotal().toFixed(2)}
            </span>
          </div>
          <div className="checkout-button-container"></div>
          <button
            className="checkout-button"
            onClick={(e) => this.handleCheckout(e)}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    );
  }

  render() {
    return Object.values(this.props.userCartProducts).length === 0
      ? this.emptyCart()
      : this.filledCart();
  }
}

export default CartProducts;

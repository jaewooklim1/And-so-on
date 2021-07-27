import React from "react";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: 0,
    };

    this.emptyCart = this.emptyCart.bind(this);
    this.filledCart = this.filledCart.bind(this);
    this.updatedSubtotal = this.updatedSubtotal.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  componentDidUpdate(prevProps) {
    const prev = Object.values(prevProps.userCartItems);
    const current = Object.values(this.props.userCartItems);

    if (prev.length !== current.length) {
      this.props.fetchCartItems();
    }
  }

  render() {
    console.log(this.props.cartProducts);
    console.log(this.props);

    return (
      <div>
        <div></div>
      </div>
    );
  }

  emptyCart() {
    return (
      <div className="cart-container">
        <span className="cart-head" id="empty-cart">
          Shopping Cart
        </span>
        <br></br>
        <span className="empty-cart-message">Your Shopping Cart is empty.</span>
      </div>
    );
  }

  render() {
    return Object.values(this.props.userCartItems).length === 0
      ? this.emptyCart()
      : this.filledCart();
  }
}

export default Cart;

import React from "react";

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
}

export default Cart;

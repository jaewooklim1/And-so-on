import React from "react";
import { Link } from "react-router-dom";

class CartProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };

    this.emptyCart = this.emptyCart.bind(this);
    this.filledCart = this.filledCart.bind(this);
    this.deleteCartProduct = this.props.deleteCartProduct.bind(this);
    // this.updatedSubtotal = this.updatedSubtotal.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartProducts();
    debugger;
  }

  componentDidUpdate(prevProps) {
    const prev = Object.values(prevProps.userCartProducts);
    const current = Object.values(this.props.userCartProducts);

    if (prev.length !== current.length) {
      this.props.fetchCartProducts();
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
                    <div className="mid-side-specific">
                      <Link
                        className="item-body"
                        to={`/products/${this.props.userCartProducts[cartProductId].id}`}
                      >
                        <div class="column" className="cart-item-title">
                          {this.props.userCartProducts[cartProductId].title}
                        </div>
                      </Link>
                      <span className="in-stock-cart">In Stock</span>
                      <div class="column" className="cart-product-price">
                        {this.props.userCartProducts[cartProductId].price}
                      </div>

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

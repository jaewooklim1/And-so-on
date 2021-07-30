import React from "react";
// import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container";

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

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setIsOpen: false,
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // const [modalIsOpen,setIsOpen] = React.useState(false);

  openModal() {
    // debugger
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleLogout() {
    debugger;
    this.props.logout().then(this.props.history.push("/"));
    // (this.props.history.push('/'));
  }

  render() {
    // debugger
    // const display = this.props.currentUser
    return (
      <div className="banner">
        <div className="nav-belt">
          <div className="nav-left">
            <div className="header-logo">
              <Link to="/">
                <div id="and-so-on-logo" />
              </Link>
            </div>
          </div>
          <div className="nav-mid">
            <div className="nav-searchbar">
              <SearchContainer />
            </div>
          </div>
          <div className="nav-right">
            <div
              className="account-dropdown"
              onMouseEnter={this.openModal}
              onMouseLeave={this.closeModal}
            >
              {!this.props.currentUser ? (
                <div className="sign-in-greeting">
                  <Link to="/login">
                    <button className="account-container">
                      <span className="first-navigation-line">
                        Hello, Sign in
                      </span>
                      <br></br>
                      <span className="second-navigation-line">
                        Account & Lists ▾
                      </span>
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="user-signed-in">
                  Hello {this.props.currentUser.email}
                  <br></br>
                  <span className="second-navigation-line">
                    Account & Lists ▾
                  </span>
                </div>
              )}
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
              >
                {/* <p>Welcome, {this.props.currentUser.username}</p> */}

                {!this.props.currentUser ? (
                  <div className="signin-login-dropdown">
                    <Link to="/login">
                      <input
                        className="submit-button-dropdown"
                        type="submit"
                        value="Sign in"
                      />
                      <br></br>
                    </Link>
                    <span className="alt-link" id="new-customer-dropdown">
                      New customer?{" "}
                      <Link to="/signup" id="start-here-link">
                        Start here.
                      </Link>
                    </span>
                  </div>
                ) : (
                  ""
                )}

                {/* <button onClick={this.props.logout}>Log Out</button>   
                        <div>
                        <Link className="signup" to="/signup">Sign Up</Link>
                        <br/>
                        <Link className="login" to="/login">Log In</Link>
                        </div> */}
                {this.props.currentUser ? (
                  <button className="sign-out" onClick={this.handleLogout}>
                    Sign Out
                  </button>
                ) : (
                  ""
                )}
              </Modal>
            </div>
            <div className="cart-icon">
              <Link to="/cart_products">
                <img
                  className="cart-picture"
                  src="https://i.imgur.com/LpGaVU7.png"
                ></img>
              </Link>
              <div className="cart-word">Cart</div>
            </div>
          </div>
        </div>
        <div className="sub-banner">
          <p></p>
          {/* {this.props.currentUser ? display : ""} */}
        </div>
      </div>

      //   </div>
    );
  }
}

export default Greeting;

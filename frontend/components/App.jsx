import React from "react";
import { Route } from "react-router";
import { ProtectedRoute, AuthRoute } from "../utils/route_util";
import login_form_container from "./session/login_form_container";
import signup_form_container from "./session/signup_form_container";
import GreetingContainer from "./greeting/greeting_container";
import { Link, Switch } from "react-router-dom";
import greeting_container from "./greeting/greeting_container";
import ProductsIndexContainer from "./products/products_index_container";
import ProductsContainer from "./products/products_container";
import PicCarousel from "./carousel/carousel";
import Footer from "./footer/footer";
import CartContainer from "./cart/cart_container";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        {/* <h1>And-so-on</h1> */}
      </Link>
      <Route exact path="/" component={greeting_container} />
      <Route path="/products/" component={greeting_container} />
    </header>
    <div className="alexa-stuff">
      <Route exact path="/">
        {/* <PicCarousel></PicCarousel> */}
        <img className="picture-ad" src="https://i.imgur.com/OjMXcyy.jpg" />
        <div className="backgroundColorBlend" />
      </Route>

      <Route exact path="/products/:productId" component={ProductsContainer} />
      <div className="all-products">
        <Route exact path="/" component={ProductsIndexContainer} />
      </div>
    </div>

    <div className="account-creation">
      <Switch>
        <AuthRoute exact path="/login" component={login_form_container} />
        <AuthRoute exact path="/signup" component={signup_form_container} />
      </Switch>
    </div>

    <Route exact path="/" component={Footer} />
    <Route path="/products/" component={Footer} />
  </div>
);

export default App;

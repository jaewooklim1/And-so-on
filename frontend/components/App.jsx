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
import SearchResultContainer from "./search/search_result_container";
import NewReview from "./reviews/new_review_container";
import EditReview from "./reviews/review_container";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/" className="header-link"></Link>
        <Route exact path="/" component={greeting_container} />
        <Route path="/products/" component={greeting_container} />
        <Route path="/search/" component={greeting_container} />
        <Route path="/cart_products/" component={greeting_container} />

        <Route path="/review/" component={greeting_container} />
        <Route path="/review_form/" component={greeting_container} />
        <Route path="/new_review_form/" component={greeting_container} />
      </header>
      <div className="alexa-stuff">
        <Route exact path="/">
          <img className="picture-ad" src="https://i.imgur.com/OjMXcyy.jpg" />
          <div className="backgroundColorBlend" />
        </Route>

        <Route
          exact
          path="/products/:productId"
          component={ProductsContainer}
        />
        <div className="all-products">
          <Route exact path="/" component={ProductsIndexContainer} />
        </div>
        <Route exact path="/">
          <div className="picture-ad-2">
            <div className="backgroundColorBlendTwo" />
            <img
              className="picture-ad-2-img"
              src="https://i.imgur.com/wpocdDT.jpg"
            />
            <div className="backgroundColorBlendThree" />
          </div>
        </Route>
      </div>
      <Route path="/cart_products/" component={CartContainer}></Route>
      <Route path="/search/" component={SearchResultContainer}></Route>

      <Route path="/review/create-review" component={NewReview}></Route>
      <Route
        path="/review/edit-review/:reviewId"
        component={EditReview}
      ></Route>

      <div className="account-creation">
        <Switch>
          <AuthRoute exact path="/login" component={login_form_container} />
          <AuthRoute exact path="/signup" component={signup_form_container} />
        </Switch>
      </div>

      <Route exact path="/" component={Footer} />
      <Route path="/search/" component={Footer} />
      <Route path="/cart_products/" component={Footer} />
      <Route path="/review/" component={Footer} />
      <Route path="/review_form/" component={Footer} />
      <Route path="/new_review_form/" component={Footer} />
    </div>
  );
};

export default App;

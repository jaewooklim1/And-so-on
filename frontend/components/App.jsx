import React from "react";
import { Route } from "react-router";
import { AuthRoute } from "../utils/route_util";
import login_form_container from "./session/login_form_container";
import signup_form_container from "./session/signup_form_container";
import GreetingContainer from "./greeting/greeting_container";
import { Link, Switch } from 'react-router-dom';
import greeting_container from "./greeting/greeting_container";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        {/* <h1>And-so-on</h1> */}
      </Link>
      <Route exact path="/" component={greeting_container} />
    </header>
    <div className="account-creation">
      <Switch>
        <AuthRoute exact path="/login" component={login_form_container} />
        <AuthRoute exact path="/signup" component={signup_form_container} />
      </Switch>
    </div>
  </div>
);

export default App;
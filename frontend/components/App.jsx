import React from "react";
import { Route } from "react-router";
import { AuthRoute } from "../utils/route_util";
import login_form_container from "./session/login_form_container";
import signup_form_container from "./session/signup_form_container";
import GreetingContainer from "./greeting/greeting_container";
import { Link, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        {/* <h1>And-so-on</h1> */}
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <Route path="/login" component={login_form_container} />
      <Route path="/signup" component={signup_form_container} />
    </Switch>
  </div>
);

export default App;
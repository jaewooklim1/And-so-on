import React from "react";
import { Route } from "react-router";
import { AuthRoute } from "../utils/route_util";
import login_form_container from "./login_form_container";
import signup_form_container from "./signup_form_container";

const App = () => (
  <div>
    <h1>And-so-on</h1>
    <AuthRoute path="/login" component={login_form_container} />
    <AuthRoute path="/signup" component={signup_form_container} />
  </div>
);

export default App;
import React from "react";
import { Route } from "react-router";
import { AuthRoute } from "../utils/route_util";
import login_form_container from "./login_form_container";
import signup_form_container from "./signup_form_container";

const App = () => (
  <div>
    <h1>And-so-on</h1>
    <Route path="/login" component={login_form_container} />
    <Route path="/signup" component={signup_form_container} />
       {/* <GreetingContainer /> */}
  </div>
);

export default App;
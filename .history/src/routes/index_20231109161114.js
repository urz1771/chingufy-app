import React from "react";
import {Route, link} from "wouter";

import Login from "../views/Login/login";

export default function Routes() {
  return (
    <Route>
      <Route component={Login} path="/"/>
    </Route>
  );
}

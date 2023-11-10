import React from "react";
import {}

import Login from "../views/Login/login";

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
    </Router>
  );
}

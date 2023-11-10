import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Login from "../views/Login";

export default function Routes() {
    return (

        // despues tengo que crear el home
        <Router>
            <Route path="/" exact component={Login}/>
        </Router>
    );
}
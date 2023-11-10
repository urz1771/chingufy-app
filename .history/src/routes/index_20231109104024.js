import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function Routes() {
    return (
        <Router>
            <Route path="/" exact />
        </Router>
    );
}
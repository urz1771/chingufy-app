import React from 'react';
import './App.css';
import { Route } from "wouter"; 
import Login from './views/Login/login';

function App() {
  return (
    <div>
      <Route path="/" component={Login} />
    </div>
  );
}

export default App;

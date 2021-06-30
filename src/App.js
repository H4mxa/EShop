import React from "react";
import { Route } from "react-router-dom";
import HomePage from "pages/homepage/HomePage";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;

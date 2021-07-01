import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

// ------------- COMPONENTS -------------
import Header from "components/header/Header";

//--------------- PAGES ----------------------
import HomePage from "pages/homepage/HomePage";
import ShopPage from "pages/shop/ShopPage";
import SignInAndSignUp from "pages/sign-in-and-sign-up/SignInAndSignUp";

//  ---------- Firebase -----------
import { auth, createUserProfileDocument } from "firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // this.setState({ currentUser: user });
      createUserProfileDocument(user);
      // console.log(user.photoURL);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

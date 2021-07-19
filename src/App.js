import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// --------------- REDUX -----------------
import { connect } from "react-redux";
import { setCurrentUser } from "redux/user/user.actions";

import "./App.css";

// ------------- COMPONENTS -------------
import Header from "components/header/Header";

//--------------- PAGES ----------------------
import HomePage from "pages/homepage/HomePage";
import ShopPagePage from "pages/shop/ShopPage";
import SignInAndSignUpPage from "pages/sign-in-and-sign-up/SignInAndSignUp";

//  ---------- Firebase -----------
import { auth, createUserProfileDocument } from "firebase/firebase.utils";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
      // console.log(user.photoURL);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPagePage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from "react";

// ----------------- firebase ----------------
import { signInWithGoogle } from "firebase/firebase.utils";

// ------------ Components ----------------
import Forminput from "components/form-input/Forminput";
import CustomButton from "components/custom-button/CustomButton";

import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Forminput
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />

          <Forminput
            name='password'
            type='password'
            onChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

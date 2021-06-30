import React, { Component } from "react";

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

          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;

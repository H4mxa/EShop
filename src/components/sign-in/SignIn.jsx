import React, { Component } from "react";

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
      <div>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='Email'
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='Password'
            required
          />
          <label>Password</label>

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;

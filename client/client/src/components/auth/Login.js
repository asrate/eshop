import React, { Component } from "react";
import { Link } from "react-router-dom";
import Inputs from "../general/Inputs";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password1: "",
      password2: "",
      emil: "",
    };
  }
  onChange(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user">Sing Into Your Account</i>
        </p>
        <div className="form">
          <Inputs
            type="email"
            placeholder="Enter Email"
            value="email"
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Inputs
            type="password"
            placeholder="Enter Password"
            value="password1"
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary">Sign In</button>
        <p className="my-1">
          Dont Have an account?<Link to="/register">Sign Up</Link>
        </p>
      </div>
    );
  }
}
export default Login;

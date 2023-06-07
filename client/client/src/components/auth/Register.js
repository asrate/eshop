import React, { Component } from "react";
import Inputs from "../general/Inputs";
import { register } from "../../action/authaction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { message } from "antd";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      password2: "",
      email: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps &&
      nextProps.auth.errors &&
      nextProps.auth.errors.lenght > 0
    ) {
      nextProps.auth.errors.forEach((error) => {
        message.error(error.msg);
        console.log(nextProps.auth.errors);
      });
    }
  }
  onChange(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    const { name, password, email } = this.state;

    const newUser = {
      name,
      email,
      password,
    };

    if (password === this.state.password2) {
      console.log(this.state);
      this.props.register(newUser);
    } else {
      console.log("password dont match");
    }
  }
  render() {
    const { name, password, password2, email } = this.state;
    return (
      <div className="container">
        <h1 className="large text-primary">Register</h1>
        <p className="lead">
          <i className="fas fa-user">Create Your Account</i>
        </p>
        <div className="form">
          <Inputs
            name="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Inputs
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Inputs
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Inputs
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary" onClick={this.onSubmit}>
          Register
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { register })(withRouter(Register));

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Form } from "react-final-form";
import LoginForm from "../LoginForm";

class Authentication extends Component {
  setUser = values => {
    this.props.users.forEach(user => {
      if (user.name === values.login && user.password === values.password) {
        localStorage.setItem(
          "user",
          JSON.stringify({ id: user.id, name: user.name })
        );
        this.props.history.push("/");
      }
    });
  };

  validate = values => {
    const errors = {};

    if (!this.props.users.some(user => user.name === values.login)) {
      errors.login = "No such user";
    }
    if (!this.props.users.some(user => user.password === values.password)) {
      errors.password = "Incorrect password";
    }

    return errors;
  };

  componentDidMount() {
    const { getUsers } = this.props;

    getUsers();
  }

  render() {
    return (
      <Form
        onSubmit={this.setUser}
        validate={this.validate}
        render={props => <LoginForm {...props} />}
      />
    );
  }
}

Authentication.propTypes = {
  classes: PropTypes.object,
  getUsers: PropTypes.func,
  history: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object)
};

export default withRouter(Authentication);

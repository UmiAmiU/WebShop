import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Form } from "react-final-form";
import LoginForm from "../LoginForm";

class Authentication extends Component {
  setUser = values => this.props.getUser(values.login, values.password);

  componentDidUpdate() {
    const { isLogedIn, user } = this.props;

    if (isLogedIn) {
      localStorage.setItem(
        "user",
        JSON.stringify({ id: user.id, name: user.name })
      );
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.setUser}
        render={props => <LoginForm {...props} />}
      />
    );
  }
}

Authentication.propTypes = {
  authUser: PropTypes.func,
  classes: PropTypes.object,
  getUser: PropTypes.func,
  history: PropTypes.object,
  isLogedIn: PropTypes.bool,
  user: PropTypes.object
};

export default withRouter(Authentication);

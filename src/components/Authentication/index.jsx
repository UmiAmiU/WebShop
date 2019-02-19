import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Form } from "react-final-form";
import { Paper, withStyles, Typography, Divider } from "@material-ui/core";
import LoginForm from "../LoginForm";

class Authentication extends Component {
  setUser = values => this.props.getUser(values.login, values.password);

  componentDidUpdate() {
    const { isUserLogged, user, history } = this.props;

    if (isUserLogged) {
      localStorage.setItem(
        "user",
        JSON.stringify({ id: user.id, name: user.name })
      );
      history.push("/");
    }
  }

  render() {
    return (
      <Paper className={this.props.classes.paperSize} elevation={5}>
        <Typography variant="h4" align="center">
          Login form
        </Typography>
        <Divider variant="fullWidth" />
        <Form
          onSubmit={this.setUser}
          render={props => <LoginForm {...props} />}
        />
      </Paper>
    );
  }
}

Authentication.propTypes = {
  authUser: PropTypes.func,
  classes: PropTypes.object,
  getUser: PropTypes.func,
  history: PropTypes.object,
  isUserLogged: PropTypes.bool,
  user: PropTypes.object
};

export default withRouter(
  withStyles(() => ({ paperSize: { margin: "10px", padding: "10px" } }))(
    Authentication
  )
);

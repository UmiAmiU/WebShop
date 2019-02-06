import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Button, withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../TextValidator";
import dbManager from "../../dbManager";

const styles = () => ({
  formContainer: {
    width: "400px"
  }
});

class Authentication extends Component {
  checkUser = () => {
    this.state.users.forEach(user => {
      if (
        user.name === this.state.login &&
        user.password === this.state.password
      ) {
        localStorage.setItem(
          "user",
          JSON.stringify({ id: user.id, name: user.name })
        );
        this.props.history.push("/");
      }
    });
  };

  state = {
    login: "",
    password: "",
    users: []
  };

  inputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  componentDidMount() {
    dbManager.get("users").then(res => {
      if (!res.error) {
        this.setState({ users: res.data });
      }
    });
    ValidatorForm.addValidationRule("isLoginExist", value => {
      return this.state.users.some(user => user.name === value);
    });
    ValidatorForm.addValidationRule("isPasswordCorrect", value => {
      return this.state.users.some(
        user => user.name === this.state.login && user.password === value
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <ValidatorForm onSubmit={this.checkUser}>
        <Grid container direction="column" className={classes.formContainer}>
          <TextValidator
            label="Login"
            margin="dense"
            onChange={this.inputChange("login")}
            name="login"
            value={this.state.login}
            validators={["required", "isLoginExist"]}
            errorMessages={["this field is required", "no such user"]}
          />
          <TextValidator
            label="Password"
            type="password"
            margin="dense"
            onChange={this.inputChange("password")}
            name="password"
            value={this.state.password}
            validators={["required", "isPasswordCorrect"]}
            errorMessages={["this field is required", "incorrect password"]}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </ValidatorForm>
    );
  }
}

Authentication.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
};

export default withStyles(styles)(withRouter(Authentication));

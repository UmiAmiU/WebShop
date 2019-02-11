import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

class App extends Component {
  componentDidMount() {
    const { checkUser } = this.props;
    const userInfo = JSON.parse(localStorage.getItem("user"));

    if (!userInfo) {
      return null;
    }
    checkUser(userInfo.name, userInfo.id);

    return null;
  }

  componentDidUpdate() {
    const { authUser, user } = this.props;

    if (user.id !== "" && user.name !== "") {
      authUser(user.id, user.name);
    }
  }

  render() {
    return (
      <Grid container>
        <div>Hello</div>
        <Link to="/login">LoginPage</Link>
      </Grid>
    );
  }
}

App.propTypes = {
  authUser: PropTypes.func,
  checkUser: PropTypes.func,
  user: PropTypes.object
};

export default App;

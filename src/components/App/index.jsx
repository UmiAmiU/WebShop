import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

class App extends Component {
  componentDidMount() {
    const { checkUser } = this.props;
    const userInfo = JSON.parse(localStorage.getItem("user")) || {};

    checkUser(userInfo.name, userInfo.id);
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
  checkUser: PropTypes.func
};

export default App;

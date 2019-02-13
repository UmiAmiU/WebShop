import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import TopMenu from "../../redux/containers/TopMenu";

class App extends Component {
  componentDidMount() {
    const { checkUser, isLogged } = this.props;

    if (!isLogged) {
      const userInfo = JSON.parse(localStorage.getItem("user")) || {};

      checkUser(userInfo.name, userInfo.id);
    }
  }

  render() {
    return (
      <Grid container alignItems="center" justify="space-around">
        <TopMenu />
      </Grid>
    );
  }
}

App.propTypes = {
  checkUser: PropTypes.func,
  isLogged: PropTypes.bool
};

export default App;

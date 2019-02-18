import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TopMenu from "../../redux/containers/TopMenu";
import ContentList from "../ContentList";

const theme = createMuiTheme({
  palette: {
    background: {
      paper: "#F2F2F2"
    },
    primary: { main: "#144766" },
    secondary: { main: "#7F0414" }
  },
  typography: { useNextVariants: true }
});

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
      <MuiThemeProvider theme={theme}>
        <Grid container alignItems="center" justify="space-around">
          <TopMenu />
          <div>Hello</div>
          <Link to="/login">LoginPage</Link>

          <ContentList />
        </Grid>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  checkUser: PropTypes.func,
  isLogged: PropTypes.bool
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Authentication from "../redux/containers/Authentication";
import App from "../redux/containers/App";

const RouterControl = () => {
  return (
    <Router>
      <Grid container>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Authentication} />
      </Grid>
    </Router>
  );
};

export default RouterControl;

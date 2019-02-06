import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import App from "./App";
import Authentication from "./Authentication";

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

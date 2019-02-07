import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <Grid container>
      <div>Hello</div>
      <Link to="/login">LoginPage</Link>
    </Grid>
  );
};

export default App;

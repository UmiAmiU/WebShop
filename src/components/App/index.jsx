import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import TopMenu from "../../redux/containers/TopMenu";

const App = () => {
  return (
    <Grid container>
      <div>Hello</div>
      <TopMenu />
      <Link to="/login">LoginPage</Link>
    </Grid>
  );
};

export default App;

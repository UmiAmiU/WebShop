import React from "react";
import { TextField, Button, Grid, withStyles } from "@material-ui/core";
import { Search as SvgIconSearch } from "@material-ui/icons";
import PropTypes from "prop-types";

const styles = {
  searchInput: {
    width: "70%"
  }
};

const Search = props => (
  <Grid item xs={6}>
    <Grid container alignItems="center" justify="center">
      <TextField
        placeholder="Enter something"
        margin="dense"
        className={props.classes.searchInput}
      />
      <Button>
        <SvgIconSearch />
      </Button>
    </Grid>
  </Grid>
);

Search.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Search);

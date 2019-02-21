import React from "react";
import { Grid, TextField, Button, withStyles } from "@material-ui/core";
import { Search as SvgSearchIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

const styles = {
  searchInput: {
    width: "80%"
  }
};

const Search = props => {
  const { classes } = props;

  return (
    <Grid item xs={4}>
      <Grid container alignItems="center">
        <TextField
          placeholder="Enter something"
          margin="dense"
          className={classes.searchInput}
          color="primary"
        />
        <Button>
          <SvgSearchIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

Search.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Search);

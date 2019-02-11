import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, Button, Typography, withStyles } from "@material-ui/core";
import Search from "../Search";

const styles = {
  topMenu: {
    background: "green"
  }
};

class TopMenu extends Component {
  render() {
    const { classes, user } = this.props;
    const logBut =
      user.id === "" ? (
        <Grid item xs={3}>
          <Button>
            <Typography variant="h6">
              <Link to="/login">Sign up</Link>
            </Typography>
          </Button>
        </Grid>
      ) : (
        <Grid item xs={3}>
          <Grid container alignItems="center">
            <Button>
              <Typography variant="h6">Add</Typography>
            </Button>
            <Typography variant="h5">Welcom, {user.name}</Typography>
          </Grid>
        </Grid>
      );

    return (
      <Grid
        container
        alignItems="center"
        justify="space-around"
        className={classes.topMenu}
      >
        <Search />
        {logBut}
      </Grid>
    );
  }
}

TopMenu.propTypes = {
  classes: PropTypes.object,
  user: PropTypes.object
};

export default withStyles(styles)(TopMenu);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Search from "../Search";
import GoodsDropDown from "../../redux/containers/GoodsDropDown";

const styles = {
  topMenu: {
    background: "green"
  }
};

class TopMenu extends Component {
  render() {
    const { user, isLogged, classes } = this.props;
    const butLog = isLogged ? (
      <Grid item xs={4}>
        <Grid container alignItems="center" justify="center">
          <Button>Add Item</Button>
          <Typography variant="h5">Welcom, {user.name}</Typography>
        </Grid>
      </Grid>
    ) : (
      <Grid item xs={3}>
        <Button>
          <Link to="/login">Sign in</Link>
        </Button>
      </Grid>
    );

    return (
      <Grid
        container
        alignItems="center"
        justify="space-around"
        className={classes.topMenu}
      >
        <GoodsDropDown />
        <Search />
        {butLog}
      </Grid>
    );
  }
}

TopMenu.propTypes = {
  classes: PropTypes.object,
  isLogged: PropTypes.bool,
  user: PropTypes.object
};

export default withStyles(styles)(TopMenu);

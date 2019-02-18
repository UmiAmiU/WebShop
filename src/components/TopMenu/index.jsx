import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Search from "../Search";
import GoodsDropDown from "../../redux/containers/GoodsDropDown";

const styles = ({ palette }) => ({
  textWhite: {
    color: palette.primary.contrastText
  },
  topMenu: {
    background: palette.secondary.main,
    color: palette.primary.contrastText
  }
});

class TopMenu extends Component {
  render() {
    const { user, isLogged, classes, addItem } = this.props;
    const butLog = isLogged ? (
      <Grid item xs={4}>
        <Grid container alignItems="center" justify="space-around">
          <Typography variant="h6" className={classes.textWhite}>
            Welcom, {user.name}
          </Typography>
          <Button color="primary" onClick={addItem}>
            <Typography variant="h6" className={classes.textWhite}>
              Add Item
            </Typography>
          </Button>
          <Button color="primary">
            <Typography variant="h6" className={classes.textWhite}>
              Log Out
            </Typography>
          </Button>
        </Grid>
      </Grid>
    ) : (
      <Grid item xs={3}>
        <Button>
          <Link to="/login">
            <Typography variant="h6" className={classes.textWhite}>
              Sign in
            </Typography>
          </Link>
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
  addItem: PropTypes.func,
  classes: PropTypes.object,
  isLogged: PropTypes.bool,
  user: PropTypes.object
};

export default withStyles(styles)(TopMenu);

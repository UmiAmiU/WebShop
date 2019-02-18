import React, { Component } from "react";
import {
  Grid,
  Popper,
  List,
  ListItem,
  ClickAwayListener,
  ListItemText,
  Divider,
  Collapse,
  Paper,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = ({ palette }) => ({
  textWhite: {
    color: palette.primary.contrastText
  }
});

class GoodsDropDown extends Component {
  openMenu = () => {
    this.setState({ open: true });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  state = {
    open: false
  };

  componentDidMount() {
    this.props.getGoods();
  }

  render() {
    const { goods, classes } = this.props;
    const { open } = this.state;

    return (
      <Grid item xs={4}>
        <Button
          buttonRef={node => (this.anchorEl = node)}
          onClick={this.openMenu}
          fullWidth
        >
          <Typography className={classes.textWhite} variant="h6">
            Goods catalog
          </Typography>
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition>
          {() => (
            <Collapse in={open} timeout={500}>
              <Paper onMouseLeave={this.closeMenu}>
                <ClickAwayListener onClickAway={this.closeMenu}>
                  <List>
                    {goods.map(elem => (
                      <React.Fragment key={elem}>
                        <ListItem button onClick={this.closeMenu}>
                          <ListItemText primary={elem} />
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    ))}
                  </List>
                </ClickAwayListener>
              </Paper>
            </Collapse>
          )}
        </Popper>
      </Grid>
    );
  }
}

GoodsDropDown.propTypes = {
  classes: PropTypes.object,
  getGoods: PropTypes.func,
  goods: PropTypes.array
};

export default withStyles(styles)(GoodsDropDown);

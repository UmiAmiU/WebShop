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
  Button
} from "@material-ui/core";
import PropTypes from "prop-types";

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
    const { goods } = this.props;
    const { open } = this.state;

    return (
      <Grid item xs={4}>
        <Button
          buttonRef={node => (this.anchorEl = node)}
          onClick={this.openMenu}
          fullWidth
        >
          Goods catalog
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
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
  getGoods: PropTypes.func,
  goods: PropTypes.array
};

export default GoodsDropDown;

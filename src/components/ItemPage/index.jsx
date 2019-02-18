import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withStyles, Paper, Button } from "@material-ui/core";

const styles = () => ({
  imgSize: {
    height: "100%",
    width: "100%"
  },
  paperSize: {
    margin: "10px",
    marginBottom: "0",
    padding: "10px"
  }
});

class ItemPage extends Component {
  componentDidMount() {
    const { goods, getGoods } = this.props;

    if (goods.length === 0) {
      getGoods();
    }
  }

  render() {
    const [data] = this.props.goods;
    const { classes } = this.props;

    return (
      <Grid container spacing={8} wrap="wrap">
        {data && (
          <React.Fragment>
            <Grid item container>
              <Paper className={classes.paperSize}>
                <Grid container spacing={8} wrap="wrap">
                  <Grid item xs={3}>
                    <img
                      src={`data:image/png;base64,${data.img}`}
                      alt=""
                      srcSet=""
                      className={classes.imgSize}
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h4">{data.name}</Typography>
                    <Typography variant="body2">{data.description}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paperSize}>
                <Grid
                  container
                  justify="space-between"
                  alignItems="center"
                  wrap="wrap"
                >
                  <Typography variant="h6">Price: {data.price} rub</Typography>
                  <Button variant="contained" size="medium" color="secondary">
                    Купить
                  </Button>
                  <Button variant="contained" size="medium" color="primary">
                    Добавить в корзину
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    );
  }
}

ItemPage.propTypes = {
  classes: PropTypes.object,
  getGoods: PropTypes.func,
  goods: PropTypes.array
};

export default withStyles(styles)(ItemPage);

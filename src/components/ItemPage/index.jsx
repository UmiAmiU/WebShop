/* eslint-disable react/prop-types */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  withStyles,
  Paper,
  Button,
  Divider
} from "@material-ui/core";
import TopMenu from "../../redux/containers/TopMenu";

const styles = () => ({
  imgSize: {
    height: "100%",
    width: "100%"
  },
  paperActionSize: {
    padding: "10px"
  },
  paperDescrSize: {
    height: "450px",
    margin: "10px 10px 0 0",
    padding: "10px"
  },
  paperImgSize: {
    height: "450px",
    margin: "10px 0 0 10px",
    padding: "10px"
  },
  paperPriceSize: {
    margin: "0 0 0 10px",
    padding: "10px"
  }
});

const PaperImage = props => {
  return (
    <Grid item xs={4}>
      <Paper className={props.classes.paperImgSize} elevation={4}>
        <img
          src={`data:image/png;base64,${props.data.img}`}
          alt=""
          srcSet=""
          className={props.classes.imgSize}
        />
      </Paper>
    </Grid>
  );
};

const PaperDescr = props => {
  return (
    <Grid item xs={8}>
      <Paper className={props.classes.paperDescrSize} elevation={4}>
        <Typography variant="h4">{props.data.name}</Typography>
        <Divider variant="fullWidth" />
        <Typography variant="body1">{props.data.description}</Typography>
      </Paper>
    </Grid>
  );
};

const PaperPrice = props => {
  return (
    <Grid item xs={4}>
      <Paper className={props.classes.paperPriceSize}>
        <Typography align="center" variant="h6">
          Price: {props.data.price} rub
        </Typography>
      </Paper>
    </Grid>
  );
};

const PaperAction = props => {
  return (
    <Grid item xs={3}>
      <Paper className={props.classes.paperActionSize}>
        <Grid container alignItems="center" justify="space-around">
          <Button variant="contained" size="medium" color="secondary">
            Купить
          </Button>
          <Button variant="contained" size="medium" color="primary">
            Добавить в корзину
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

class ItemPage extends Component {
  render() {
    const [data] = this.props.goods;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <TopMenu />
        <Grid container spacing={16} wrap="wrap">
          {data && (
            <React.Fragment>
              <PaperImage classes={classes} data={data} />
              <PaperDescr classes={classes} data={data} />
              <PaperPrice classes={classes} data={data} />
              <PaperAction classes={classes} data={data} />
            </React.Fragment>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

ItemPage.propTypes = {
  classes: PropTypes.object,
  goods: PropTypes.array
};

export default withStyles(styles)(ItemPage);

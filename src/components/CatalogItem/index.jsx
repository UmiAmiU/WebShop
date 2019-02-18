import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 250
  }
};

class CatalogItem extends Component {
  redirect = () => {
    const { history, data } = this.props;

    history.push(`/product/${data.code}/`);
  };

  static splitText(string, size) {
    if (string.length > size) {
      return `${string.slice(0, size - 3)}...`;
    }

    return string;
  }

  render() {
    const { classes, data } = this.props;
    const TITLE_MAX_SIZE = 27;
    const DESCRIPTION_MAX_SIZE = 140;

    return (
      <Card className={classes.card}>
        {this.props.isUserLogged && (
          <Typography color="textPrimary">Код: {data.code}</Typography>
        )}
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`data:image/png;base64,${data.img}`}
            title={data.name}
            onClick={this.redirect}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {CatalogItem.splitText(data.name, TITLE_MAX_SIZE)}
            </Typography>
            <Typography>
              {CatalogItem.splitText(data.description, DESCRIPTION_MAX_SIZE)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Tooltip title="Add to cart" enterDelay={500} leaveDelay={200}>
            <Button size="large" color="primary">
              <i className="fa fa-lg fa-cart-arrow-down" />
            </Button>
          </Tooltip>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h6">{data.price} rub</Typography>
            <Button variant="contained" size="medium" color="secondary">
              Купить
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

CatalogItem.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  history: PropTypes.object,
  isUserLogged: PropTypes.bool
};

export default withRouter(withStyles(styles)(CatalogItem));

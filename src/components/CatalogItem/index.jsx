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
import Popover from '@material-ui/core/Popover';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 250
  }
};

class CatalogItem extends Component {
  splitText(string, size) {
    if (string.length > size) {
      return `${string.slice(0, size - 3)}...`;
    }

    return string;
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <Typography color="textSecondary" component="p">
          Код: {this.props.data.code}
        </Typography>
        <Popover
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
        >
          The content of the Popover.
        </Popover>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`data:image/png;base64,${this.props.data.img}`}
            title={this.props.data.name}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.splitText(this.props.data.name, 27)}
            </Typography>
            <Typography component="p">
              {this.splitText(this.props.data.description, 140)}
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
            <Typography variant="h6" component="h2">
              {this.props.data.price} rub
            </Typography>
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
  data: PropTypes.object
};

export default withStyles(styles)(CatalogItem);

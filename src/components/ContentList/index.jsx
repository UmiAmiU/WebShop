import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import CatalogItem from "../../redux/containers/CatalogItem";

class ContentList extends Component {
  componentDidMount() {
    const { goods, getGoods } = this.props;

    if (goods.length === 0) {
      getGoods();
    }
  }

  render() {
    const { goods } = this.props;

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="baseline"
        spacing={16}
      >
        {goods.reduce((items, category) => {
          return [
            ...items,
            ...category.products.map((elem, index) => (
              <Grid key={Math.random() + index} item>
                <CatalogItem data={elem} />
              </Grid>
            ))
          ];
        }, [])}
      </Grid>
    );
  }
}

ContentList.propTypes = {
  getGoods: PropTypes.func,
  goods: PropTypes.arrayOf(PropTypes.object)
};

export default ContentList;

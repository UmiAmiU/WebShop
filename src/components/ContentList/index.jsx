import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CatalogItem from "../CatalogItem";
import data from "../../goods";

class ContentList extends Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="baseline"
        spacing={16}
      >
        {data.map((value, index) => (
          <Grid key={index} item>
            <CatalogItem data={value} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default ContentList;

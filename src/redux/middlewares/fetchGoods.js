import dbManager from "../../dbManager";
import {
  fetchGoodsStart,
  fetchGoodsSuccess,
  fetchGoodsError
} from "../actions";

const fetchGoods = () => {
  return dispatch => {
    dispatch(fetchGoodsStart());

    return dbManager
      .get("goods")
      .then(
        res => dispatch(fetchGoodsSuccess(res.data)),
        res => dispatch(fetchGoodsError(res))
      );
  };
};

export default fetchGoods;

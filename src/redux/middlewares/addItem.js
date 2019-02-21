import dbManager from "../../dbManager";
import { addItemStart, addItemSuccess, addItemError } from "../actions";

const addItem = (category, data) => {
  return dispatch => {
    dispatch(addItemStart());

    return dbManager
      .addArray("goods", category, "products", data)
      .then(
        res => dispatch(addItemSuccess(res.data)),
        res => dispatch(addItemError(res))
      );
  };
};

export default addItem;

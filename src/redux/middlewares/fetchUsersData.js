import dbManager from "../../dbManager";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersError
} from "../actions";

const fetchUsersData = () => {
  return dispatch => {
    dispatch(fetchUsersStart());

    return dbManager
      .get("users")
      .then(
        res => dispatch(fetchUsersSuccess(res.data)),
        res => dispatch(fetchUsersError(res))
      );
  };
};

export default fetchUsersData;

import dbManager from "../../dbManager";
import { fetchUserStart, fetchUserSuccess, fetchUserError } from "../actions";

const fetchUserSession = (name, id) => {
  return dispatch => {
    dispatch(fetchUserStart());

    return dbManager
      .getFilteredDoc("users", id)
      .then(
        res => dispatch(fetchUserSuccess(res.data)),
        res => dispatch(fetchUserError(res))
      );
  };
};

export default fetchUserSession;

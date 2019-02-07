import dbManager from "../../dbManager";
import { fetchUserStart, fetchUserSuccess, fetchUserError } from "../actions";

const fetchUser = (name, password) => {
  return dispatch => {
    dispatch(fetchUserStart());

    return dbManager
      .getFiltered("users", [
        // eslint-disable-next-line sort-keys
        { left: "name", option: "==", right: name },
        { left: "password", option: "==", right: password }
      ])
      .then(
        res => dispatch(fetchUserSuccess(res.data)),
        res => dispatch(fetchUserError(res))
      );
  };
};

export default fetchUser;

import dbManager from "../../dbManager";
import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserError,
  auth
} from "../actions";

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
        res => {
          dispatch(auth(res.data.id, res.data.name));
          dispatch(fetchUserSuccess());
        },
        res => dispatch(fetchUserError(res))
      );
  };
};

export default fetchUser;

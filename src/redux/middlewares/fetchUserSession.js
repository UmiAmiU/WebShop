import dbManager from "../../dbManager";
import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserError,
  auth
} from "../actions";

const fetchUserSession = (name, id) => {
  return dispatch => {
    dispatch(fetchUserStart());

    return dbManager.getFilteredDoc("users", id).then(
      res => {
        dispatch(auth(res.data.id, res.data.name));
        dispatch(fetchUserSuccess());
      },
      res => dispatch(fetchUserError(res))
    );
  };
};

export default fetchUserSession;

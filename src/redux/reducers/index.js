import { combineReducers } from "redux";
import users from "./users";
import auth from "./auth";

const reducers = combineReducers({ auth, users });

export default reducers;

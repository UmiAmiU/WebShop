import { combineReducers } from "redux";
import users from "./users";
import user from "./user";
import auth from "./auth";

const reducers = combineReducers({ auth, user, users });

export default reducers;

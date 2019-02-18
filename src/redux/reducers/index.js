import { combineReducers } from "redux";
import users from "./users";
import user from "./user";
import auth from "./auth";
import goods from "./goods";

const reducers = combineReducers({ auth, goods, user, users });

export default reducers;

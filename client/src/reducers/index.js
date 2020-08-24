import aideReducer from "./aideReducer";
import authReducer from "./auth";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  aides: aideReducer,
  auth: authReducer,
});

export default allReducers;

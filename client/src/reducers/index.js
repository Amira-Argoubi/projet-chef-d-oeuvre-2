import aideReducer from "./aideReducer";
import authReducer from "./auth";
import reservationReducer from "./reservationReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  aides: aideReducer,
  auth: authReducer,
  reservation: reservationReducer,
});

export default allReducers;

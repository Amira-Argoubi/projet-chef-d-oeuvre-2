import aideReducer from "./aideReducer";
import authReducer from "./auth";
import reservationReducer from "./reservationReducer";
import ratingReducer from "./ratingReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  aides: aideReducer,
  auth: authReducer,
  reservation: reservationReducer,
  rating:ratingReducer
});

export default allReducers;

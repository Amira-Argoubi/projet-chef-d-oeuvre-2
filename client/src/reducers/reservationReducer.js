import { GET_RESERVATION } from "../actions/types";
const initSate = [];
const reservationReducer = (state = initSate, action) => {
  if (action.type === GET_RESERVATION) {
    return action.payload;
  } else {
    return state;
  }
};
export default reservationReducer;

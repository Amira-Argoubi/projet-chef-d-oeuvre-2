import { GET_RATING } from "../actions/types";
const initSate = [];
const ratingReducer = (state = initSate, action) => {
  if (action.type === GET_RATING) {
    return action.payload;
  }
  
  else {
    return state;
  }
};
export default ratingReducer;

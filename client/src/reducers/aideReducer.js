import { GET_AIDE} from "../actions/types";
const initSate = [];
const aideReducer = (state = initSate, action) => {
  if (action.type === GET_AIDE) {
    return action.payload;
  } else {
    return state;
  }
};
export default aideReducer;

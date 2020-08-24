import { ADD_AIDE, GET_AIDE, DELETE_AIDE, EDIT_AIDE } from "../actions/types";
const initSate = [];
const aideReducer = (state = initSate, action) => {
  if (action.type === GET_AIDE) {
    return action.payload;
  }
  if (action.type === ADD_AIDE) {
    return [...state, action.payload];
  }
  if (action.type === DELETE_AIDE) {
    return state.filter((el) => el.id !== action.payload);
  } 
  if (action.type === EDIT_AIDE) {
     return {
        aides: state.aides.map(aide =>
          aide._id === action.payload.id ? action.payload.aide : aide
        )}
        }
  else {
    return state;
  }
};
export default aideReducer;

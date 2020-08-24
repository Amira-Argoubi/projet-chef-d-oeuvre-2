import {USER_LOADED} from "../actions/types";


const initialState = []

const authReducer = (state = initialState, action) => {
  if(action.type=== USER_LOADED){
    return action.payload
}
else return state
};
export default authReducer;

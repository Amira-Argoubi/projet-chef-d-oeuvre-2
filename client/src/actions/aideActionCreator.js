import { ADD_AIDE, GET_AIDE, EDIT_AIDE, DELETE_AIDE } from "./types";
import axios from "axios";
/*************************** POST ************************ */
export const addAide = (payload) => {
  return {
    type: ADD_AIDE,
    payload,
  };
};
export const addAideToDB = (el) => {
  // console.log("action",el);
  return (dispatch) =>
    axios
      .post("http://localhost:8000/chef-d'oeuvre/aides/add", el)
      .then((res) => {
        if (res.data.msg) {
          alert(res.data.msg);
          dispatch(window.location.reload());
        } else {
          dispatch(addAide(res.data), window.location.reload());
        }
       
      });
};

/*************************** EDIT ****************************/
export const editAide = (payload) => {
  return {
    type: EDIT_AIDE,
    payload,
  };
};
export const editAideInDB = (el) => {
  return (dispatch) =>
    axios
      .patch(
        `http://localhost:8000/chef-d'oeuvre/aides/updateAide/${el._id}`,
        el
      )
      .then((res) =>
        dispatch(editAide(res.data), window.location.reload(false))
      );
};

/******************************* DELETE ******************************/
export const deleteAide = (payload) => {
  return {
    type: DELETE_AIDE,
    payload,
  };
};
export const deleteAideInDB = (el) => {
  return (dispatch) =>
    axios
      .delete(`http://localhost:8000/chef-d'oeuvre/aides/deleteAide/${el}`)
      .then((res) =>
        dispatch(deleteAide(res.data), window.location.reload(false))
      );
};

/******************************* GET ****************************** */
export const getAide = (payload) => {
  return {
    type: GET_AIDE,
    payload,
  };
};
export const getAideFromDB = () => {
  return (dispatch) =>
    axios
      .get("http://localhost:8000/chef-d'oeuvre/aides/getallaide")
      .then((res) => dispatch(getAide(res.data)));
};

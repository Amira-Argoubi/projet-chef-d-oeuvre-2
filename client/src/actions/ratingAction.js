import {  ADD_RATING, GET_RATING } from "./types";
import axios from "axios";
/*************************** POST ************************ */
export const addRating = (payload) => {
  return {
    type: ADD_RATING,
    payload,
  };
};
export const addRatingToDB = (el) => {
  console.log("action",el);
  return (dispatch) =>
    axios
      .post("http://localhost:8000/chef-d'oeuvre/rating/add", el)
      .then((res) => {
        if (res.data.msg) {
          alert(res.data.msg);
          dispatch(window.location.reload());
        } else {
          dispatch(addRating(res.data), window.location.reload());
        }
      
      });
};
/******************************* GET ****************************** */
export const getRating = (payload) => {
    return {
      type: GET_RATING,
      payload,
    };
  };
  export const getRatingFromDB = () => {
    return (dispatch) =>
      axios
        .get("http://localhost:8000/chef-d'oeuvre/rating/get")
        .then((res) => dispatch(getRating(res.data)));
  };
  
import {
  GET_RESERVATION,
  ADD_RESERVATION,
  EDIT_DECISION,
  DELETE_RESERVATION,
} from "./types";
import axios from "axios";
/*********************** GET Reservation********************** */
export const getReservation = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:8000/chef-d'oeuvre/reservation/"
    );
    console.log(res.data);
    dispatch({
      type: GET_RESERVATION,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
/*********************** ADD Reservation ********************** */

export const addReservation = (payload) => {
  return {
    type: ADD_RESERVATION,
    payload,
  };
};
export const addReservationToDB = (el) => {
  console.log(el);
  return (dispatch) =>
    axios
      .post("http://localhost:8000/chef-d'oeuvre/reservation/add", el)
      .then((res) => {
        if (res.data.msg) {
          alert(res.data.msg);
        } else {
          dispatch(addReservation(res.data), window.location.reload());
        }
      });
};
/*********************** DELETE Reservation********************** */
export const deleteReservation = (payload) => {
  return {
    type: DELETE_RESERVATION,
    payload,
  };
};
export const deleteReservationInDB = (el) => {
  return (dispatch) =>
    axios
      .delete(`http://localhost:8000/chef-d'oeuvre/reservation/delete/${el}`)
      .then((res) =>
        dispatch(deleteReservation(res.data), window.location.reload(false))
      );
};

/*************************** EDIT Decision ****************************/
export const editDecision = (payload) => {
  return {
    type: EDIT_DECISION,
    payload,
  };
};
export const editDecisionInDB = (el) => {
  return (dispatch) =>
    axios
      .patch(
        `http://localhost:8000/chef-d'oeuvre/reservation/update/${el._id}`,
        el
      )
      .then((res) =>
        dispatch(editDecision(res.data), window.location.reload())
      );
};

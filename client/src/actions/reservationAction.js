import { GET_RESERVATION, ADD_RESERVATION } from "./types";
import axios from "axios";
export const getReservation = (user) => async (dispatch) => {
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
export const addReservation = (payload) => {
  return {
    type: ADD_RESERVATION,
    payload,
  };
};
export const addReservationToDB = (el) => {
  // console.log(el);
  return (dispatch) =>
    axios
      .post("http://localhost:8000/chef-d'oeuvre/reservation/add", el)
      .then((res) => {
        dispatch(addReservation(res.data), window.location.reload());
      });
};

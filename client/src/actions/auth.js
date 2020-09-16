import axios from "axios";
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  EDIT_USER,
} from "./types";
/******************************** Inscription **************** */
export function register(el) {
  console.log(el);
  return (dispatch) =>
    axios
      .post("http://localhost:8000/chef-d'oeuvre/authentif/register", el)
      .then((res) =>
        dispatch(
          { type: REGISTER_SUCCESS, payload: res.data }
        )
      )
      .catch((err) => console.log("Créez un compte"));
}
/******************************** Connexion **************** */

export function login(el) {
  return (dispatch) =>
    axios
      .post("http://localhost:8000/chef-d'oeuvre/authentif/login", el, {
        withCredentials: true,
      })
      .then(
        (res) =>
          dispatch(
            {
              type: LOGIN_SUCCESS,
              payload: res.data,
            },
            localStorage.setItem("Role", res.data.role),
            window.location.reload()
          ),

        dispatch(getUser())
      )
      .catch((err) => alert("Créez un compte"));
}

/******************************** Get profil **************** */

export const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:8000/chef-d'oeuvre/authentif/profil",
      { withCredentials: true }
    );
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
/*************************** EDIT profil ****************************/
export const editUser = (payload) => {
  return {
    type: EDIT_USER,
    payload,
  };
};

export const editUserInDB = (el) => {
  return (dispatch) => {
    console.log("props", el);
    axios
      .patch(
        `http://localhost:8000/chef-d'oeuvre/authentif/update/${el._id}`,
        el,
      { withCredentials: true }
      )
      .then((res) => {
        dispatch(editUser(res.data));
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
};
/*************************** LOGOUT ****************************/

export function logout() {
  return () =>
    axios
      .post(
        "http://localhost:8000/chef-d'oeuvre/authentif/logout",
        {},
        { withCredentials: true }
      )
      .then((rep) => {
        console.log(rep.data);
        if (rep.data === "token deleted") {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
}

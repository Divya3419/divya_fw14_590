import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./action.type";

export const signup = (payload) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios
    .post(`https://blueproduct.herokuapp.com/register`, payload)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      return { type: SIGNUP_SUCCESS };
    })
    .catch((error) => {
      dispatch({ type: SIGNUP_FAILURE, payload: error });
      return { type: SIGNUP_FAILURE };
    });
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .get(`https://blueproduct.herokuapp.com/register`, payload)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      return res.data;
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILURE, payload: error });
      return { type: LOGIN_FAILURE };
    });
};

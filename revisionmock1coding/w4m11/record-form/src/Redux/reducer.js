import { getLocalData, saveLocalData } from "../utils/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./action.type";

let initialState = {
  isAuth: false,
  isError: false,
  isLoading: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, isLoading: false, isAuth: true };
    }
    case SIGNUP_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }

    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, isAuth: true };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAuth: false,
        token: "",
      };
    }
    default:
      return state;
  }
};

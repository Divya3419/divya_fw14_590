import {
  DELETE_COUNTRY_FAILURE,
  DELETE_COUNTRY_REQUEST,
  DELETE_COUNTRY_SUCCESS,
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
} from "./actionTypes";

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_COUNTRIES_SUCCESS: {
      return { ...state, isLoading: true, isError: false, countries: payload };
    }

    case GET_COUNTRIES_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case DELETE_COUNTRY_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case DELETE_COUNTRY_SUCCESS: {
      return { ...state, isLoading: true, isError: false };
    }

    case DELETE_COUNTRY_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

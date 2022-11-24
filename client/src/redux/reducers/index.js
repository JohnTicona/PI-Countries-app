import {
  CREATE_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAIL,
  LOADING,
  SET_COUNTRIES_FIL,
  SET_CURRENT_PAGE,
} from '../types';

const initialState = {
  countries: [],
  countriesFilter: [],
  countryDetail: null,
  loading: false,
  currentPage: 1,
};

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: payload,
        countriesFilter: payload,
        countryDetail: null,
        loading: false,
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        loading: false,
        countryDetail: payload,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        loading: false,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    case LOADING:
      return {
        ...state,
        loading: payload,
      };

    case SET_COUNTRIES_FIL:
      return {
        ...state,
        countriesFilter: payload,
        currentPage: 1,
      };

    default:
      return state;
  }
};

export default countriesReducer;

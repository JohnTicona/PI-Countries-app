import {
  CREATE_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAIL,
  LOADING,
  SET_CURRENT_PAGE,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DES,
  SORT_BY_POPULATION_ASC,
  SORT_BY_POPULATION_DES,
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

    case FILTER_BY_CONTINENT:
      return {
        ...state,
        countriesFilter: payload,
        currentPage: 1,
      };

    case SORT_BY_NAME_ASC:
    case SORT_BY_NAME_DES:
    case SORT_BY_POPULATION_ASC:
    case SORT_BY_POPULATION_DES:
      return {
        ...state,
        countriesFilter: [...payload],
        currentPage: 1,
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

    default:
      return state;
  }
};

export default countriesReducer;

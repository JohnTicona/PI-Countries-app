import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, LOADING } from '../types';

const initialState = {
  countries: [],
  countryDetail: null,
  loading: false,
};

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: payload,
        countryDetail: null,
        loading: false,
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: payload,
        loading: false,
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

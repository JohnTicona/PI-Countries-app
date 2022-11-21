import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, LOADING } from '../types';

const loadingAction = status => ({
  type: LOADING,
  payload: status,
});

export const getAllCountries = () => {
  return async dispatch => {
    try {
      dispatch(loadingAction(true));

      const res = await axios('http://localhost:3001/countries');
      const data = res.data;

      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCountryDetail = id => {
  return async dispatch => {
    try {
      dispatch(loadingAction(true));

      const res = await axios(`http://localhost:3001/countries/${id}`);
      const data = res.data;

      dispatch({
        type: GET_COUNTRY_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

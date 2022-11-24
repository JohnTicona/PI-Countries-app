import {
  CREATE_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAIL,
  LOADING,
  SET_COUNTRIES_FIL,
  SET_CURRENT_PAGE,
} from '../types';
import axios from 'axios';

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

export const createActivity = activity => {
  return async dispatch => {
    try {
      dispatch(loadingAction(true));

      await axios.post(`http://localhost:3001/activities`, activity);
      // const data = res.data;
      dispatch({
        type: CREATE_ACTIVITY,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setCountriesFil = countries => ({
  type: SET_COUNTRIES_FIL,
  payload: countries,
});

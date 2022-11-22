import axios from 'axios';
import { sortAscending, sortDescending } from '../../middlewares/sortCountries';
import {
  CREATE_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAIL,
  LOADING,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DES,
  SORT_BY_POPULATION_ASC,
  SORT_BY_POPULATION_DES,
} from '../types';

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

      const res = await axios.post(
        `http://localhost:3001/activities`,
        activity
      );
      const data = res.data;

      console.log(data);

      dispatch({
        type: CREATE_ACTIVITY,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByContinent = (countries, continent) => {
  const countriesByContinent = countries.filter(
    country => country.continent === continent
  );
  return {
    type: FILTER_BY_CONTINENT,
    payload: countriesByContinent,
  };
};

export const sortByNameAsc = countries => ({
  type: SORT_BY_NAME_ASC,
  payload: sortAscending(countries, 'name'),
});

export const sortByNameDes = countries => ({
  type: SORT_BY_NAME_DES,
  payload: sortDescending(countries, 'name'),
});

export const sortByPopulationAsc = countries => ({
  type: SORT_BY_POPULATION_ASC,
  payload: sortAscending(countries, 'population'),
});

export const sortByPopulationDes = countries => ({
  type: SORT_BY_POPULATION_DES,
  payload: sortDescending(countries, 'population'),
});

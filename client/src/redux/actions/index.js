import axios from 'axios';
import { sortAscending, sortDescending } from '../../middlewares/sortCountries';
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

export const filterByContinent = (countries, continent) => ({
  type: FILTER_BY_CONTINENT,
  payload: countries.filter(country => country.continent === continent),
});

const sortByNameAsc = countries => ({
  type: SORT_BY_NAME_ASC,
  payload: sortAscending(countries, 'name'),
});

const sortByNameDes = countries => ({
  type: SORT_BY_NAME_DES,
  payload: sortDescending(countries, 'name'),
});

const sortByPopulationAsc = countries => ({
  type: SORT_BY_POPULATION_ASC,
  payload: sortAscending(countries, 'population'),
});

const sortByPopulationDes = countries => ({
  type: SORT_BY_POPULATION_DES,
  payload: sortDescending(countries, 'population'),
});

export const sortCountries = (countries, value) => {
  switch (value) {
    case 'nameAsc':
      return sortByNameAsc(countries);

    case 'nameDes':
      return sortByNameDes(countries);
    case 'popAsc':
      return sortByPopulationAsc(countries);
    case 'popDes':
      return sortByPopulationDes(countries);

    default:
      return countries;
  }
};

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

import React from 'react';
import { useSelector } from 'react-redux';
import CountryDetail from '../components/CountryDetail';

const CountryScreen = () => {
  const country = useSelector(state => state.countryDetail);

  if (!country) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <CountryDetail country={country} />
    </div>
  );
};

export default CountryScreen;

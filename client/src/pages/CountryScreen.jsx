import React from 'react';
import { useSelector } from 'react-redux';
import CountryDetail from '../components/CountryDetail';
import Spinner from '../components/Spinner/Spinner';

const CountryScreen = () => {
  const { countryDetail, loading } = useSelector(state => state);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <CountryDetail country={countryDetail} />
    </div>
  );
};

export default CountryScreen;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryCard from '../components/CountryCard';
import { getAllCountries } from '../redux/actions';

const CountriesScreen = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className='grid'>
      {countries.map(country => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
};

export default CountriesScreen;

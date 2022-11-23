import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryCard from '../components/CountryCard';
import FilterOptions from '../components/FilterOptions';
import SortOptions from '../components/SortOptions';
import Spinner from '../components/Spinner/Spinner';
import { getAllCountries } from '../redux/actions';

const CountriesScreen = () => {
  const dispatch = useDispatch();
  const { countries, countriesFilter, loading } = useSelector(state => state);

  const [currentPage, setCurrentPage] = useState(0);

  // const filteredCountries = () => {
  //   return countriesFilter.slice(currentPage, currentPage + 8);
  // };

  const nextPage = () => {
    if (currentPage < countries.length - 8) setCurrentPage(currentPage + 8);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 8);
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <FilterOptions />
      <button onClick={prevPage}>Anterior</button>
      <button onClick={nextPage}>Siguiente</button>
      <SortOptions />
      <div className='grid'>
        {countriesFilter.map(country => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountriesScreen;

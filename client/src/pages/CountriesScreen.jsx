import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryCard from '../components/Country/CountryCard';
import FilterOptions from '../components/FilterOptions';
import Pagination from '../components/Pagination';
import SortOptions from '../components/SortOptions';
import Spinner from '../components/Spinner/Spinner';
import { getAllCountries } from '../redux/actions';

const CountriesScreen = () => {
  const currentPage = useSelector(state => state.currentPage);

  const dispatch = useDispatch();
  const { countriesFilter, loading } = useSelector(state => state);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const postsPerPage = 8;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = countriesFilter.slice(firstPostIndex, lastPostIndex);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <FilterOptions />
      <SortOptions />
      <div className='grid'>
        {currentPosts.map(country => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
      <Pagination
        totalPosts={countriesFilter.length}
        postsPerPage={postsPerPage}
      />
    </div>
  );
};

export default CountriesScreen;

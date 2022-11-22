import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { continents } from '../data/dataCountries';
import { filterByContinent, getAllCountries } from '../redux/actions';

const FilterOptions = () => {
  const [filterValue, setFilterValue] = useState('');
  const { countries } = useSelector(state => state);
  const [countriesFilter, setCountriesFilter] = useState(countries);

  const dispatch = useDispatch();

  const handleFilter = e => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    if (filterValue !== '') {
      setCountriesFilter(dispatch(getAllCountries()));

      dispatch(filterByContinent(countriesFilter, filterValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue]);

  return (
    <div>
      <div>Search</div>
      <div>
        <select value={filterValue} onChange={handleFilter}>
          <option value=''>Filter by Continent</option>
          {continents.map(continent => (
            <option value={continent}>{continent}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;

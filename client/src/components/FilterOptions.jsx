import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { continents } from '../data/dataCountries';
import { sortFilter } from '../middlewares/sortCountries';
import { setCountriesFil } from '../redux/actions';

const FilterOptions = () => {
  const { countries } = useSelector(state => state);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('nameAsc');

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleSort = e => {
    setSort(e.target.value);
  };

  useEffect(() => {
    const data = sortFilter(countries, sort, filter);
    dispatch(setCountriesFil(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, sort]);

  return (
    <>
      <select onChange={handleFilter}>
        <option value=''>Filter by Continent</option>
        {continents.map((continent, index) => (
          <option key={index} value={continent}>
            {continent}
          </option>
        ))}
      </select>

      <select onChange={handleSort}>
        <option value='nameAsc'>A - Z</option>
        <option value='nameDes'>Z - A</option>
        <option value='popAsc'>population ASC</option>
        <option value='popDes'>population DES</option>
      </select>
    </>
  );
};

export default FilterOptions;

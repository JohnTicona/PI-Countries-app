import { useDispatch, useSelector } from 'react-redux';
import { continents } from '../data/dataCountries';
import { filterByContinent } from '../redux/actions';

const FilterOptions = () => {
  const { countries } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterByContinent(countries, e.target.value));
  };

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
    </>
  );
};

export default FilterOptions;

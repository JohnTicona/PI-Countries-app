import { useDispatch, useSelector } from 'react-redux';
import { sortCountries } from '../redux/actions';

const SortOptions = () => {
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  const handleSort = e => {
    dispatch(sortCountries(countries, e.target.value));
  };

  return (
    <>
      <select onChange={handleSort}>
        <option value='nameAsc'>A - Z</option>
        <option value='nameDes'>Z - A</option>
        <option value='popAsc'>population ASC</option>
        <option value='popDes'>population DES</option>
      </select>
    </>
  );
};

export default SortOptions;

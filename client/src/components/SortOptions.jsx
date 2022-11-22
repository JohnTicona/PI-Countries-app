import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  sortByNameAsc,
  sortByNameDes,
  sortByPopulationAsc,
  sortByPopulationDes,
} from '../redux/actions';

const SortOptions = () => {
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  const [sortValue, setSortValue] = useState('');

  const handleSort = e => {
    setSortValue(e.target.value);
  };

  useEffect(() => {
    sortValue === 'nameAsc' && dispatch(sortByNameAsc(countries));
    sortValue === 'nameDes' && dispatch(sortByNameDes(countries));
    sortValue === 'popAsc' && dispatch(sortByPopulationAsc(countries));
    sortValue === 'popDes' && dispatch(sortByPopulationDes(countries));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortValue]);

  return (
    <div>
      <div>Search</div>
      <div>
        <select value={sortValue} onChange={handleSort}>
          <option value='nameAsc'>A - Z</option>
          <option value='nameDes'>Z - A</option>
          <option value='popAsc'>population ASC</option>
          <option value='popDes'>population DES</option>
        </select>
      </div>
    </div>
  );
};

export default SortOptions;

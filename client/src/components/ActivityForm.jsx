import style from './ActivityForm.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, getAllCountries } from '../redux/actions';
import { difficulties, seasons } from '../data/dataCountries';

const ActivityForm = () => {
  const [activity, setActivity] = useState({
    name: '',
    difficulty: 0,
    duration: 0,
    season: '',
    countries: ['ARG', 'CHL'],
  });
  const { name, difficulty, duration, season, countries } = activity;

  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleChange = e => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newActivity = {
      name,
      difficulty: Number(difficulty),
      duration: Number(duration),
      season,
      countries,
    };

    dispatch(createActivity(newActivity));
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Fill all the fields</legend>
      <div className={style.form_group}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          placeholder='Tourist activity name'
        />
      </div>

      <div className={style.form_group}>
        <label>Difficulty: </label>
        <select name='difficulty' value={difficulty} onChange={handleChange}>
          <option value=''>Select</option>
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>

      <div className={style.form_group}>
        <label>Duration (hours): </label>
        <input
          type='number'
          name='duration'
          value={duration}
          onChange={handleChange}
        />
      </div>

      <div className={style.form_group}>
        <label>Season: </label>
        <select name='season' value={season} onChange={handleChange}>
          <option value=''>Select</option>
          {seasons.map(season => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
      </div>

      <div className={style.form_group}>
        <label>Countries</label>
        <select>
          <option value=''>Select Country</option>
          {allCountries.map(country => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className={style.form_submit}>
        <input
          type='submit'
          className={style.form_btn}
          value='Create Activity'
          // disabled
        />
      </div>
    </form>
  );
};

export default ActivityForm;

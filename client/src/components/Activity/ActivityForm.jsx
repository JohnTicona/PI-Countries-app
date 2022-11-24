import style from './ActivityForm.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, getAllCountries } from '../../redux/actions';
import { difficulties, seasons } from '../../data/dataCountries';
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert/Alert';

const ActivityForm = () => {
  const [activity, setActivity] = useState({
    name: '',
    difficulty: 0,
    duration: 0,
    season: '',
  });
  const { name, difficulty, duration, season } = activity;

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
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

  const handleChangeSelect = e => {
    const { id, name } = JSON.parse(e.target.value);
    setCountries([...countries, { id, name }]);
  };

  const deleteCountryOption = id => {
    setCountries(countries.filter(country => country.id !== id));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      [name, difficulty, duration, season].includes('') ||
      countries.length === 0 ||
      isNaN(Number(duration))
    ) {
      setError(true);
      return;
    }
    const newActivity = {
      name,
      difficulty: Number(difficulty),
      duration: Number(duration),
      season,
      countries: countries.map(c => c.id),
    };
    dispatch(createActivity(newActivity));
    setError(false);
    navigate('/countries');
  };

  return (
    <form className={style.form_container} onSubmit={handleSubmit}>
      <h1 className='center'>Create Tourist Activity</h1>
      {error && <Alert />}
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
          {/* <option value=''>Select</option> */}
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
          min={0}
          name='duration'
          value={duration}
          onChange={handleChange}
        />
      </div>

      <div className={style.form_group}>
        <label>Season: </label>
        <select name='season' value={season} onChange={handleChange}>
          {/* <option value=''>Select</option> */}
          {seasons.map(season => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
      </div>

      <div className={style.form_group}>
        <label>Countries</label>
        <select name='countries' onChange={handleChangeSelect}>
          {/* <option value=''>Select Country</option> */}
          {allCountries.map(({ id, name }) => (
            <option key={id} value={`{"id": "${id}","name":"${name}"}`}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {countries.length > 0 &&
        countries.map(country => (
          <h4 key={country.id} className={style.form_countries}>
            {country.name}
            <button
              className='btn-delete'
              onClick={() => deleteCountryOption(country.id)}
            >
              x
            </button>
          </h4>
        ))}

      <div className={style.form_submit}>
        <input
          type='submit'
          className='btn btn-primary btn-block'
          value='Create Activity'
        />
      </div>
    </form>
  );
};

export default ActivityForm;

//  const [activity, setActivity] = useState({
//     name: '',
//     difficulty: 0,
//     duration: 0,
//     season: '',
//   });
//   const { name, difficulty, duration, season } = activity;

//   const [countries, setCountries] = useState([]);
//   const [error, setError] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const allCountries = useSelector(state => state.countries);

//   useEffect(() => {
//     dispatch(getAllCountries());
//   }, [dispatch]);

//   const handleChange = e => {
//     setActivity({
//       ...activity,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleChangeSelect = e => {
//     const { id, name } = JSON.parse(e.target.value);
//     setCountries([...countries, { id, name }]);
//   };

//   const deleteCountryOption = id => {
//     setCountries(countries.filter(country => country.id !== id));
//   };

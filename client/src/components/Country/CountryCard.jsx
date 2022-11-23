import style from './CountryCard.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountryDetail } from '../../redux/actions';

const CountryCard = ({ country }) => {
  const { id, name, flag, continent, population } = country;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCountryDetail = id => {
    dispatch(getCountryDetail(id));
    navigate(`/countries/${id}`);
  };

  return (
    <div className={style.card} onClick={() => handleCountryDetail(id)}>
      <div className={style.card_image}>
        <img src={flag} alt={country.name} />
      </div>
      <div className={style.card_body}>
        <h2>{name}</h2>
        <h3>Continent: {continent}</h3>
        <h3>Population: {new Intl.NumberFormat('de-DE').format(population)}</h3>
      </div>
    </div>
  );
};

export default CountryCard;

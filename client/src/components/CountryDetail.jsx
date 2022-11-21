import style from './CountryDetail.module.css';

const CountryDetail = ({ country }) => {
  const {
    id,
    name,
    flag,
    continent,
    capital,
    subregion,
    area,
    population,
    activities,
  } = country;

  return (
    <>
      <div className={style.detail}>
        <div className={style.image_content}>
          <img src={flag} alt={name} />
        </div>

        <div className={style.content}>
          <div>
            <h1>{name}</h1>
            <h2>
              Code: <span>{id}</span>
            </h2>
            <h2>
              Continent: <span>{continent}</span>
            </h2>
            <h2>
              Capital: <span>{capital}</span>
            </h2>
            <h2>
              Subregion: <span>{subregion}</span>
            </h2>
            <h2>
              Area: <span>{area} km2</span>
            </h2>
            <h2>
              Population: <span>{population}</span>
            </h2>
          </div>
        </div>
      </div>
      {activities.length >= 0 && <h1>Actvities</h1>}
    </>
  );
};

export default CountryDetail;

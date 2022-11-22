const mapCountries = arrayCountries => {
  const countries = arrayCountries.map(country => ({
    id: country.cca3,
    name: country.translations.spa.common,
    flag: country.flags[1],
    continent: country.continents[0],
    capital: country.capital && country.capital[0],
    subregion: country.subregion,
    area: country.area,
    population: country.population,
  }));

  return countries;
};

module.exports = mapCountries;

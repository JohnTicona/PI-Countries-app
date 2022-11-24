const sortAscending = (countries, property) => {
  return countries.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
};

const sortDescending = (countries, property) => {
  return countries.sort((a, b) => {
    if (b[property] < a[property]) {
      return -1;
    }
    if (b[property] > a[property]) {
      return 1;
    }
    return 0;
  });
};

export const sortFilter = (countries, typeSort, continent) => {
  if (continent === '') {
    if (typeSort === 'nameAsc') return sortAscending(countries, 'name');
    if (typeSort === 'nameDes') return sortDescending(countries, 'name');
    if (typeSort === 'popAsc') return sortAscending(countries, 'population');
    if (typeSort === 'popDes') return sortDescending(countries, 'population');
  } else {
    if (typeSort === 'nameAsc')
      return sortAscending(
        countries.filter(c => c.continent === continent),
        'name'
      );
    if (typeSort === 'nameDes')
      return sortDescending(
        countries.filter(c => c.continent === continent),
        'name'
      );
    if (typeSort === 'popAsc')
      return sortAscending(
        countries.filter(c => c.continent === continent),
        'population'
      );
    if (typeSort === 'popDes')
      return sortDescending(
        countries.filter(c => c.continent === continent),
        'population'
      );
  }
};

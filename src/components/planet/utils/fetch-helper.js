export function fetchPlanetsList(pageNumber = 1) {
  return fetch(`http://swapi.co/api/planets/?page=${pageNumber}`)
  .then(res => res.json())
  .catch(error => {
    console.error(error);
  });
}

export function fetchPlanet(value) {
  return fetch(`http://swapi.co/api/planets/?search=${value}`)
  .then(res => res.json())
  .catch(error => {
    console.error(error);
  });
}

export function fetchFilmsList() {
  return fetch('http://swapi.co/api/films')
  .then(res => res.json())
  .catch(error => {
    console.error(error);
  });
}

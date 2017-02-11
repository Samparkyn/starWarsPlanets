export function fetchPlanetsList(pageNumber = 1) {
  return fetch(`http://swapi.co/api/planets/?page=${pageNumber}`)
  .then(res => res.json())
  .catch(error => {
    console.error(error);
  });
}

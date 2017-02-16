import React, { PropTypes } from 'react';

export default function Row({planet, films}) {
  return (
    <tr>
      <td className="sortable">{planet.name}</td>
      <td className="sortable">{planet.population}</td>
      <td className="sortable">{planet.diameter}</td>
      <td className="sortable">{planet.rotation_period}</td>
      <td className="sortable">{planet.orbital_period}</td>
      <td>{planet.terrain}</td>
      <td>{films.join(', ')}</td>
    </tr>
  );
}

Row.propTypes = {
  planet: PropTypes.object,
  films:  PropTypes.array
};

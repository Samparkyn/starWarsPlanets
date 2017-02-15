import React, { PropTypes } from 'react';
import { planetFields }     from '../utils/planet-fields';

export default function Row({planet}) {
  return (
    <tr>
      <td>{planet.name}</td>
      <td>{planet.population}</td>
      <td>{planet.diameter}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.terrain}</td>
      <td>{planet.films}</td>
    </tr>
  );
}

Row.propTypes = {
  planet: PropTypes.object
};

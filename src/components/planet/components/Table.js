import React, { Component } from 'react';
import Row from './Row.js';

export default class Table extends Component {
  
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Populations</th>
              <th>Diameter</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Terrain</th>
              <th>Films</th>
            </tr>
          </thead>
          <tbody>
            <Row />
          </tbody>
        </table>
      </div>
    );
  }
}

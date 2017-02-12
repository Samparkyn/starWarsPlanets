import React, { PropTypes, Component } from 'react';
import Row from './Row.js';

export default class Table extends Component {
  
  static propTypes = {
    planets: PropTypes.array
  }
  
  render() {
    const { planets } = this.props;
    
    const rows = planets.map((planet, idx) => {
      return <Row key={idx} planet={planet} />;
    });
    
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
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

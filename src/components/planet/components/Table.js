import '../styles/table.css';
import React, { PropTypes, Component } from 'react';
import Row from './Row.js';

export default class Table extends Component {
  
  static propTypes = {
    planets: PropTypes.array,
    sortHandler: PropTypes.func
  }
  
  render() {
    const { planets, sortHandler } = this.props;
    
    const rows = planets && planets.map((planet, idx) => {
      return <Row key={idx} planet={planet} />;
    });
    
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th data-key="name" onClick={sortHandler}>Name</th>
              <th data-key="population" onClick={sortHandler}>Populations</th>
              <th data-key="diameter" onClick={sortHandler}>Diameter</th>
              <th data-key="rotation" onClick={sortHandler}>Rotation Period</th>
              <th data-key="orbit" onClick={sortHandler}>Orbital Period</th>
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

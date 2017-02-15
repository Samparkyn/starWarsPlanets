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
    
    const fields = ['name', 'population', 'diameter', 'rotation_period', 'orbital_period'];
    const sortableColumns = fields.map((f, idx) => {
      return (
        <th
          className="table-row sortable"
          key={idx}
          data-key={f}
          onClick={sortHandler}>
          {f.split('_').join(' ')}
        </th>
      );
    });
    
    return (
      <div>
        <table>
          <thead>
            <tr>
              {sortableColumns}
              <th className="table-row">terrain</th>
              <th className="table-row">films</th>
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

import React, { Component } from 'react';
import { fetchPlanetsList } from './utils/fetch-planets';

export default class PlanetContainer extends Component {
  
  componentWillMount() {
    fetchPlanetsList()
      .then(res => {
        console.log(res);
      });
  }
  
  render() {
    return (
      <div>Planet Container</div>
    );
  }
}

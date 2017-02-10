import React, { Component } from 'react';
import PlanetContainer      from '../planet/PlanetContainer';
import Header               from './Header';
import './styles/app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PlanetContainer />
      </div>
    );
  }
}

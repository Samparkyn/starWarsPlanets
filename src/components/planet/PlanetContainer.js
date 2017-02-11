import './styles/planet-container.css';
import React, { Component } from 'react';
import Table from './components/Table';
import { fetchPlanetsList } from './utils/fetch-planets';
import Pagination from './components/Pagination';
import Search from './components/Search';

export default class PlanetContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    };
  }
  
  componentWillMount() {
    fetchPlanetsList()
      .then(res => {
        this.setState({planets: res.results});
        console.log(res);
      });
  }
  
  render() {
    const { planets } = this.state;
    
    return (
      <div>
        <Search />
        <Table planets={planets}/>
        <Pagination />
      </div>
    );
  }
}

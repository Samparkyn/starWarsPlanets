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
      planets: [],
      totalPages: 0,
      currentPage: 1
    };
  }
  
  componentWillMount() {
    fetchPlanetsList()
      .then(res => {
        this.setState({
          planets: res.results,
          totalPages: Math.ceil(res.count / res.results.length)
        });
      });
  }
  
  render() {
    const { planets, totalPages, currentPage } = this.state;
    console.log(this.state);
    
    return (
      <div>
        <Search />
        <Table planets={planets}/>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

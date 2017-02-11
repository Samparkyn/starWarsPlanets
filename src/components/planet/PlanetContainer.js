import './styles/planet-container.css';
import React, { Component } from 'react';
import Table from './components/Table';
import { fetchPlanetsList } from './utils/fetch-planets';
import Pagination from './components/Pagination';
import Search from './components/Search';

export default class PlanetContainer extends Component {
  
  constructor(props) {
    super(props);
    this.pageChangeHandler = this.pageChangeHandler.bind(this);
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
  
  pageChangeHandler(e) {
    const newPage = parseInt(e.target.dataset.page);
    console.log(newPage);
    this.setState({
      currentPage: newPage
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
          changeHandler={this.pageChangeHandler}
        />
      </div>
    );
  }
}

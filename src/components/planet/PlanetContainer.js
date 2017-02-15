import React, { Component }              from 'react';
import Table                             from './components/Table';
import { fetchPlanetsList, fetchPlanet } from './utils/fetch-planets';
import Pagination                        from './components/Pagination';
import Search                            from './components/Search';
import throttle                          from 'lodash.throttle';
import './styles/planet-container.css';


export default class PlanetContainer extends Component {
  
  constructor(props) {
    super(props);
    this.getPlanets = this.getPlanets.bind(this);
    this.pageChangeHandler = this.pageChangeHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.searchPlanet = throttle(this.searchPlanet.bind(this), 1000);
    this.sortHandler = this.sortHandler.bind(this);
    this.state = {
      planets: [],
      totalPages: 0,
      currentPage: 1,
      search: '',
      searchResults: [],
      sortKey: 'name',
      sortDesc: true
    };
  }
  
  componentWillMount() {
    this.getPlanets();
  }
  
  
  pageChangeHandler(e) {
    const newPage = parseInt(e.target.dataset.page);
    this.setState({currentPage: newPage});
    this.getPlanets(newPage);
  }
  
  
  getPlanets(newPage) {
    fetchPlanetsList(newPage)
      .then(res => {
        this.setState({
          planets: res.results,
          totalPages: Math.ceil(res.count / res.results.length)
        });
      });
  }
  
  
  searchHandler(e) {
    const value = e.target.value;
    this.setState({search: value});
    
    if (value.length >= 3) {
      this.searchPlanet(value);
    } else if (value.length <= 2) {
      this.setState({searchResults: []});
    }
  }
  
  
  searchPlanet(value) {
    fetchPlanet(value)
    .then(res => {
      this.setState({searchResults: res.results});
    });
  }
  
  
  sortHandler(e) {
    const { sortKey, sortDesc } = this.state;
    const keyToSort = e.target.dataset.key;
    
    if (keyToSort === sortKey) {
      this.setState({sortDesc: !sortDesc});
    } else {
      this.setState({sortKey: keyToSort, sortDesc: true});
    }
  }
  
  render() {
    const { planets, totalPages, currentPage, search, searchResults, sortKey, sortDesc } = this.state;
    
    const sortedPlanets = planets.sort((a, b) => {
      if (sortDesc) {
        return a[sortKey].localeCompare(b[sortKey]);
      } else {
        return b[sortKey].localeCompare(b[sortKey]);
      }
    });
    
    return (
      <div>
        <Search
          value={search} searchHandler={this.searchHandler} />
        <Table
          planets={searchResults.length && searchResults || sortedPlanets}
          sortHandler={this.sortHandler} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          changeHandler={this.pageChangeHandler}
        />
      </div>
    );
  }
}

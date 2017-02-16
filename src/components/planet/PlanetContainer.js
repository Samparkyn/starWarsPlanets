import React, { Component }              from 'react';
import Table                             from './components/Table';
import Pagination                        from './components/Pagination';
import Search                            from './components/Search';
import throttle                          from 'lodash.throttle';
import {
  fetchPlanetsList,
  fetchFilmsList,
  fetchPlanet,
} from './utils/fetch-helper';
import './styles/planet-container.css';


export default class PlanetContainer extends Component {
  
  constructor(props) {
    super(props);
    this.getPlanets        = this.getPlanets.bind(this);
    this.getFilms          = this.getFilms.bind(this);
    this.pageChangeHandler = this.pageChangeHandler.bind(this);
    this.searchHandler     = this.searchHandler.bind(this);
    this.searchPlanet      = throttle(this.searchPlanet.bind(this), 1000);
    this.sortHandler       = this.sortHandler.bind(this);
    this.state = {
      planets: [],
      films: {},
      totalPages: 0,
      currentPage: 1,
      search: '',
      searchResults: [],
      sortKey: 'name',
      sortAsc: true
    };
  }
  
  componentWillMount() {
    this.getPlanets();
    this.getFilms();
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
  
  
  getFilms() {
    fetchFilmsList()
      .then(res => {
        const films = {};
        res.results.map(r => {
          const filmNumber = /(\d+)/.exec(r.url)[0];
          films[filmNumber] = r.title;
        });
        this.setState({
          films: films
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
  
  
  sortPlanets() {
    const { planets, sortKey, sortAsc } = this.state;
    
    const numericKeys = ['diameter', 'rotation_period', 'orbital_period', 'population'];
    
    return planets.sort((a, b) => {
      if (numericKeys.includes(sortKey)) {
        if (!parseInt(a[sortKey])) {
          return 1;
        } else if (!parseInt(b[sortKey])) {
          return -1;
        } else if (parseInt(a) === parseInt(b)) {
          return 0;
        } else {
          return sortAsc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
        }
      } else {
        if (sortAsc) {
          return a[sortKey].localeCompare(b[sortKey]);
        } else {
          return b[sortKey].localeCompare(a[sortKey]);
        }
      }
    });
  }
  
  
  sortHandler(e) {
    const { sortKey, sortAsc } = this.state;
    const keyToSort = e.target.dataset.key;
    
    if (keyToSort === sortKey) {
      this.setState({sortAsc: !sortAsc});
    } else {
      this.setState({sortKey: keyToSort, sortDesc: true});
    }
  }
  
  render() {
    const { totalPages, currentPage, search, searchResults, films } = this.state;
    
    const sortedPlanets = this.sortPlanets();

    return (
      <div>
        <Search
          value={search} searchHandler={this.searchHandler} />
        <Table
          planets={searchResults.length && searchResults || sortedPlanets}
          films={films}
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

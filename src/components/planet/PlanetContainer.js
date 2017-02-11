import React, { Component } from 'react';
import Table from './components/Table';
import { fetchPlanetsList } from './utils/fetch-planets';

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
        <Table planets={planets}/>
      </div>
    );
  }
}

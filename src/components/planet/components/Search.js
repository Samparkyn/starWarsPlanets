import React, { PropTypes } from 'react';
import '../styles/search.css';

export default function Search({value, searchHandler}) {
  return (
      <div className="planets-search">
        <input placeholder="Search" value={value} onChange={searchHandler} />
      </div>
  );
}

Search.propTypes = {
  value:         PropTypes.string,
  searchHandler: PropTypes.func
};

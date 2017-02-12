import React from 'react';

export default function Search({value, searchHandler}) {
  return (
      <div>
        <input value={value} onChange={searchHandler} />
      </div>
  );
}

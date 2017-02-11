import React, { PropTypes } from 'react';

export default function Pagination({totalPages, currentPage}) {

  const pages = [];
  let numberBefore = false;
  const dots = <span>...</span>;
  const prev = <span>{currentPage - 1}</span>;
  const next = <span>{currentPage + 1}</span>;
  const curr = <span>{currentPage}</span>;
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    if (pageNumber === 1 && currentPage > 2) {
      pages.push(dots);
      continue;
    }
    
    if (currentPage - 1 > 0 && !numberBefore) {
      pages.push(prev);
      numberBefore = true;
      continue;
    }
    
    if (pageNumber === currentPage) {
      pages.push(curr);
      if (currentPage + 1 < totalPages) {
        pages.push(next);
        pages.push(dots);
      } else if (currentPage + 1 === totalPages) {
        pages.push(next);
      }
    }
  }
  
  return (
      <div>
        <span>First</span>
        <span>{currentPage}</span>
        <span>&#65513;</span>
        {pages}
        <span>&#65515;</span>
        <span>Last</span>
      </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number
};

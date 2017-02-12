import '../styles/pagination.css';
import React, { PropTypes } from 'react';

export default function Pagination({totalPages, currentPage, changeHandler}) {

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
  
  let prevArrow;
  if (currentPage !== 1) {
    prevArrow = <span data-page={currentPage - 1} onClick={changeHandler}>&#65513;</span>;
  } else {
    prevArrow = <span>&#65513;</span>;
  }
  
  let nextArrow;
  if (currentPage !== totalPages) {
    nextArrow = <span data-page={currentPage + 1} onClick={changeHandler}>&#65515;</span>;
  } else {
    nextArrow = <span>&#65515;</span>;
  }
  
  return (
      <div className="pageArrows">
        <span data-page="1" onClick={changeHandler}>First</span>
        {prevArrow}
        {pages}
        {nextArrow}
        <span data-page={totalPages} onClick={changeHandler}>Last</span>
      </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  changeHandler: PropTypes.func
};

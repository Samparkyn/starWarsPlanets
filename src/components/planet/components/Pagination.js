import '../styles/pagination.css';
import React, { PropTypes } from 'react';

export default function Pagination({totalPages, currentPage, changeHandler}) {

  const pages = [];
  let numberBefore = false;
  const prev = (
    <span
      onClick={changeHandler}
      data-page={currentPage - 1}
      key="prev">
      {currentPage - 1}
    </span>
  );
  const next = (
    <span
      onClick={changeHandler}
      data-page={currentPage + 1}
      key="next">
      {currentPage + 1}
    </span>
  );
  const dots = <span key="dots">...</span>;
  const curr = <span className="curr-page" key="curr">{currentPage}</span>;
  
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
    prevArrow = (
      <span
        className="arrow"
        data-page={currentPage - 1}
        onClick={changeHandler}>
        &#65513;
      </span>
    );
  } else {
    prevArrow = <span className="arrow">&#65513;</span>;
  }
  
  let nextArrow;
  if (currentPage !== totalPages) {
    nextArrow = (
      <span
        className="arrow"
        data-page={currentPage + 1}
        onClick={changeHandler}>
        &#65515;
      </span>
    );
  } else {
    nextArrow = <span className="arrow">&#65515;</span>;
  }
  
  return (
    <div className="pagination">
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

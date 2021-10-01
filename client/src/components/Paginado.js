import React from "react";

import "../css/Paginado.css";

export function Paginado({
  postsPerPage,
  totalPosts,
  paginate,
  minPageNumberLimit,
  maxPageNumberLimit,
  handleNextbtn,
  handlePrevbtn,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginado">
      <button
        onClick={handlePrevbtn}
        disabled={currentPage === pageNumbers[0] ? true : false}
      >
        Prev
      </button>
      {pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <div className="pag">
              <ul className="pagination">
                <li key={number} id={number} onClick={() => paginate(number)} className="page-link">
                  
                    {/*onclick va a cambiar el estado pq se ejecuta paginate */}
                    {number}
                  
                </li>
              </ul>
            </div>
          );
        } else {
          return null;
        }
      })}
      <button
        onClick={handleNextbtn}
        disabled={
          currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
        }
      >
        Next
      </button>
    </div>
  );
}

export default Paginado;

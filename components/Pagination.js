import React from "react";
import style from "../styles/Pagination.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, changeShow }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={style.pagination__container}>
      <div className={style.pagination__pickToShow}>
        <label>Afiseaza</label>
        <select
          value={postsPerPage}
          onChange={(e) => changeShow(e.target.value)}
        >
          {/* <option value='5'>5</option> */}
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      {pageNumbers.map((number) => (
        <button
          className="pagination__button"
          onClick={(e) => paginate(e, number)}
          key={number}
        >
          {number}
        </button>
      ))}

      <style jsx>
        {`
        .pagination__button {
            background: #242423;
            border: none;
            border-bottom: 1px solid #f5cb5c;
            border-radius: 0.3rem 0.3rem 0 0;
            color: #f5cb5c;
            cursor: pointer;
            font-size: 0.75rem;
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            margin-right: 0.4rem;
            margin-top: 0.4rem;
            outline: none;
            padding: 0 0.2rem;
            text-decoration: none;
            width: 1.5rem;
          }
          .pagination__button:hover {
            background: #f5cb5c;
            color: #242424;
          }
          .active {
            background: #f5cb5c;
            color: #242424;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Pagination;

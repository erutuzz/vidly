import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = itemsCount / pageSize;
  if (pagesCount <= 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map((p) => (
          <li
            key={p}
            className={p === currentPage ? "page-item active" : "page-item"}
            onClick={() => onPageChange(p)}
          >
            <span className="page-link">{p}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
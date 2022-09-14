import React, { useState } from "react";
import styled from "styled-components";

const PaginationButton = styled.button<{ isSelected: boolean }>`
  width: 40px;
  height: 40px;
  background-color: ${({ isSelected }) =>
    isSelected ? "#7b61ff" : "transparent"};
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: blue;
  }
  font-size: 20px;
  color: white;
`;

const PaginationLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  margin: 30px auto;
`;

export function Pagination({
  cardsTotal,
  moviesPerPage,
  paginate,
  currentPage,
}: {
  cardsTotal: number;
  moviesPerPage: number;
  paginate: (element: number) => void;
  currentPage: number;
}) {
  const pages = pagination(5)(
    currentPage,
    Math.ceil(cardsTotal / moviesPerPage)
  );

  return (
    <PaginationLine>
      {pages.map((el, index) => (
        <PaginationButton
          key={`${el}-${index}`}
          onClick={() => (typeof el === "number" ? paginate(el) : null)}
          isSelected={currentPage === el}
        >
          {el}
        </PaginationButton>
      ))}
    </PaginationLine>
  );
}

const { floor, min, max } = Math;
const range = (start: number, end: number) =>
  Array.from({ length: end + 1 - start }, (_, i) => i + start);

function pagination(count: number) {
  return function (page: number, total: number): (string | number)[] {
    const start = max(1, min(page - floor((count - 3) / 2), total - count + 2));
    const end = min(total, max(page + floor((count - 2) / 2), count - 1));
    return [
      ...(start > 2 ? [1, "..."] : start > 1 ? [1] : []),
      ...range(start, end),
      ...(end < total - 1 ? ["...", total] : end < total ? [total] : []),
    ];
  };
}

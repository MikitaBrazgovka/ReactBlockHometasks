import React, { ReactNode, useState, useContext } from "react";
import styled from "styled-components";

const Selector = styled.select`
  font-size: 20px;
  list-style-type: none;
  cursor: pointer;
  font-family: Exo2-Regular;
  transition: 0.3s;
  border: none;
  color: #7b61ff;
  :hover {
    color: white;
  }
`;

const Option = styled.option`
  color: #7b61ff;
  font-family: Exo2-Regular;
  font-size: 20px;
  cursor: pointer;
  font-family: Exo2-Regular;
  transition: 0.3s;
`;

/// типизация контекста фильтра:
interface FilterType {
  filterValue: string;
  setFilterValue: (filterValue: string) => void;
}

// создание контекста фильтра:

export const FilterContext = React.createContext<FilterType>({
  filterValue: "movie",
  setFilterValue: () => {},
});

// создание провайдера фильтра :
export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <FilterContext.Provider value={{ filterValue, setFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

/// компонент с селектором фильтра:

export function FilterSelector() {
  const context = useContext(FilterContext);
  const { filterValue, setFilterValue } = context;

  if (!context) return null;
  console.log(filterValue);

  return (
    <Selector
      name="filter"
      id=""
      style={{ background: "none", border: "none" }}
      onChange={(e) => setFilterValue(e.target.value)}
    >
      <Option value={""}>All</Option>
      <Option value="series">Series</Option>
      <Option value="movie">Movie</Option>
      <Option value="game">Game</Option>
    </Selector>
  );
}

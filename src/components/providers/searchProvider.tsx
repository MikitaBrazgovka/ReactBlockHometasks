import React, { ReactNode, useState } from "react";

/// типизация контекста поиска:
interface SearchType {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

/// создание контекста поиска:
export const SearchContext = React.createContext<SearchType>({
  searchValue: "",
  setSearchValue: () => {},
});

/// создание провайдера поиска:
export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState("mad");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

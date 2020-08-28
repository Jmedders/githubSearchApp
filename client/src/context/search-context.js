import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  // this provider holds search/filter vals
  const [sortVal, setSortVal] = useState("relevance");
  const [filterVal, setFilterVal] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [debouncedVal, setDebouncedVal] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchVal,
        setSearchVal,
        filterVal,
        setFilterVal,
        sortVal,
        setSortVal,
        debouncedVal,
        setDebouncedVal,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// call useSearch when you want to make use of any of state
// using context to maintain state through navigation
function useSearch() {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error(`useSearch must be used in SearchProvider`);
  }

  return context;
}

export { useSearch, SearchProvider };

import React, { useState } from "react";
import styled from "styled-components";
import Sort from "../Search/Sort";
import InputSearch from "../Search/InputSearch";
import Filter from "../Search/Filter";
import Margin from "../common/Margin";
import Card from "../common/Card";
import ColorText from "../common/ColorText";
import { useSearch } from "../../context/search-context";
import useDataGrab from "../../hooks/useDataGrab";

export default function Splash() {
  const [debounceSearch, setDebounceSearch] = useState(false);
  const {
    sortVal,
    filterVal,
    setSearchVal,
    debouncedVal,
    setDebouncedVal,
  } = useSearch();
  const { data, loading, error } = useDataGrab({
    searchVal: debouncedVal,
    filterVal,
    sortVal,
  });

  const handleInputChange = ({ target: { value } }) => {
    // if it's been less than 0.45s since user last typed
    // clear old timeout
    if (debounceSearch) clearTimeout(debounceSearch);
    setSearchVal(value);
    setDebounceSearch(
      setTimeout(async () => {
        // only execute a data grab once user input done
        // using a diff. state item so that the search input
        // can update immediately
        setDebouncedVal(value);
      }, 450)
    );
  };

  return (
    <Wrap>
      <h1>Github Repository Search</h1>
      <div>Find a Github repository by searching below.</div>
      <Margin spaceBottom="1.5rem">
        <InputSearch handleChange={handleInputChange} />
      </Margin>
      <SortWrap>
        <Sort />
        <Filter />
      </SortWrap>
      {error && (
        <div>
          <ColorText span error bold>
            Error:{" "}
          </ColorText>
          We were unable to fetch your results from Github. Please check back in
          and try again soon.
        </div>
      )}
      <Margin minHeight>{loading && <>Loading...</>}</Margin>
      {data && data.items && data.items.length ? (
        <>
          {data.items.map((item, idx) => {
            return <Card idx={idx} key={item.id} data={item} />;
          })}
        </>
      ) : (
        <>
          {debouncedVal && !error && !loading ? <>No results found!</> : null}
        </>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 1rem;
  }
`;

const SortWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  max-width: 28rem;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

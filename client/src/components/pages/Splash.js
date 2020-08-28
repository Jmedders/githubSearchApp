import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import InputSearch from "../Search/InputSearch";
import Filter from "../Search/Filter";
import Sort from "../Search/Sort";
import Margin from "../common/Margin";
import ColorText from "../common/ColorText";
import { useSearch } from "../../context/search-context";

export default function Splash() {
  const { searchVal, sortVal, filterVal } = useSearch();
  const [loading, setLoading] = useState(false);
  const [haveRun, setHaveRun] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const grabData = async () => {
    try {
      // set loading state
      setLoading(true);
      // fetch resource from backend
      const response = await axios.get("http://localhost:5000/", {
        params: {
          repositoryName: searchVal,
          sortBy: sortVal,
          filter: filterVal,
        },
      });
      console.log(response);
      // request finished, set loading state to false
      setLoading(false);
      // if there's a response and it has a data object
      // which is default for axios
      if (response && response.data) {
        // set the data so that a list can be displayed
        // this data pulled off in Splash component
        setData(response.data.response);
      }
    } catch (err) {
      // set error state
      setError(err);
    }
  };
  if (searchVal.length === 4 && !haveRun) {
    setHaveRun(true);
    grabData();
  }
  return (
    <Wrap>
      <h1>Github Repository Search</h1>
      <div>Find a Github repository by searching below.</div>
      <Margin spaceBottom="1.5rem">
        <InputSearch />
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

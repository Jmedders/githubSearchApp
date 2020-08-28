import React from "react";
import styled from "styled-components";
import InputSearch from "../Search/InputSearch";
import Filter from "../Search/Filter";
import Sort from "../Search/Sort";
import Margin from "../common/Margin";

export default function Splash() {
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

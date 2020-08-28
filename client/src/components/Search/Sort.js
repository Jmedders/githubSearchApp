import React from "react";
import styled from "styled-components";
import StyledSelect from "../common/StyledSelect";
import Margin from "../common/Margin";
import { useSearch } from "../../context/search-context";

export default function Sort() {
  const { sortVal, setSortVal } = useSearch();
  return (
    <Label htmlFor="sort">
      <strong>Sort:</strong>
      <Margin spaceLeft="0.5rem">
        <StyledSelect
          name="sort"
          id="sort"
          data-cy="sort"
          value={sortVal}
          onChange={({ target }) => setSortVal(target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="stars">Stars</option>
        </StyledSelect>
      </Margin>
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

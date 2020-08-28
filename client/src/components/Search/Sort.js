import React from "react";
import styled from "styled-components";
import StyledSelect from "../common/StyledSelect";
import Margin from "../common/Margin";

export default function Sort({ val, handleChange }) {
  return (
    <Label htmlFor="sort">
      <strong>Sort:</strong>
      <Margin spaceLeft="0.5rem">
        <StyledSelect name="sort" id="sort" value={val} onChange={handleChange}>
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

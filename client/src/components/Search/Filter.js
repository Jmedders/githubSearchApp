import React, { useState } from "react";
import styled from "styled-components";
import StyledSelect from "../common/StyledSelect";
import Margin from "../common/Margin";

export default function Filter({ val, handleChange }) {
  return (
    <Label htmlFor="sort">
      <strong>Filter:</strong>
      <Margin spaceLeft="0.5rem">
        <StyledSelect value={val} onChange={handleChange}>
          <option value="" disabled>
            Filter By Language
          </option>
          <option value="javascript">Javascript</option>
          <option value="typescript">Typescript</option>
          <option value="python">Python</option>
          <option value="ruby">Ruby</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
        </StyledSelect>
      </Margin>
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 800px) {
    margin-top: 0.5rem;
  }
`;

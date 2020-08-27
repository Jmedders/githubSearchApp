import React from "react";
import styled from "styled-components";

export default function InputSearch({ handleChange, val }) {
  return (
    <Wrap>
      <Input
        value={val}
        placeholder="Enter a search term"
        onChange={handleChange}
      />
    </Wrap>
  );
}

const Input = styled.input`
  width: 50%;
  height: 2.375rem;
  border-radius: 0.375rem;
  border: solid 0.063rem #9b9b9b;
  padding-left: 0.5rem;
  @media (max-width: 900px) {
    min-width: 70%;
  }
  @media (max-width: 700px) {
    min-width: 90%;
  }
`;

const Wrap = styled.div`
  max-width: 60vw;
  margin-top: 0.5rem;
  @media (max-width: 900px) {
    min-width: 70vw;
  }
  @media (max-width: 700px) {
    min-width: 90vw;
  }
`;

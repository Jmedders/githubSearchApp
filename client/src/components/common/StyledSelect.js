import React from "react";
import styled from "styled-components";

export default (props) => {
  return <Select {...props}>{props.children}</Select>;
};

const Select = styled.select`
  width: 10rem;
  border: 1px solid #979797;
  border-radius: 0.25rem;
  padding: 0.625rem 0.25rem;
  background: #fff;
  height: 2.5rem;
`;

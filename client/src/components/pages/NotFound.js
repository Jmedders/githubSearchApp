import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      There's nothing here, head <StyledLink to="/">home</StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  color: #678cd9;
`;

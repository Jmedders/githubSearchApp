import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div data-cy="notFound">
      There's nothing here, head{" "}
      <StyledLink data-cy="navHome" to="/">
        home
      </StyledLink>
    </div>
  );
}

const StyledLink = styled(Link)`
  color: #678cd9;
`;

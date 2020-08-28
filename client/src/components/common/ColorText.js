import React from "react";
import styled from "styled-components";

// this custom component just loves being consumed and
// providing a splash of color to the UI
export default function ColorText({
  children,
  bold,
  error,
  span,
  color,
  warn,
}) {
  if (span)
    return (
      <SpanWrap color={color} bold={bold} error={error} warn={warn}>
        {children}
      </SpanWrap>
    );
  return (
    <Wrap color={color} bold={bold} error={error} warn={warn}>
      {children}
    </Wrap>
  );
}
const Wrap = styled.div`
  color: ${({ color, error, warn }) => {
    if (color) return color;
    if (error) return "#ff4444";
    if (warn) return "#FFCC00";
  }};
  font-weight: ${({ bold }) => bold && "bold"};
`;

const SpanWrap = styled.span`
  color: ${({ color, error, warn }) => {
    if (color) return color;
    if (error) return "#ff4444";
    if (warn) return "#FFCC00";
  }};
  font-weight: ${({ bold }) => bold && "bold"};
`;

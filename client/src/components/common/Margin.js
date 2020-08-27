import React from "react";
import styled from "styled-components";

// this custom component allows easy additions of margins
export default function Margin(props) {
  return (
    <MarginAdjustment
      spaceTop={props.spaceTop}
      spaceRight={props.spaceRight}
      spaceLeft={props.spaceLeft}
      spaceBottom={props.spaceBottom}
      {...props}
    >
      {props.children}
    </MarginAdjustment>
  );
}

const MarginAdjustment = styled.div`
  margin-top: ${({ spaceTop }) => spaceTop && spaceTop};
  margin-bottom: ${({ spaceBottom }) => spaceBottom && spaceBottom};
  margin-left: ${({ spaceLeft }) => spaceLeft && spaceLeft};
  margin-right: ${({ spaceRight }) => spaceRight && spaceRight};
  min-height: ${({ minHeight }) => minHeight && "1.3rem"};
`;

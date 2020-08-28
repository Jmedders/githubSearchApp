import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Margin from "./Margin";

export default function Card({ data, idx }) {
  let history = useHistory();
  const handleLink = (url) => {
    window.open(url, "_blank");
  };

  const handleClick = ({ target }) => {
    // if the element clicked on doesn't link elsewhere
    if (target.className !== "hover") {
      // push the user to the detail screen
      history.push(`/view/${data.id}`, data);
    }
  };

  return (
    <Wrap idx={idx} onClick={handleClick}>
      <LeftWrap className="column">
        <RowWrap>
          <span>
            <strong>Name: </strong>
            {data.name}
          </span>
          <Margin spaceLeft="1rem">
            <img
              className="hover"
              src="/github.png"
              style={{ height: "1rem" }}
              onClick={() => handleLink(data.html_url)}
              alt="link to github repository"
            />
          </Margin>
        </RowWrap>
        <div>&#9733; {data.stargazers_count}</div>
        <div>{data.language}</div>
      </LeftWrap>
      <RightWrap className="column">
        <strong>Creator:</strong>
        <div className="hover" onClick={() => handleLink(data.owner.html_url)}>
          {data.owner.login}
        </div>
        <StyledAvatar
          className="hover"
          onClick={() => handleLink(data.owner.html_url)}
          src={data.owner.avatar_url}
        />
      </RightWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 5rem;
  border: 1px solid #d9d9d9;
  padding: 1rem;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  &:nth-child(even) {
    background: #d9d9d9;
  }
  /* passing props for the fun of it */
  border-top-left-radius: ${({ idx }) => idx === 0 && "1rem"};
  border-top-right-radius: ${({ idx }) => idx === 0 && "1rem"};
  /* the following is cleaner of course */
  &:last-child {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledAvatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`;

const LeftWrap = styled.div`
  justify-content: space-between;
  width: 50%;
`;

const RightWrap = styled.div`
  justify-content: space-between;
  align-items: flex-end;
  width: 25%;
`;

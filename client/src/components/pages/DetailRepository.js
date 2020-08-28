import React from "react";
import styled from "styled-components";
import { useLocation, Redirect, useHistory } from "react-router-dom";
import dayjs from "dayjs";
import Margin from "../common/Margin";

export default function DetailRepository() {
  const location = useLocation();
  const history = useHistory();
  const { state } = location;
  // this data has likely never been fetched
  // no info so push user back to root
  if (!state) return <Redirect to="/" />;
  // there is some state, present detail screen
  const goToRepo = () => {
    window.open(state.html_url, "_blank");
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <Wrap>
      <h1>{state.name}</h1>
      <Margin spaceTop="4rem">
        <InfoWrap className="row">
          <div>
            <Img src={state.owner.avatar_url} />
            <Margin spaceTop="0.4rem">
              <h3>
                Creator:{" "}
                <StyledLink href={state.owner.html_url}>
                  {state.owner.login}
                </StyledLink>
              </h3>
            </Margin>
          </div>
          <Description>
            <h3>Description:</h3> {state.description}
          </Description>
          <Meta>
            <h3>Info:</h3>
            <div>Stars: {state.stargazers_count}</div>
            <div>Issues: {state.open_issues_count}</div>
            <div>Forks: {state.forks_count}</div>

            <div>Primarily written in: {state.language}</div>
            <div>Created: {dayjs(state.created_at).format("MM/DD/YYYY")}</div>
            <div>
              Last updated: {dayjs(state.updated_at).format("MM/DD/YYYY")}
            </div>
          </Meta>
        </InfoWrap>
      </Margin>
      <ButtonWrap className="row">
        <Button left onClick={goBack}>
          Go back
        </Button>
        <Button onClick={goToRepo}>Take me there!</Button>
      </ButtonWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 3rem;
`;

const StyledLink = styled.a`
  color: rgba(103, 140, 217, 0.9);
  &:hover {
    cursor: pointer;
    color: rgba(103, 140, 217, 1);
  }
  text-decoration: none;
`;
const InfoWrap = styled.div`
  /*height: 20rem;
  max-width: 15rem;
	/*width: 15re*/
  /*width: 15rem;*/
  /*border: 0.063rem solid #9b9b9b;  */
  justify-content: space-between;
`;

const Img = styled.img`
  height: 10rem;
`;

const Description = styled.div`
  width: 40%;
`;

const Meta = styled.div`
  width: 20%;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(103, 140, 217, 1);
  border-radius: 0.25rem;
  width: 9rem;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 0.825rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  margin-left: ${({ left }) => !left && "1rem"};
  margin-right: ${({ left }) => !left && "-1rem"};
`;

const ButtonWrap = styled.div`
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
`;

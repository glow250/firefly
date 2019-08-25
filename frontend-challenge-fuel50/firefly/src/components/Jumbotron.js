import React from "react";
import styled from "styled-components";
import { Jumbotron as Jumbo } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import StyledIcon from "./StyledIcon";

const StyledJumbo = styled(Jumbo)`
  background-color: #d6ebf3 !important;
  width: 100%;

  .info {
    padding-left: 200px;
    text-align: center;
  }

  .vertical-center {
    min-height: 100vh;

    display: flex;
    align-items: center;
  }

  .btn-outline-info:hover {
    color: #fff;
    background-color: #17a2b8 !important;
    border-color: #17a2b8;
  }
`;

const Welcome = styled.h5`
  font-style: normal;
  font-weight: 400;
`;

const StyledContainer = styled(Container)`
  padding-left: 200px;
`;

const Jumbotron = props => {
  return (
    <StyledJumbo
      fluid
      className="jumbo vertical-center jumbotron shadow-sm py-4"
    >
      <StyledContainer className="info">
        <Welcome>Welcome!</Welcome>
        <p>
          Before you get carried away, do you agree to collecting anonimized
          statistics about the usage of our app?
        </p>
        <Button
          hover
          onClick={props.hide}
          className="mx-2 bg-white shadow-sm"
          variant="outline-info rounded-pill"
        >
          <StyledIcon>
            <i class="material-icons md24">close</i>
          </StyledIcon>
          Disagree
        </Button>
        <Button
          onClick={props.hide}
          className="mx-2 shadow-sm"
          variant="info rounded-pill"
        >
          <StyledIcon>
            <i class="material-icons md24">check</i>
          </StyledIcon>
          I Agree
        </Button>
      </StyledContainer>
    </StyledJumbo>
  );
};
export default Jumbotron;

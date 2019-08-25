import React from "react";
import styled from "styled-components";
import { Jumbotron as Jumbo } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const StyledJumbo = styled(Jumbo)`
  background-color: #d6ebf3 !important;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 0;
  height: 20%;

  .info {
    padding-left: 200px;
    text-align: center;
  }

  .btn-outline-info:hover {
    color: #fff;
    background-color: #17a2b8 !important;
    border-color: #17a2b8;
  }
`;

const StyledContainer = styled(Container)`
  padding-left: 200px;
`;

const StyledIcon = styled.i`
  .material-icons.md24 {
    vertical-align: middle;
    font-size: 24px;
    padding-right: 5px;
  }
`;

const Jumbotron = props => {
  return (
    <StyledJumbo fluid className="jumbo shadow-sm py-4">
      <StyledContainer className="info">
        <h4 className="text-dark">Welcome!</h4>
        <p className="text-dark">
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
            <i class="material-icons md24">check</i>I Agree
          </StyledIcon>
        </Button>
      </StyledContainer>
    </StyledJumbo>
  );
};
export default Jumbotron;

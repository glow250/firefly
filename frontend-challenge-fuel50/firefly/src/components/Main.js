import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Overview from "./Overview";
import TopMusic from "./TopMusic";

const Styles = styled.div`
  .main {
    position: absolute;
    left: 200px;
    height: 75%;
    right: 0;
    bottom: 0;
    padding: 3px 8px;
    z-index: 1;
  }
`;

class Main extends Component {
  state = {};
  render() {
    return (
      <Styles>
        <div className="main">
          <Overview />
          <TopMusic />
        </div>
      </Styles>
    );
  }
}

export default Main;

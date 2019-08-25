import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .cont {
    display: flex;
    width: 100%;
    align-items: stretch;
  }
`;

const Layout = props => (
  <Styles>
    <div className="cont">{props.children}</div>
  </Styles>
);

export default Layout;

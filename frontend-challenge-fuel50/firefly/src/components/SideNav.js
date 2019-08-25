import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../assets/ff_logo.png";
import styled from "styled-components";

const Styles = styled.div`
  #bottom {
    border-top: 1px solid #416673;
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 200px;
    height: 7%;
  }
  #sidebar-wrapper {
    z-index: 1;
    position: absolute;
    width: 200px;
    height: 100vh;
    overflow-y: hidden;
    background: #073648;
  }
  .sidebar-nav {
    padding: 0;
    list-style: none;
  }
  .sidebar-nav li {
    text-indent: 20px;
    line-height: 30px;
  }
  a {
    display: block;
    text-decoration: none;
    color: #416673;
    font-weight: 300;

    &:hover {
      background: #1f4a5a;
      text-decoration: none;
      text-indent: 15px;
      color: white;
      border-left: 5px solid white;
    }
  }
  .active {
    background: #1f4a5a;
    text-indent: 15px;
    color: white;
    border-left: 5px solid white;
  }
  .title {
    padding-left: 0;
    padding-top: 10px;
    vertical-align: middle;
    font-weight: bold;
    color: white;
  }
  .border-bottom {
    border-color: #416673 !important;
  }
  .copyright {
    color: #416673;
    text-align: center;
    font-size: 10px;
    text-indent: 0 !important;
  }

  .material-icons.md10 {
    font-size: 10px;
  }
`;

const SideNav = () => (
  <Styles>
    <div id="sidebar-wrapper">
      <Container className="py-2 justify-content-md-center border-bottom">
        <Row>
          <Col sm={4}>
            <Image src={logo} fluid />
          </Col>
          <Col className="title" sm={8}>
            DataDashboard
          </Col>
        </Row>
      </Container>
      <ul class="sidebar-nav">
        <li>
          <a href="#" className="active">
            Overview
          </a>
        </li>
        <li>
          <a href="#">Animals</a>
        </li>
        <li>
          <a href="#">Food</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
      </ul>
      <ul class="sidebar-nav" id="bottom">
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
        <li className="copyright">
          <i class="material-icons md10">copyright</i>FireFly 2019
        </li>
      </ul>
    </div>
  </Styles>
);

export default SideNav;

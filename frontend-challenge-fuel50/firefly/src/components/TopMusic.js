import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Nav";
import StyledIcon from "./StyledIcon";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const StyledContainer = styled(Container)`
  padding: 10px;
`;

const StyledTable = styled(Table)`
  width: 100%;
`;

const Styles = styled.div`
  #order {
    padding-right: 10px;
    font-size: 15px;
  }
  .material-icons.md-red {
    color: red;
    text-align: right;
  }
  .material-icons.md-blue {
    color: #4c9fbc;
  }
  .col {
    text-align: center;
  }
  h1 {
    color: #4b4b4b;
    font-size: 25px;
  }
  .headers {
    color: #d2d3d3;
    font-weight: 600;
  }
  .index {
    font-weight: bold;
    padding-left: 10px;
  }
  .num {
    text-align: right;
  }
`;

const ColRight = styled(Col)`
  text-align: right !important;
`;

const StyledNav = styled(Navbar)`
  padding: 10px;
`;

const StyledLink = styled(Nav.Link)`
  color: #4c9fbc;
  text-align: center;
  &:hover {
    color: #4c9fbc;
    background-color: #edf6f9 !important;
    border-bottom: 3px solid #afdae8;
    border-radius: 3px;
  }
`;

const Span = styled.span`
  background-color: orange;
  border-radius: 3px;
  font-size: 12px;
  padding: 2px;
  margin: 2px;
  color: white;
`;

const StyledLinkActive = styled(StyledLink)`
  background-color: #edf6f9 !important;
  border-bottom: 3px solid #afdae8;
  border-radius: 3px;
`;

const Icontd = styled.td`
  text-align: center;
`;

class TopMusic extends Component {
  state = {};
  render() {
    const options = (
      <Icontd>
        <i class="material-icons md-red">delete</i>
        <i class="material-icons md-blue">share</i>
      </Icontd>
    );
    return (
      <React.Fragment>
        <Styles>
          <Container fluid className="music">
            <h1>Top Music</h1>
            <StyledContainer fluid className="bg-white">
              <StyledNav bg="light" variant="light">
                <Nav fluid className="mr-auto info">
                  <StyledLinkActive>Artists</StyledLinkActive>
                  <StyledLink>Songs</StyledLink>
                  <StyledLink>
                    Moods<Span>21</Span>
                  </StyledLink>
                </Nav>
                <span class="navbar-text" id="order">
                  Order by
                </span>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-info"
                    className="rounded-pill shadow-sm"
                    id="dropdown-basic"
                  >
                    Most Played
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </StyledNav>
              <StyledTable hover size="sm" className="table p-10">
                <tbody>
                  <tr className="headers">
                    <td className="index">#</td>
                    <td>ARTIST</td>
                    <td>PLAYS</td>
                    <td className="num">SONGS</td>
                    <td />
                  </tr>
                  <tr>
                    <td className="index">1</td>
                    <td>The Wiggles</td>
                    <td>86,340</td>
                    <td className="num">189</td>
                    {options}
                  </tr>
                  <tr>
                    <td className="index">2</td>
                    <td>Dolly Parton</td>
                    <td>86,333</td>
                    <td className="num">244</td>
                    {options}
                  </tr>
                  <tr>
                    <td className="index">3</td>
                    <td>Welllington International Ukulele Orchestra</td>
                    <td>85023</td>
                    <td className="num">12</td>
                    {options}
                  </tr>
                </tbody>
              </StyledTable>
              <Row className="align-self-end ml-auto">
                <ColRight>
                  <Button
                    className="mx-2 shadow-sm"
                    variant="info rounded-pill"
                  >
                    View more music data
                    <StyledIcon>
                      <i class="material-icons md24">navigate_next</i>
                    </StyledIcon>
                  </Button>
                </ColRight>
              </Row>
            </StyledContainer>
          </Container>
        </Styles>
      </React.Fragment>
    );
  }
}

export default TopMusic;

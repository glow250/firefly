import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

const StyledContainer = styled(Container)`
  padding: 10px;
`;

const StyledTable = styled(Table)`
  width: 100%;
`;

const Styles = styled.div`
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

const StyledNav = styled(Navbar)`
  padding: 10px;
`;

const StyledLink = styled(Nav.Link)`
  color: #4c9fbc;
  text-align: center;
`;

const StyledLinkActive = styled(StyledLink)`
  background-color: #edf6f9 !important;
  border-bottom: 3px solid #afdae8;
  border-radius: 3px;
`;

class TopMusic extends Component {
  state = {};
  render() {
    const options = (
      <td>
        <i class="material-icons md-red">delete</i>
        <i class="material-icons md-blue">share</i>
      </td>
    );
    return (
      <React.Fragment>
        <Styles>
          <h1>Top Music</h1>
          <StyledContainer fluid className="bg-white">
            <StyledNav bg="light" variant="light">
              <Nav fluid className="mr-auto info">
                <StyledLinkActive>Artists</StyledLinkActive>
                <StyledLink>Songs</StyledLink>
                <StyledLink>Moods</StyledLink>
              </Nav>
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
                  <td></td>
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
          </StyledContainer>
        </Styles>
      </React.Fragment>
    );
  }
}

export default TopMusic;

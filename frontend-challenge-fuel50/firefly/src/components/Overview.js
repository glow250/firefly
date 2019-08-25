import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Bubble from "./Bubble";
import styled from "styled-components";

const Styles = styled.div`
  .col {
    text-align: center;
  }
  .overview {
    margin-bottom: 3%;
    height: 35%;
  }
  h1 {
    color: #4b4b4b;
    font-size: 25px;
  }
`;

class Overview extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Styles>
          <Container fluid className="overview">
            <h1>Overview</h1>
            <Row>
              <Col>
                <Bubble amount="198" change="84" direction="down" />
              </Col>
              <Col>
                <Bubble amount="5" change="2" direction="up" />
              </Col>
              <Col>
                <Bubble amount="1,324" change="1,324" direction="up" />
              </Col>
            </Row>
            <Row>
              <Col>Cat videos watched</Col>
              <Col>
                Slices of pizza
                <br />
                in the fridge
              </Col>
              <Col>
                Favourite songs beginning
                <br />
                with the letter 'A'
              </Col>
            </Row>
          </Container>
        </Styles>
      </React.Fragment>
    );
  }
}

export default Overview;

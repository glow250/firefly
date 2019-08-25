import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Styles = styled.div`
  .bubble {
    width: 100px;
    height: 100px;
    color: #fff;
    margin: 10% auto;
    margin-bottom: 5%;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 0 2pt white;
  }

  .bubble-content {
    position: absolute;
    width: 95px;
    height: auto;
    top: 50%;
    transform: translateY(-40%);
    text-align: center;
  }

  h3 {
    margin-bottom: 0;
  }

  p {
    font-size: 7px;
  }

  #down {
    background: #de1428;
    border: 2px solid #b51020;
  }

  #up {
    background: #399948;
    border: 2px solid #2e7d3b;
  }

  .material-icons.tiny {
    font-size: 10px;
    vertical-align: middle;
    padding-right: 2px;
  }
`;
const Bubble = props => {
  let icon = null;
  if (props.direction == "up") {
    icon = <i class="material-icons tiny">arrow_upward</i>;
  } else {
    icon = <i class="material-icons tiny">arrow_downward</i>;
  }
  return (
    <React.Fragment>
      <Styles>
        <div className="bubble-bg">
          <div className="bubble-info">
            <div className="bubble" id={props.direction}>
              <div className="bubble-content">
                <h3>{props.amount}</h3>
                <p>
                  {icon}
                  <b>{props.change}</b> last 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </Styles>
    </React.Fragment>
  );
};

export default Bubble;

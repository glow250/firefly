import React, { Component } from "react";
import SideNav from "./components/SideNav";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import Layout from "./components/Layout";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    font-family: 'Open Sans', 'Material Icons';
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: true
    };
  }

  hide = () => {
    this.setState({
      popup: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Layout>
          <SideNav />
          {this.state.popup && <Jumbotron hide={this.hide} />}
          <Main />
        </Layout>
      </React.Fragment>
    );
  }
}
export default App;

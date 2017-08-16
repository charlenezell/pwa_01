import React, { Component } from 'react';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userInfo: {messageNumber:0,userId:123}};
  }
  render() {
    return (
      <Nav userInfo={this.state.userInfo} />
    );
  }
}

export default App;

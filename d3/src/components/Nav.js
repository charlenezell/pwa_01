import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <pre>
        {JSON.stringify(this.props.userInfo?this.props.userInfo:{},null,'\t')}
      </pre>
    );
  }
}

export default Nav;

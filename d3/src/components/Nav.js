import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Nav extends Component {
  render() {
    return (<div>
        <span>logo</span>
        <div onClick={this.props.onMsgClick}>消息{this.props.userInfo.messageNumber}</div>
        <a href={this.props.userInfo.userId}>我的页面</a>
      </div>)
  }
}


export default Nav;
import React, {
  Component
} from 'react';

import {
  connect
} from 'react-redux';

import {
  initIndexPageData,
  removeItem
} from '../actions/';

import Main from '../components/App';

function mapStateToProps(state) {
  const props = {
    novelList:state.novelList,
    loading:state.root.fetchFlag
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  return {
    initData: function () {
      dispatch(initIndexPageData());
    },
    novelItemClick:function(e){
      dispatch(removeItem(e))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);

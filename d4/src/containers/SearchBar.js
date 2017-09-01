import React, {
  Component
} from 'react';

import {
  connect
} from 'react-redux';

import {
    filterChange
} from '../actions/';

import SearchBar from '../components/searchBar';

function mapStateToProps(state) {
  return {
    filterText:state.filterText
  }
}

function mapDispatchToProp(dispatch){
  return {
    changeHandler:(e)=>{
        dispatch(filterChange(e))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProp)(SearchBar);

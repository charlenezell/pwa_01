
import {
  FETCH_END,
  FETCH_START,
  FETCH_SUCCESS_NOVELLIST,
  REMOVE_ITEM,
  FILTERCHANGE,
  FETCH_SUCCESS_RECOMMENTLIST,
  INIT_PAGEDATA,
  FILTERINPUTCHANGE,
  UPDATEITEMSTATUS
} from './const.js';

let initIndexPageDataSaga = () => {
  return {
    type: INIT_PAGEDATA
  };
};

const actions = {
  initIndexPageDataSaga,
  filterChange: function (arg) {
    return {
      type: FILTERCHANGE,
      payLoad: arg
    }
  },
  filterInputChange:function (arg){
    return {
      type:FILTERINPUTCHANGE,
      payLoad:arg
    }
  },
  updataItemStatus:function(id,value,type){
    return {
      type:UPDATEITEMSTATUS,
      payLoad:{
        id,
        value,
        type
      }
    }
  }
};
module.exports = actions;

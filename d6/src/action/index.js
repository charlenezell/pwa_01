
import {
  FETCH_END,
  FETCH_START,
  FETCH_SUCCESS_NOVELLIST,
  REMOVE_ITEM,
  FILTERCHANGE,
  FETCH_SUCCESS_RECOMMENTLIST,
  INIT_PAGEDATA,
  FILTERINPUTCHANGE,
  UPDATEITEMSTATUS,
  SHOWDETAIL,
  HIDEDETAIL,
  PAGECHANGE,
  TABLESELECTCHANGE,
  HIDESYSTEMINFO
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
  },
  showDetail:function(data){
    return {
      type:SHOWDETAIL,
      payLoad:{
        content:data
      }
    }
  },
  hideDetail:function(){
    return {
      type:HIDEDETAIL
    }
  },
  pageChange:function(e){
    return {
      type:PAGECHANGE,
      payLoad:e
    };
  },
  tableSelectChange:function(e){
    return {
      type:TABLESELECTCHANGE,
      payLoad:e
    }
  },
  hideSystemInfo:function(){
    return {
      type:HIDESYSTEMINFO
    }
  }
};
module.exports = actions;

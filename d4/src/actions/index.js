import {
  getRecommendList,
  getQQRecommendList
} from 'da';

import {
  FETCH_END,
  FETCH_START,
  FETCH_SUCCESS_NOVELLIST,
  REMOVE_ITEM,
  FILTERCHANGE,
  FETCH_SUCCESS_RECOMMENTLIST
} from './const.js';


function getQQ(resolve, reject,dispatch) {
  return getQQRecommendList().then(v => {
    resolve(v);
    dispatch({
      type: FETCH_SUCCESS_RECOMMENTLIST,
      payLoad: v
    });
  })
}
function getHS(resolve, reject,dispatch) {
  return getRecommendList().then(v => {
    dispatch({
      type: FETCH_SUCCESS_RECOMMENTLIST,
      payLoad: v.data
    });
  })
}


let initIndexPageData = (arg) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: FETCH_START
    });
    getQQ(resolve,reject,dispatch).then(v => {
      dispatch({
        type: FETCH_END
      });
    }).catch(() => {
      dispatch({
        type: FETCH_END
      });
    })
  })
};
const actions = {
  initIndexPageData,

  removeItem: function (arg) {
    return {
      type: REMOVE_ITEM,
      payLoad: arg
    };
  },
  filterChange: function (arg) {
    return {
      type: FILTERCHANGE,
      payLoad: arg
    }
  }
};
module.exports = actions;

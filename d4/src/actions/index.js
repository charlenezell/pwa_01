import {
  getRecommendList
} from 'da';

import {
  FETCH_END,
  FETCH_START,
  FETCH_SUCCESS_NOVELLIST,
  REMOVE_ITEM
} from './const.js';

let initIndexPageData = (arg) => (dispatch) => {
  dispatch({
    type: FETCH_START
  });
  return new Promise((resolve, reject) => {
    getRecommendList().then(v => {
      if (v.code == 0) {
        resolve(v)
      } else {
        reject();
      }
    })
  }).then(v => {

    dispatch({
      type:FETCH_SUCCESS_NOVELLIST,
      payLoad: v.data
    });

    dispatch({
      type: FETCH_END
    });
  }).catch(() => {
    dispatch({
      type: FETCH_END
    });
  })
}
const actions = {
  initIndexPageData,
  removeItem:function(arg){
    return function(dispatch){
      dispatch({
        type:REMOVE_ITEM,
        payLoad:arg
      })
    }
  }
};
module.exports = actions;

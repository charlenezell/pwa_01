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
  FETCH_SUCCESS_RECOMMENTLIST,
  INIT_PAGEDATA
} from './const.js';

let initIndexPageDataSaga = () => {
  return {
    type: INIT_PAGEDATA
  };
};

const actions = {
  initIndexPageDataSaga,
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

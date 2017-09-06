/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import {
  combineReducers
} from 'redux';
import {
  FETCH_END,
  FETCH_START,
  FETCH_SUCCESS_NOVELLIST,
  REMOVE_ITEM,
  FILTERCHANGE,
  FETCH_SUCCESS_RECOMMENTLIST
} from "../action/const.js";

const reducers = {
  fetchFlag: function (state = false, action) {
    switch (action.type) {
      case FETCH_END:
        return false;
      case FETCH_START:
        return true;
      default:
        return state;
    }
  },
  filterText: (state = "", action) => {
    if (action.type === FILTERCHANGE) {
      return action.payLoad;
    } else {
      return state;
    }
  },
  qqRecommandList:(state={},action)=>{
    switch (action.type) {
      case FETCH_SUCCESS_RECOMMENTLIST:
        let g = {};
        action.payLoad.data.datas.forEach(v => {
          g[v.id] = v;
        });
        let ccc = {
          ...state,
          ...g
        }
        return ccc;
      default:
        return state
    }
  }
};
const combined = combineReducers(reducers);
module.exports = combined;

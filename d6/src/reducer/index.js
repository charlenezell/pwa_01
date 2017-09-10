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
  FETCH_SUCCESS_RECOMMENTLIST,
  SAVE_TOKEN,
  FILTERINPUTCHANGE,
  UPDATEITEMSTATUS,
  SHOWDETAIL,
  HIDEDETAIL,
  PAGECHANGE,
  TABLESELECTCHANGE,
  HIDESYSTEMINFO
} from "../action/const.js";
import { ITEM_PERPAGE } from '../env'

const reducers = {
  token: function (state = "", action) {
    if (action.type === SAVE_TOKEN) {
      return action.payLoad;
    } else {
      return state;
    }
  },
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
  filter: (state = {}, action) => {
    if (action.type === FILTERCHANGE) {
      return { ...state, ...action.payLoad };
    } else if (action.type == FILTERINPUTCHANGE) {
      return {
        ...state, ...{
          [action.payLoad.name]: action.payLoad.value
        }
      }
    } else {
      return state;
    }
  },
  detailDialog: (state = {}, action) => {
    switch (action.type) {
      case SHOWDETAIL:
        return {
          show: true,
          content: action.payLoad.content
        }
      case HIDEDETAIL:
        return {
          show: false,
          content: ``
        }
      default:
        return state
    }
  },
  systemInfo: (state = {}, action) => {
    switch (action.type) {
      case UPDATEITEMSTATUS:
        return {
          show: true,
          content: `更新id为${action.payLoad.id}的数据成功~`
        }
      case HIDESYSTEMINFO:
        return {
          show: false
        }
      default:
        return state
    }
  },
  workListStatus: (state = {}, action) => {
    switch (action.type) {
      case PAGECHANGE:
        return {
          ...state,
          offset: action.payLoad.selected * ITEM_PERPAGE
        }
      case FETCH_SUCCESS_RECOMMENTLIST:
        let { offset,
          limit,
          totalCount,
          totalPage
          } = action.payLoad.data;
        return {
          ...state, ...{
            offset,
            limit,
            totalCount,
            totalPage
          }
        };
      default:
        return state
    }
  },
  selectedItem: (state = {}, action) => {
    switch (action.type) {
      case TABLESELECTCHANGE:
        return action.payLoad
      default:
        return state;
    }

  },
  workList: (state = {}, action) => {
    switch (action.type) {
      case FETCH_SUCCESS_RECOMMENTLIST:
        let g = {};
        action.payLoad.data.datas.forEach((v, k) => {
          g[v.id] = v;
          g[v.id]["_order"] = k;
        });
        return g;
      case UPDATEITEMSTATUS:
        let c = { ...state };
        c[action.payLoad.id] = {
          ...c[action.payLoad.id],
          [action.payLoad.type]: action.payLoad.value
        }
        return c;
      default:
        return state
    }
  }
};
const combined = combineReducers(reducers);
module.exports = combined;

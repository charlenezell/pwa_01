import { delay } from 'redux-saga';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { getEditorList, getToken } from '../da';
import util from '../util';
import {
    INIT_PAGEDATA,
    FETCH_START,
    FETCH_END,
    FETCH_SUCCESS_RECOMMENTLIST,
    FILTERCHANGE,
    SAVE_TOKEN,
    PAGECHANGE
} from "../action/const.js"
function* fetchUser() {
    let c = yield call(getQQRecommendList);

    yield put({ type: "USER_FETCH_SUCCESS", payLoad: c });
}
function* initPageData() {
    yield put({ type: FETCH_START });
    let { BTValue: token } = yield call(getToken);
    yield put({
        type: SAVE_TOKEN,
        payLoad: token
    });
    yield* _renderPageData(token);
    yield put({ type: FETCH_END });
}



function* _renderPageData(token) {
    let { filter,workListStatus:{offset,limit} } = yield select();
    let data = yield call(getEditorList, { tk: token, ...util.trimEmptyObjectValue(filter) ,offset,limit});
    yield put({
        type: FETCH_SUCCESS_RECOMMENTLIST,
        payLoad: data
    })
}
function* renderPageData() {
    yield put({ type: FETCH_START });
    let state = yield select();
    yield* _renderPageData(state.token);
    yield put({ type: FETCH_END });
}

export default function* mySaga() {
    // yield takeLatest("USER_FETCH", fetchUser);
    yield takeLatest(INIT_PAGEDATA, initPageData);
    yield takeLatest(FILTERCHANGE, renderPageData);
    yield takeLatest(PAGECHANGE, renderPageData);
}
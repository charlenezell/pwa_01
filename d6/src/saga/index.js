import {delay} from 'redux-saga';
import { takeLatest, put, call } from 'redux-saga/effects';
import { getQQRecommendList } from '../da';
import {
    INIT_PAGEDATA,
    FETCH_START,
    FETCH_END,
    FETCH_SUCCESS_RECOMMENTLIST
} from "../action/const.js"
function* fetchUser() {
    let c = yield call(getQQRecommendList);

    yield put({ type: "USER_FETCH_SUCCESS", payLoad: c });
}
function * initPageData(){
    yield put({ type:FETCH_START });
    let userInfo=yield call(getQQRecommendList);
    // yield delay(5000);
    yield put({
        type:FETCH_SUCCESS_RECOMMENTLIST,
        payLoad: userInfo
    })
    yield put({ type:FETCH_END });
}
export default function* mySaga() {
    // yield takeLatest("USER_FETCH", fetchUser);
    yield takeLatest(INIT_PAGEDATA,initPageData)
}
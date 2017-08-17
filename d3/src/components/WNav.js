import {
    connect
} from 'react-redux'
import {
    clearMsg
} from '../actions';
import Nav from './Nav';

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMsgClick: () => {
            //sync
            dispatch(clearMsg())
            //async
            // 1. native redux
            //dispatch("startloading")
            // asyncthing().then(function(){
            //     dispatch(clearMsg())
            // }).always(()=>{
            //     dispatch("stoploading")
            // })
            //2. redux-trunk dispatch a function other than a action object
            // let t_clearMsg = () => (dispatch, state) => {
            //     dispatch("startloading")
            //     asyncthing().then(function () {
            //         dispatch(clearMsg())
            //     }).always(() => {
            //         dispatch("stoploading")
            //     })
            // }
            // dispatch(t_clearMsg())
            //3. native transmit dispatch to util
            // let t_clearMsg =(dispatch) => {
            //     dispatch("startloading")
            //     asyncthing().then(function () {
            //         dispatch(clearMsg())
            //     }).always(() => {
            //         dispatch("stoploading")
            //     })
            // }
            // t_clearMsg(dispatch)
        }
    }
}
const WNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)

export default WNav
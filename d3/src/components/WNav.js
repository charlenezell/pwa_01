import { connect } from 'react-redux'
import { clearMsg } from '../actions';
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
            dispatch(clearMsg())
        }
    }
}
const WNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)

export default WNav
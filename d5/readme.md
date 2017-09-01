# saga

1. effect as data testablity

# saga(es2015 generator) vs thunk(es2017 async/await)

```javascript
import { login } from 'redux/auth';

class LoginForm extends Component {

  onClick(e) {
    e.preventDefault();
    const { user, pass } = this.refs;
    this.props.dispatch(login(user.value, pass.value));
  }

  render() {
    return (<div>
        <input type="text" ref="user" />
        <input type="password" ref="pass" />
        <button onClick={::this.onClick}>Sign In</button>
    </div>);
  }
}

export default connect((state) => ({}))(LoginForm);

//action

// auth.js

import request from 'axios';
import { loadUserData } from './user';

// define constants
// define initial state
// export default reducer

export const login = (user, pass) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        let { data } = await request.post('/login', { user, pass });
        await dispatch(loadUserData(data.uid));
        dispatch({ type: LOGIN_SUCCESS, data });
    } catch(error) {
        dispatch({ type: LOGIN_ERROR, error });
    }
}

// more actions...

//user

// user.js

import request from 'axios';

// define constants
// define initial state
// export default reducer

export const loadUserData = (uid) => async (dispatch) => {
    try {
        dispatch({ type: USERDATA_REQUEST });
        let { data } = await request.get(`/users/${uid}`);
        dispatch({ type: USERDATA_SUCCESS, data });
    } catch(error) {
        dispatch({ type: USERDATA_ERROR, error });
    }
}

// more actions...
```

```javascript
export function* loginSaga() {
  while(true) {
    const { user, pass } = yield take(LOGIN_REQUEST)
    try {
      let { data } = yield call(request.post, '/login', { user, pass });
      yield fork(loadUserData, data.uid);
      yield put({ type: LOGIN_SUCCESS, data });
    } catch(error) {
      yield put({ type: LOGIN_ERROR, error });
    }
  }
}

export function* loadUserData(uid) {
  try {
    yield put({ type: USERDATA_REQUEST });
    let { data } = yield call(request.get, `/users/${uid}`);
    yield put({ type: USERDATA_SUCCESS, data });
  } catch(error) {
    yield put({ type: USERDATA_ERROR, error });
  }
}
```

```javascript


function* authorize(credentials) {
  const token = yield call(api.authorize, credentials)
  yield put( login.success(token) )
  return token
}

function* authAndRefreshTokenOnExpiry(name, password) {
  let token = yield call(authorize, {name, password})
  while(true) {
    yield call(delay, token.expires_in)
    token = yield call(authorize, {token})
  }
}

function* watchAuth() {
  while(true) {
    try {
      const {name, password} = yield take(LOGIN_REQUEST)

      yield race([
        take(LOGOUT),
        call(authAndRefreshTokenOnExpiry, name, password)
      ])

      // user logged out, next while iteration will wait for the
      // next LOGIN_REQUEST action

    } catch(error) {
      yield put( login.error(error) )
    }
  }
}
```
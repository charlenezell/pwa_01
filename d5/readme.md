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


# some thing about generator and async

```javascript
function getData(userId) {
    return new Promise((a,b)=>{
        if (true) {
            throw "xiaoming";
            a({
                status: "i'm good"
            })
        }
    }
    )
}

function sleep(t){
    return new Promise((a,b)=>{
        setTimeout(()=>{
            a();
        },t)
    });
}

 async function getData2() {
      console.log("waiting")
      await sleep(3000);//await for promise
      console.log("after 3s")
//       throw new Error("heelo");
      return "i am awake";
}
async function main2(){
    try{
      let c=await getData2();//await for async function
      console.log(c);
    }catch(e){
        console.log("error",e);
    }
}



function run(main) {
    var c = main(),g
    (function iter(i) {
         g = c.next(i);
//         console.log("it");
        if(!g.done){
          if (g.value.then) {
            g.value.then(iter).catch((d)=>{
                c.throw(d)
            })
          } else {
              iter(g.value);
          }
        }
    })();
}


main2();

run(function *main() {
    var userId = 123;
    try {
        let c = yield getData(userId);
//         console.log(c.status);
        let w= yield 123;
        console.log(w,c);
    } catch (e) {
        console.log('error', e);
    }

});

```
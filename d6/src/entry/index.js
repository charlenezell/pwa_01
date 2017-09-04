require("react-hot-loader/patch")
require("webpack-dev-server/client?http://0.0.0.0:8000/")
require('webpack/hot/only-dev-server')
import babelpolyfill from 'babel-polyfill';

import { AppContainer } from 'react-hot-loader';
import { initIndexPageDataSaga } from '../action';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider ,connect} from 'react-redux';
import configureStore from '../store';
import RecommandList from '../component/recommendList';
import style from './index.scss';
const store = configureStore({
    qqRecommandList: {},
    fetchFlag: false,
    filterText: ""
})

class Index extends Component {
    componentDidMount() {
        this.props.initPage();
    }
    render() {
        return <div className={style.className}>
            {
                this.props.loading ? <div>loading</div> : ''
            }
            <RecommandList  {...this.props} />
            {/* <NovelList  {...props} /> */}
        </div>
    }
}

let Windex=connect((state)=>{
   return {
    qqRecommandList:state.qqRecommandList,
    loading:state.fetchFlag,
    filterText:state.filterText
   }
},(dispatch)=>{
   return {
    initPage:function(){
      dispatch(initIndexPageDataSaga());
    }
   }
})(Index);

function render() {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Windex />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
}

render();

if (module.hot) {
    module.hot.accept('./', () => {
        render();
    });
}
require("react-hot-loader/patch")
import babelpolyfill from 'babel-polyfill';

import { AppContainer } from 'react-hot-loader';
import { initIndexPageDataSaga } from '../saga';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
        this.props.dispatch(initIndexPageDataSaga());
    }
    render() {
        return <div className={style.className}>
            {
                props.loading ? <div>loading</div> : ''
            }
            <RecommandList  {...props} />
            {/* <NovelList  {...props} /> */}
        </div>
    }
}

function render() {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Index />
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
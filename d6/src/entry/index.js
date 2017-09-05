require("react-hot-loader/patch")
import babelpolyfill from 'babel-polyfill';

import { AppContainer } from 'react-hot-loader';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider ,connect} from 'react-redux';
import configureStore from '../store';
import Windex from '../component/index';



const store = configureStore({
    qqRecommandList: {},
    fetchFlag: false,
    filterText: ""
})

function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
}

render(Windex);

if (module.hot) {
    module.hot.accept('../component/index', () => {
        console.log("hello")
        render(Windex);
    });
}
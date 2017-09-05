
import 'babel-polyfill';

import { AppContainer } from 'react-hot-loader';
import { h, render, Component } from 'preact';
// import ReactDOM from 'react-dom';
import { Provider ,connect} from 'react-redux';
import configureStore from '../store';
import Windex from '../component/index';



const store = configureStore({
    qqRecommandList: {},
    fetchFlag: false,
    filterText: ""
})

function irender(Component) {
    render(
        (<AppContainer>
            <Provider store={store}>
                <Component ></Component>
            </Provider>
    </AppContainer>),
        document.getElementById('root')
    );
}

irender(Windex);

if (module.hot) {
    module.hot.accept('../component/index', () => {
        let a=require("../component/index")
        irender(a);
    });
}
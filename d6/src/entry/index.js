import { AppContainer } from 'react-hot-loader';
import {  Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider ,connect} from 'react-redux';
import configureStore from '../store';
import Windex from '../component/index';



const store = configureStore({
    qqRecommandList: {},
    fetchFlag: false,
    filterText: ""
})

function irender(Component) {
    ReactDOM.render(
        <AppContainer>[Error Happened](http://--config webpack.dev.js)
            <Provider store={store}>
                <Component ></Component>
            </Provider>
    </AppContainer>,
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
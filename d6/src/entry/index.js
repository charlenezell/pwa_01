import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import configureStore from '../store';
import Windex from '../component/index';
import {ITEM_PERPAGE} from '../env'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const store = configureStore({
    workList: {},
    fetchFlag: false,
    selectedItem:[],
    workListStatus:{
        offset:0,
        limit:ITEM_PERPAGE
    },
    filter: {
        stageType: "",
        offset: 0,
        limit: 100,
        ddId: "",
        dataStatus: "",
        sortType: 0,
        actStoryId: ""
    },
    token: "",
    detailDialog: {
        show: false,
        content: "",
        title: ""
    },
    systemInfo:{
        show:false,
        content:""
    }
})

function irender(Component) {
    ReactDOM.render(
        <AppContainer>
            {/* <MuiThemeProvider > */}
            <MuiThemeProvider muiTheme={getMuiTheme({
                ...lightBaseTheme,
                fontFamily: "Microsoft Yahei"
            })}>
                <Provider store={store}>
                    <Component ></Component>
                </Provider>
            </MuiThemeProvider>
        </AppContainer>,
        document.getElementById('root')
    );
}

irender(Windex);

if (module.hot) {
    module.hot.accept('../component/index', () => {
        let a = require("../component/index")
        irender(a);
    });
}
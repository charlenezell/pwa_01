import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider ,connect} from 'react-redux';
import configureStore from '../store';
import Windex from '../component/index';



const store = configureStore({
    workList: {},
    fetchFlag: false,
    filter:{
        stageType:"",
        offset:0,
        limit:100,
        ddId:"",
        dataStatus:"",
        sortType:0,
        actStoryId:""
    },
    token:""
})

function irender(Component) {
    ReactDOM.render(
        <AppContainer>
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
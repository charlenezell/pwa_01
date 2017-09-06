import { Provider ,connect} from 'react-redux';
import React,{render, Component } from 'react';
import RecommandList from '../recommendList/';
import style from './index.scss';
import { initIndexPageDataSaga } from '../../action';
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

 export default Windex;